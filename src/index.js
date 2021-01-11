import statesAbbr from "../config/states";

let svg = d3.select("#svg");

let states;
let covidStateData;

axios.get("https://api.covidtracking.com/v1/us/current.json").then((data) => {
  covidUsData = data;
});

axios
  .get("https://api.covidtracking.com/v1/states/current.json")
  .then((data) => {
    covidStateData = data;
    drawMap();
  });

let drawMap = () => {
  svg
    .selectAll("path")
    .data(states)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .attr("fill", (statesItem) => {
      let stateName = statesItem.properties.name;

      let infected = covidStateData.data.find((covidItem) => {
        return covidItem.state === statesAbbr[stateName];
      });

      if (infected != undefined && infected.positive > 1) {
        return "red";
      } else {
        null;
      }
    });
};

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json").then(
  (us) => {
    states = topojson.feature(us, us.objects.states).features;
  }
);
