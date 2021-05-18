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

/***/ "./config/legend.js":
/*!**************************!*\
  !*** ./config/legend.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// this legend function was written by Mike Bostock and posted on Observable HQ\nfunction legend() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      color = _ref.color,\n      title = _ref.title,\n      _ref$tickSize = _ref.tickSize,\n      tickSize = _ref$tickSize === void 0 ? 6 : _ref$tickSize,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 320 : _ref$width,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 44 + tickSize : _ref$height,\n      _ref$marginTop = _ref.marginTop,\n      marginTop = _ref$marginTop === void 0 ? 18 : _ref$marginTop,\n      _ref$marginRight = _ref.marginRight,\n      marginRight = _ref$marginRight === void 0 ? 0 : _ref$marginRight,\n      _ref$marginBottom = _ref.marginBottom,\n      marginBottom = _ref$marginBottom === void 0 ? 16 + tickSize : _ref$marginBottom,\n      _ref$marginLeft = _ref.marginLeft,\n      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft,\n      _ref$ticks = _ref.ticks,\n      ticks = _ref$ticks === void 0 ? width / 64 : _ref$ticks,\n      tickFormat = _ref.tickFormat,\n      tickValues = _ref.tickValues;\n\n  var svg = d3.create(\"svg\").attr(\"width\", width).attr(\"height\", height).attr(\"viewBox\", [0, 0, width, height]).style(\"overflow\", \"visible\").style(\"display\", \"block\");\n  var x; // Continuous\n\n  if (color.interpolator) {\n    x = Object.assign(color.copy().interpolator(d3.interpolateRound(marginLeft, width - marginRight)), {\n      range: function range() {\n        return [marginLeft, width - marginRight];\n      }\n    });\n    svg.append(\"image\").attr(\"x\", marginLeft).attr(\"y\", marginTop).attr(\"width\", width - marginLeft - marginRight).attr(\"height\", height - marginTop - marginBottom).attr(\"preserveAspectRatio\", \"none\").attr(\"xlink:href\", ramp(color.interpolator()).toDataURL()); // scaleSequentialQuantile doesn’t implement ticks or tickFormat.\n\n    if (!x.ticks) {\n      if (tickValues === undefined) {\n        var n = Math.round(ticks + 1);\n        tickValues = d3.range(n).map(function (i) {\n          return d3.quantile(color.domain(), i / (n - 1));\n        });\n      }\n\n      if (typeof tickFormat !== \"function\") {\n        tickFormat = d3.format(tickFormat === undefined ? \",f\" : tickFormat);\n      }\n    }\n  } // Discrete\n  else if (color.invertExtent) {\n      var thresholds = color.thresholds ? color.thresholds() // scaleQuantize\n      : color.quantiles ? color.quantiles() // scaleQuantile\n      : color.domain(); // scaleThreshold\n\n      var thresholdFormat = tickFormat === undefined ? function (d) {\n        return d;\n      } : typeof tickFormat === \"string\" ? d3.format(tickFormat) : tickFormat;\n      x = d3.scaleLinear().domain([-1, color.range().length - 1]).rangeRound([marginLeft, width - marginRight]);\n      svg.append(\"g\").selectAll(\"rect\").data(color.range()).join(\"rect\").attr(\"x\", function (d, i) {\n        return x(i - 1);\n      }).attr(\"y\", marginTop).attr(\"width\", function (d, i) {\n        return x(i) - x(i - 1);\n      }).attr(\"height\", height - marginTop - marginBottom).attr(\"fill\", function (d) {\n        return d;\n      });\n      tickValues = d3.range(thresholds.length);\n\n      tickFormat = function tickFormat(i) {\n        return thresholdFormat(thresholds[i], i);\n      };\n    }\n\n  svg.append(\"g\").attr(\"transform\", \"translate(0, \".concat(height - marginBottom, \")\")).call(d3.axisBottom(x).ticks(ticks, typeof tickFormat === \"string\" ? tickFormat : undefined).tickFormat(typeof tickFormat === \"function\" ? tickFormat : undefined).tickSize(tickSize).tickValues(tickValues)).call(function (g) {\n    return g.selectAll(\".tick line\").attr(\"y1\", marginTop + marginBottom - height);\n  }).call(function (g) {\n    return g.select(\".domain\").remove();\n  }).call(function (g) {\n    return g.append(\"text\").attr(\"y\", marginTop + marginBottom - height - 6).attr(\"fill\", \"currentColor\").attr(\"text-anchor\", \"start\").attr(\"font-weight\", \"bold\").text(title);\n  });\n  return svg.node();\n}\n\nfunction ramp(color) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;\n  var canvas = document.createElement(\"canvas\");\n  var context = canvas.getContext(\"2d\");\n\n  for (var i = 0; i < n; ++i) {\n    context.fillStyle = color(i / (n - 1));\n    context.fillRect(i, 0, 1, 1);\n  }\n\n  return canvas;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (legend);\n\n//# sourceURL=webpack://covid-visualization/./config/legend.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/population */ \"./config/population.js\");\n/* harmony import */ var _config_legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/legend */ \"./config/legend.js\");\n\n\nvar height = 610;\nvar width = 975; //let padding = 20;\n// map takes in an object and callback\n\nvar svg = d3.select(\"body\").append(\"svg\").attr(\"width\", width).attr(\"height\", height);\nvar active = d3.select(null);\nvar path = d3.geoPath();\nvar usAlbersJson = d3.json(\"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json\");\nvar day = new Date();\nvar stateVaxRecords = {};\nvar previousDayStateTotalVax = {};\nvar twoDaysAgoStateTotalVax = {};\nvar date;\nwindow.stateVaxRecords = stateVaxRecords;\nvar stateVaxCSV = d3.csv(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv\", function (stateVaxObj) {\n  // our world in data updates vaccine data at 12 PST everyday\n  var formatTime = d3.timeFormat(\"%Y-%m-%d\");\n  var today = new Date();\n  var yesterday = new Date(today);\n  yesterday.setDate(yesterday.getDate() - 1);\n  var todayMinusTwo = new Date(today);\n  todayMinusTwo.setDate(todayMinusTwo.getDate() - 2);\n  var currentDay = formatTime(today);\n  var previousDay = formatTime(yesterday);\n  var twoDaysAgo = formatTime(todayMinusTwo);\n  /**\n   * issue: the data coming back is one obj at a time\n   * meaning that if I'm looking for one particular date, i'd have to iterate\n   * through every one of the objects to find the data\n   */\n\n  /**\n   * Possible solution:\n   *   - The only object that only contains the number of people\n   *     vaccinated is twoDaysAgoStateTotalVax obj\n   *   - Other wise both previousDay and stateVaxRecords need to have all\n   *     of the data\n   *\n   *   The parsing of this data will be done when drawing the map\n   */\n\n  if (stateVaxObj.date == twoDaysAgo) {\n    twoDaysAgoStateTotalVax[stateVaxObj.location] = stateVaxObj.people_fully_vaccinated;\n  }\n\n  if (stateVaxObj.date == previousDay) {\n    date = stateVaxObj.date;\n    previousDayStateTotalVax[stateVaxObj.location] = stateVaxObj;\n  }\n\n  if (stateVaxObj.date == currentDay) {\n    date = stateVaxObj.date;\n    stateVaxRecords[stateVaxObj.location] = stateVaxObj;\n  }\n});\nvar statePopulationObj = _config_population__WEBPACK_IMPORTED_MODULE_0__.default; // creating the legend at the top\n\nvar color = d3.scaleQuantize().domain([0, 100]).range(d3.schemeGreens[8]);\nsvg.append(\"g\").attr(\"transform\", \"translate(610,20)\").append(function () {\n  return (0,_config_legend__WEBPACK_IMPORTED_MODULE_1__.default)({\n    color: color,\n    title: \"Vaccinated Population (%)\",\n    width: 260\n  });\n}); // create tooltip\n\nvar tooltip = d3.select(\"body\").append(\"div\").attr(\"class\", \"tooltip\").style(\"position\", \"absolute\").style(\"display\", \"flex\").style(\"flex-direction\", \"column\").style(\"align-items\", \"center\").style(\"background-color\", \"white\").style(\"border\", \"1px solid\").style(\"border-radius\", \"5px\").style(\"width\", \"315px\").style(\"height\", \"82px\").style(\"padding\", \"15px\").style(\"padding-bottom\", \"20px\").style(\"visibility\", \"hidden\");\nPromise.all([usAlbersJson, stateVaxCSV, statePopulationObj]).then(function (values) {\n  if (Object.keys(stateVaxRecords).length < 1) {\n    console.log(\"here\");\n    drawMap(values[0], previousDayStateTotalVax, values[2]);\n  } else {\n    console.log(\"hello\");\n    drawMap(values[0], stateVaxRecords, values[2]);\n  }\n});\n\nvar drawMap = function drawMap(usTopoData, stateVax, statePopulation) {\n  try {\n    // new york === new york state in stateVaxObx\n    var statePercentage;\n    var stateTotalVaccinated;\n    svg.append(\"g\").attr(\"class\", \"states\").selectAll(\"path\").data(topojson.feature(usTopoData, usTopoData.objects.states).features) // binding TopoJSON data elements\n    .enter().append(\"path\").attr(\"fill\", function (d) {\n      var stateName = d.properties.name;\n      console.log(\"two days ago: \", twoDaysAgoStateTotalVax);\n      console.log(\"stateVax: \", stateVax); // stateName has other territories of the united states like Virigin Islands included\n\n      var percentage = statePopulation[stateName] ? stateName === \"New York\" ? stateVax[\"New York State\"].people_fully_vaccinated / statePopulation[stateName] * 100 : stateVax[stateName].people_fully_vaccinated / statePopulation[stateName] * 100 : 0; // turning percentage into a float with 2 decimal points\n\n      percentage = Number.parseFloat(percentage).toPrecision(4);\n      var increasedAmount;\n\n      if (Object.keys(stateVaxRecords).length < 1) {\n        // use twoDaysAgo obj\n        // first check if the state !== to a territory\n        increasedAmount = statePopulation[stateName] ? stateName === \"New York\" ? stateVax[\"New York State\"].people_fully_vaccinated - twoDaysAgoStateTotalVax[\"New York State\"] : stateVax[stateName].people_fully_vaccinated - twoDaysAgoStateTotalVax[stateName] : 0;\n      } else {\n        increasedAmount = statePopulation[stateName] ? stateName === \"New York\" ? stateVax[\"New York State\"].people_fully_vaccinated - previousDayStateTotalVax[\"New York State\"].people_fully_vaccinated : stateVax[stateName].people_fully_vaccinated - previousDayStateTotalVax[stateName].people_fully_vaccinated : 0;\n      }\n\n      d.properties.percentage = percentage; // d.properties.increasedPercentage = increasedPercentage;\n\n      d.properties.increasedAmount = increasedAmount;\n      d.properties.statePopulation = statePopulation[stateName];\n      d.properties.date = date;\n      d.properties.fully_vaccinated = stateName === \"New York\" ? stateVax[\"New York State\"].people_fully_vaccinated : stateVax[stateName].people_fully_vaccinated;\n      var col = color(percentage);\n      return col;\n    }).attr(\"d\", path).on(\"mouseover\", function (d) {\n      var _d$properties = d.properties,\n          name = _d$properties.name,\n          percentage = _d$properties.percentage,\n          statePopulation = _d$properties.statePopulation,\n          fully_vaccinated = _d$properties.fully_vaccinated,\n          date = _d$properties.date,\n          increasedAmount = _d$properties.increasedAmount;\n      tooltip.transition().duration(200).style(\"opacity\", 0.9);\n      tooltip.html(\"\\n         <div\\n         style=\\\"position: absolute;  display: flex; justify-content: center; align-items: center;\\n          flex-direction: column;\\\"\\n          >\\n            <span>\".concat(name, \" (as of \").concat(date, \")</span>\\n            <span>Population (as of 2019): \").concat(statePopulation, \"</span>\\n            <span>Number of people vaccinated: \").concat(fully_vaccinated, \"</span>\\n            <span>Increase from the previous day: \").concat(increasedAmount, \" people</span>\\n            <span>Percentage of people vaccinated: \").concat(percentage, \"%</span>\\n          </div>\\n          \"));\n    }).on(\"mouseout\", function (d) {\n      d3.select(\".tooltip\").transition().duration(200).style(\"visibility\", \"visible\").style(\"opacity\", 0);\n    }).on(\"mousemove\", function () {\n      d3.select(\".tooltip\").style(\"visibility\", \"visible\").style(\"left\", d3.event.pageX + \"px\").style(\"top\", d3.event.pageY + \"px\");\n    });\n    svg.append(\"path\").datum(topojson.mesh(usTopoData, usTopoData.objects.states, function (a, b) {\n      return a !== b;\n    })).attr(\"fill\", \"none\").attr(\"stroke\", \"#485063\") // .attr(\"stroke\", \"white\")\n    .attr(\"stroke-linejoin\", \"round\").attr(\"d\", path);\n    d3.select(\"svg\").selectAll(\".states\");\n  } catch (e) {\n    console.log(\"error: \", e);\n  }\n};\n\n//# sourceURL=webpack://covid-visualization/./src/index.js?");

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