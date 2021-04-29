import statePopulation from "../config/population";
import legend from "../config/legend";
import { html } from "htl";

let height = 610;
let width = 975;
//let padding = 20;

// map takes in an object and callback

let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let active = d3.select(null);

var path = d3.geoPath();

let usAlbersJson = d3.json(
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json"
);

let stateVaxRecords = {};
let previousDayStateTotalVax = {};
let twoDaysAgoStateTotalVax = {};

window.stateRecords = stateVaxRecords;
window.previousDay = previousDayStateTotalVax;
window.twoDaysAgo = twoDaysAgoStateTotalVax;
// clear st

let date;

let stateVaxCSV = d3.csv(
  "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv",
  (stateVaxObj) => {
    // our world in data updates vaccine data at 12 PST everyday

    let formatTime = d3.timeFormat("%Y-%m-%d");
    let today = new Date();
    let yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);

    let todayMinusTwo = new Date(today);
    todayMinusTwo.setDate(todayMinusTwo.getDate() - 2);

    let currentDay = formatTime(today);
    let previousDay = formatTime(yesterday);
    let twoDaysAgo = formatTime(todayMinusTwo);

    // we don't know when the API updates. We just know it happens sometime between 12 and 1pm so
    // I'm taking the max of the two to be safe.

    if (today.getHours() < 13) {
      if (stateVaxObj.date == twoDaysAgo) {
        twoDaysAgoStateTotalVax[stateVaxObj.location] =
          stateVaxObj.people_fully_vaccinated;
      }

      if (stateVaxObj.date == previousDay) {
        previousDayStateTotalVax[stateVaxObj.location] =
          stateVaxObj.people_fully_vaccinated;

        stateVaxRecords[stateVaxObj.location] = stateVaxObj;
      }
    } else {
      if (stateVaxObj.date == previousDay) {
        console.log(stateVaxObj);

        previousDayStateTotalVax[stateVaxObj.location] =
          stateVaxObj.people_fully_vaccinated;
      }

      if (stateVaxObj.date == currentDay) {
        stateVaxRecords[stateVaxObj.location] = stateVaxObj;
      }
    }
  }
);

let statePopulationObj = statePopulation;

// creating the legend at the top

let color = d3.scaleQuantize().domain([0, 100]).range(d3.schemeGreens[8]);
svg
  .append("g")
  .attr("transform", "translate(610,20)")
  .append(() =>
    legend({ color, title: "Vaccinated Population (%)", width: 260 })
  );

// create tooltip
let tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("display", "flex")
  .style("flex-direction", "column")
  .style("align-items", "center")
  .style("background-color", "white")
  .style("border", "1px solid")
  .style("border-radius", "5px")
  .style("width", "300px")
  .style("height", "82px")
  .style("padding", "10px")
  .style("visibility", "hidden");

Promise.all([usAlbersJson, stateVaxCSV, statePopulationObj]).then((values) => {
  drawMap(values[0], stateVaxRecords, values[2]);
});

let drawMap = (usTopoData, stateVax, statePopulation) => {
  try {
    // new york === new york state in stateVaxObx

    let statePercentage;
    let stateTotalVaccinated;
    svg
      .append("g")
      .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(usTopoData, usTopoData.objects.states).features) // binding TopoJSON data elements
      .enter()
      .append("path")
      .attr("fill", (d) => {
        let d_State = d.properties.name;

        let percentage = statePopulation[d_State]
          ? d_State === "New York"
            ? (stateVax["New York State"].people_fully_vaccinated /
                statePopulation[d_State]) *
              100
            : (stateVax[d_State].people_fully_vaccinated /
                statePopulation[d_State]) *
              100
          : 0;

        // let percentageIncrease = statePopulation[d_State] ? d_State === "New York"

        // turning percentage into a float with 2 decimal points
        percentage = Number.parseFloat(percentage).toPrecision(4);

        d.properties.name = d_State;
        d.properties.percentage = percentage;
        d.properties.statePopulation = statePopulation[d_State];
        d.properties.date = date;
        // d.properties.previousDay = priorDay;

        d_State === "New York"
          ? (d.properties.fully_vaccinated =
              stateVax["New York State"].people_fully_vaccinated)
          : (d.properties.fully_vaccinated =
              stateVax[d_State].people_fully_vaccinated);

        let col = color(percentage);

        return col;
      })
      .attr("d", path)
      .on("mouseover", (d) => {
        let {
          name,
          percentage,
          statePopulation,
          fully_vaccinated,
          date,
        } = d.properties;

        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(`
         <div
         style="position: absolute;  display: flex; justify-content: center; align-items: center;
          flex-direction: column;"
          >
            <span>${name} (as of ${date})</span>
            <span>Population (as of 2019): ${statePopulation}</span>
            <span>Number of people vaccinated: ${fully_vaccinated}</span>
            <span>Percentage of people vaccinated: ${percentage} %</span>
            <span>Percentage increase from previous day ()
          </div>
          `);
      })
      .on("mouseout", (d) => {
        d3.select(".tooltip")
          .transition()
          .duration(200)
          .style("visibility", "visible")
          .style("opacity", 0);
      })
      .on("mousemove", () => {
        d3.select(".tooltip")
          .style("visibility", "visible")
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
      });

    svg
      .append("path")
      .datum(
        topojson.mesh(usTopoData, usTopoData.objects.states, (a, b) => a !== b)
      )
      .attr("fill", "none")
      .attr("stroke", "#485063")
      // .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

    d3.select("svg").selectAll(".states");
  } catch (e) {
    console.log("error: ", e);
  }
};
