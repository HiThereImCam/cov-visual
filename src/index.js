import statePopulation from "../config/population";
import legend from "../config/legend";

const height = 610;
const width = 975;

// map takes in an object and callback

let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let stateVaxRecords = {};

window.stateRecords = stateVaxRecords;

var path = d3.geoPath();

let usAlbersJson = d3.json(
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json"
);

let stateVaxCSV = d3.csv(
  "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv",
  (stateVaxObj) => {
    // console.log("stateVax: ", stateVaxObj);
    let formatTime = d3.timeFormat("%Y-%m-%d");
    let currentDay = formatTime(new Date());
    if (stateVaxObj.date == currentDay) {
      // stateVaxRecords.set(stateVaxObj.location, stateVaxObj);
      stateVaxRecords[stateVaxObj.location] = stateVaxObj;
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

// let x = d3.scaleLinear().domain([0, 10]);
// .rangeRound([10, 20, 30, 40, 50, 60, 70, 80, 90]);

// rangeRound([])
// .rangeRound([600, 860]);

//this deals with the width of the scale
// var x = d3.scaleLinear().domain([0, 100]).range([300, 600]);

// var x = d3.scaleLinear().domain([10, 100]).rangeRound([600, 860]);

// let color = d3
//   .scaleThreshold()
//   .domain(d3.range(10, 100))
//   .range(d3.schemePaired[10]);

// let color = d3.scaleThreshold().domain([0, 100]).

// let color = d3.scaleThreshold().domain([0, 10]).range(d3.schemeGreens[10]);

// var g = svg
//   .append("g")
//   .attr("class", "key")
//   .attr("transform", "translate(0,40)");

// console.log("this is g: ", g);

// g.selectAll("rect")
//   .data(
//     color.range().map(function (d) {
//       console.log("THIS IS D: ", d);
//       d = color.invertExtent(d);
//       if (d[0] == null) d[0] = x.domain()[0];
//       if (d[1] == null) d[1] = x.domain()[1];
//       return d;
//     })
//   )
//   .enter()
//   .append("rect")
//   .attr("height", 8)
//   .attr("x", function (d) {
//     console.log("What is d here: ", d);
//     return x(d[0]);
//   })
//   .attr("width", function (d) {
//     console.log("Is this a different D(?): ", d);
//     return x(d[1]) - x(d[0]);
//   })
//   .attr("fill", function (d) {
//     return color(d[0]);
//   });

// g.append("text")
//   .attr("class", "caption")
//   .attr("x", x.range()[0])
//   .attr("y", -6)
//   .attr("fill", "#000")
//   .attr("text-anchor", "start")
//   .attr("font-weight", "bold")
//   .text("Vaccination rate");

// g.call(
//   d3
//     .axisBottom(x)
//     .tickSize(13)
//     .tickFormat(function (x, i) {
//       return i ? x : x + "%";
//     })
//     .tickValues(color.domain())
//     .ticks(10)
// )
//   .select(".domain")
//   .remove();

// g in this case is the legend

Promise.all([usAlbersJson, stateVaxCSV, statePopulationObj]).then((values) => {
  drawMap(values[0], stateVaxRecords, values[2]);
});

// Promise.all(apiUrls).then((urls) => console.log("this is urls: ", urls));

let drawMap = (usTopoData, stateVaxObj, statePopulation) => {
  console.log("this is usTopoData", usTopoData);
  console.log("this is stateVaxObj", stateVaxObj);
  console.log("this is state population: ", statePopulation);
  console.log(
    "topojson: ",
    topojson.feature(usTopoData, usTopoData.objects.states).features
  );
  try {
    svg
      .append("g")
      .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(usTopoData, usTopoData.objects.states).features) // binding TopoJSON data elements
      .enter()
      .append("path")
      .attr("fill", (d) => {
        let d_State = d.properties.name;

        // new york === new york state in stateVaxObx
        let percentage = statePopulation[d_State]
          ? d_State === "New York"
            ? (stateVaxObj["New York State"].people_fully_vaccinated /
                statePopulation[d_State]) *
              100
            : (stateVaxObj[d_State].people_fully_vaccinated /
                statePopulation[d_State]) *
              100
          : 0;

        // turning percentage into a float with 2 decimal points
        percentage = Number.parseFloat(percentage).toPrecision(4);
        console.log("this is percentage: ", percentage);
        let col = color(percentage);
        console.log("This is col: ", col);
        return col;
      })
      .attr("d", path);

    svg
      .append("path")
      .datum(
        topojson.mesh(usTopoData, usTopoData.objects.states, (a, b) => a !== b)
      )
      .attr("fill", "none")
      .attr("stroke", "navy")
      .attr("stroke-linejoin", "round")
      .attr("d", path);
  } catch (e) {
    console.log("error: ", e);
  }
};
