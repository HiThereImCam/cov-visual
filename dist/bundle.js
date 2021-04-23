/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/population.js":
/*!******************************!*\
  !*** ./config/population.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar statePopulation = {\n  Alabama: 4903185,\n  Alaska: 731545,\n  Arkansas: 3017804,\n  Arizona: 7278717,\n  California: 39512223,\n  Colorado: 5758736,\n  Connecticut: 3565287,\n  Delaware: 973764,\n  Florida: 21477737,\n  Georgia: 10617423,\n  Hawaii: 1415872,\n  Iowa: 3155070,\n  Idaho: 1787065,\n  Illinois: 12671821,\n  Indiana: 6732219,\n  Kansas: 2913314,\n  Kentucky: 4467673,\n  Louisiana: 4648794,\n  Massachusetts: 6892503,\n  Maryland: 6045680,\n  Maine: 1344212,\n  Michigan: 9986857,\n  Minnesota: 5639632,\n  Missouri: 6137428,\n  Mississippi: 2976149,\n  Montana: 1068778,\n  \"North Carolina\": 10488084,\n  \"North Dakota\": 762062,\n  Nebraska: 1934408,\n  Nevada: 3080156,\n  \"New Hampshire\": 3080156,\n  \"New Jersey\": 8882190,\n  \"New Mexico\": 2096829,\n  \"New York\": 19453561,\n  Ohio: 11689100,\n  Oklahoma: 3956971,\n  Oregon: 4217737,\n  Pennsylvania: 12801989,\n  \"Rhode Island\": 1059361,\n  \"South Carolina\": 5148714,\n  \"South Dakota\": 884659,\n  Tennessee: 6829174,\n  Texas: 28995881,\n  Utah: 3205958,\n  Virginia: 8535519,\n  Vermont: 623989,\n  Washington: 7614893,\n  Wisconsin: 5822434,\n  \"West Virginia\": 1792147,\n  Wyoming: 578759\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statePopulation);\n\n//# sourceURL=webpack://covid-visualization/./config/population.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/population */ \"./config/population.js\");\n\nvar height = 610;\nvar width = 975; // map takes in an object and callback\n\nvar stateVaxRecords = {};\nwindow.stateRecords = stateVaxRecords;\nvar svg = d3.select(\"body\").append(\"svg\").attr(\"width\", width).attr(\"height\", height);\nvar usAlbersJson = d3.json(\"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json\");\nvar stateVaxCSV = d3.csv(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv\", function (stateVaxObj) {\n  // console.log(\"stateVax: \", stateVaxObj);\n  var formatTime = d3.timeFormat(\"%Y-%m-%d\");\n  var currentDay = formatTime(new Date());\n\n  if (stateVaxObj.date == currentDay) {\n    // stateVaxRecords.set(stateVaxObj.location, stateVaxObj);\n    stateVaxRecords[stateVaxObj.location] = stateVaxObj;\n  }\n});\nvar statePopulationObj = _config_population__WEBPACK_IMPORTED_MODULE_0__.default; //let apiUrls = [\n//  d3.json(\"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json\"),\n//  d3.csv(\n//    \"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv\"\n// (stateVaxObj) => {\n//   // console.log(\"stateVax: \", stateVaxObj);\n//   let formatTime = d3.timeFormat(\"%Y-%m-%d\");\n//   let currentDay = formatTime(new Date());\n//   if (stateVaxObj.date == currentDay) {\n//     stateVaxRecords.set(stateVaxObj.location, stateVaxObj);\n//   }\n// }\n//  ),\n// ];\n// creating the legend at the top\n// let x = d3.scaleLinear().domain([0, 10]);\n// .rangeRound([10, 20, 30, 40, 50, 60, 70, 80, 90]);\n// rangeRound([])\n//.rangeRound([600, 860]);\n// this deals with the width of the scale\n\nvar x = d3.scaleLinear().domain([0, 100]).range([300, 600]);\nconsole.log(\"This is x: \", x); // var x = d3.scaleLinear().domain([10, 100]).rangeRound([10, 100]);\n// let color = d3\n//   .scaleThreshold()\n//   .domain(d3.range(1, 10))\n//   .range(d3.schemeGreens[10]);\n// let color = d3.scaleThreshold().domain([0, 100]).range(d3.schemeGreens[101]);\n// let color = d3.scaleThreshold().domain([0, 10]).range(d3.schemeGreens[10]);\n// var g = svg\n//   .append(\"g\")\n//   .attr(\"class\", \"key\")\n//   .attr(\"transform\", \"translate(0,40)\");\n// console.log(\"this is g: \", g);\n// g.selectAll(\"rect\")\n//   .data(\n//     color.range().map(function (d) {\n//       console.log(\"THIS IS D: \", d);\n//       d = color.invertExtent(d);\n//       if (d[0] == null) d[0] = x.domain()[0];\n//       if (d[1] == null) d[1] = x.domain()[1];\n//       return d;\n//     })\n//   )\n//   .enter()\n//   .append(\"rect\")\n//   .attr(\"height\", 8)\n//   .attr(\"x\", function (d) {\n//     console.log(\"What is d here: \", d);\n//     return x(d[0]);\n//   })\n//   .attr(\"width\", function (d) {\n//     console.log(\"Is this a different D(?): \", d);\n//     return x(d[1]) - x(d[0]);\n//   })\n//   .attr(\"fill\", function (d) {\n//     return color(d[0]);\n//   });\n// g.append(\"text\")\n//   .attr(\"class\", \"caption\")\n//   .attr(\"x\", x.range()[0])\n//   .attr(\"y\", -6)\n//   .attr(\"fill\", \"#000\")\n//   .attr(\"text-anchor\", \"start\")\n//   .attr(\"font-weight\", \"bold\")\n//   .text(\"Vaccination rate\");\n// g.call(\n//   d3\n//     .axisBottom(x)\n//     .tickSize(13)\n//     .tickFormat(function (x, i) {\n//       return i ? x : x + \"%\";\n//     })\n//     .tickValues(color.domain())\n// )\n//   .select(\".domain\")\n//  .remove();\n// g in this case is the legend\n//\"https://api.covidtracking.com/v1/states/current.json\",\n// d3.json(\n//   \"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json\"\n// ).then((us) => drawMap(us));\n\nPromise.all([usAlbersJson, stateVaxCSV, statePopulationObj]).then(function (values) {\n  drawMap(values[0], stateVaxRecords, values[2]);\n}); // Promise.all(apiUrls).then((urls) => console.log(\"this is urls: \", urls));\n\nvar drawMap = function drawMap(usTopoData, stateVaxObj, statePopulation) {\n  console.log(\"this is usTopoData\", usTopoData);\n  console.log(\"this is stateVaxObj\", stateVaxObj);\n  console.log(\"this is state population: \", statePopulation);\n  console.log(\"topojson: \", topojson.feature(usTopoData, usTopoData.objects.states).features);\n\n  try {\n    svg.append(\"g\").attr(\"class\", \"states\").selectAll(\"path\").data(topojson.feature(usTopoData, usTopoData.objects.states).features) // binding TopoJSON data elements\n    .enter().append(\"path\").attr(\"fill\", function (d) {\n      console.log(\"d: \", d);\n      var d_State = d.properties.name; //  console.log(\"state obj: \", stateVaxObj[d_State].total_vaccinations);\n      // new york === new york state in stateVaxObx\n\n      var percentage = statePopulation[d_State] ? d_State === \"New York\" ? stateVaxObj[\"New York State\"].total_vaccinations / statePopulation[d_State] : stateVaxObj[d_State].total_vaccinations / statePopulation[d_State] : 0;\n      console.log(\"percentage: \", percentage);\n    }); // .attr(\"d\", d3.geoPath())\n    // .style(\"fill\", \"#ccc\")\n    // .style(\"stroke\", \"#333\");\n  } catch (e) {\n    console.log(\"error: \", e);\n  }\n}; // let drawMap = (us, covid) => {\n//   try {\n//     // this draws the map\n//     svg\n//       .append(\"g\")\n//       .attr(\"class\", \"states\")\n//       .selectAll(\"path\")\n//       .data(topojson.feature(us, us.objects.states).features) // binding TopoJSON data elements\n//       .enter()\n//       .append(\"path\")\n//       .attr(\"d\", d3.geoPath())\n//       .style(\"fill\", \"white\")\n//       .style(\"stroke\", \"black\");\n//   } catch (e) {\n//     console.log(e);\n//   }\n// };\n\n//# sourceURL=webpack://covid-visualization/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;