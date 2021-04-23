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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction legend() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      color = _ref.color,\n      title = _ref.title,\n      _ref$tickSize = _ref.tickSize,\n      tickSize = _ref$tickSize === void 0 ? 6 : _ref$tickSize,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 320 : _ref$width,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 44 + tickSize : _ref$height,\n      _ref$marginTop = _ref.marginTop,\n      marginTop = _ref$marginTop === void 0 ? 18 : _ref$marginTop,\n      _ref$marginRight = _ref.marginRight,\n      marginRight = _ref$marginRight === void 0 ? 0 : _ref$marginRight,\n      _ref$marginBottom = _ref.marginBottom,\n      marginBottom = _ref$marginBottom === void 0 ? 16 + tickSize : _ref$marginBottom,\n      _ref$marginLeft = _ref.marginLeft,\n      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft,\n      _ref$ticks = _ref.ticks,\n      ticks = _ref$ticks === void 0 ? width / 64 : _ref$ticks,\n      tickFormat = _ref.tickFormat,\n      tickValues = _ref.tickValues;\n\n  var svg = d3.create(\"svg\").attr(\"width\", width).attr(\"height\", height).attr(\"viewBox\", [0, 0, width, height]).style(\"overflow\", \"visible\").style(\"display\", \"block\");\n  var x; // Continuous\n\n  if (color.interpolator) {\n    x = Object.assign(color.copy().interpolator(d3.interpolateRound(marginLeft, width - marginRight)), {\n      range: function range() {\n        return [marginLeft, width - marginRight];\n      }\n    });\n    svg.append(\"image\").attr(\"x\", marginLeft).attr(\"y\", marginTop).attr(\"width\", width - marginLeft - marginRight).attr(\"height\", height - marginTop - marginBottom).attr(\"preserveAspectRatio\", \"none\").attr(\"xlink:href\", ramp(color.interpolator()).toDataURL()); // scaleSequentialQuantile doesn’t implement ticks or tickFormat.\n\n    if (!x.ticks) {\n      if (tickValues === undefined) {\n        var n = Math.round(ticks + 1);\n        tickValues = d3.range(n).map(function (i) {\n          return d3.quantile(color.domain(), i / (n - 1));\n        });\n      }\n\n      if (typeof tickFormat !== \"function\") {\n        tickFormat = d3.format(tickFormat === undefined ? \",f\" : tickFormat);\n      }\n    }\n  } // Discrete\n  else if (color.invertExtent) {\n      var thresholds = color.thresholds ? color.thresholds() // scaleQuantize\n      : color.quantiles ? color.quantiles() // scaleQuantile\n      : color.domain(); // scaleThreshold\n\n      var thresholdFormat = tickFormat === undefined ? function (d) {\n        return d;\n      } : typeof tickFormat === \"string\" ? d3.format(tickFormat) : tickFormat;\n      x = d3.scaleLinear().domain([-1, color.range().length - 1]).rangeRound([marginLeft, width - marginRight]);\n      svg.append(\"g\").selectAll(\"rect\").data(color.range()).join(\"rect\").attr(\"x\", function (d, i) {\n        return x(i - 1);\n      }).attr(\"y\", marginTop).attr(\"width\", function (d, i) {\n        return x(i) - x(i - 1);\n      }).attr(\"height\", height - marginTop - marginBottom).attr(\"fill\", function (d) {\n        return d;\n      });\n      tickValues = d3.range(thresholds.length);\n\n      tickFormat = function tickFormat(i) {\n        return thresholdFormat(thresholds[i], i);\n      };\n    }\n\n  svg.append(\"g\").attr(\"transform\", \"translate(0, \".concat(height - marginBottom, \")\")).call(d3.axisBottom(x).ticks(ticks, typeof tickFormat === \"string\" ? tickFormat : undefined).tickFormat(typeof tickFormat === \"function\" ? tickFormat : undefined).tickSize(tickSize).tickValues(tickValues)).call(function (g) {\n    return g.selectAll(\".tick line\").attr(\"y1\", marginTop + marginBottom - height);\n  }).call(function (g) {\n    return g.select(\".domain\").remove();\n  }).call(function (g) {\n    return g.append(\"text\").attr(\"y\", marginTop + marginBottom - height - 6).attr(\"fill\", \"currentColor\").attr(\"text-anchor\", \"start\").attr(\"font-weight\", \"bold\").text(title);\n  });\n  return svg.node();\n}\n\nfunction ramp(color) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;\n  var canvas = document.createElement(\"canvas\");\n  var context = canvas.getContext(\"2d\");\n\n  for (var i = 0; i < n; ++i) {\n    context.fillStyle = color(i / (n - 1));\n    context.fillRect(i, 0, 1, 1);\n  }\n\n  return canvas;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (legend);\n\n//# sourceURL=webpack://covid-visualization/./config/legend.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/population */ \"./config/population.js\");\n/* harmony import */ var _config_legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/legend */ \"./config/legend.js\");\n\n\nvar height = 610;\nvar width = 975; // map takes in an object and callback\n\nvar svg = d3.select(\"body\").append(\"svg\").attr(\"width\", width).attr(\"height\", height);\nvar stateVaxRecords = {};\nwindow.stateRecords = stateVaxRecords;\nvar path = d3.geoPath();\nvar usAlbersJson = d3.json(\"https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json\");\nvar stateVaxCSV = d3.csv(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv\", function (stateVaxObj) {\n  // console.log(\"stateVax: \", stateVaxObj);\n  var formatTime = d3.timeFormat(\"%Y-%m-%d\");\n  var currentDay = formatTime(new Date());\n\n  if (stateVaxObj.date == currentDay) {\n    // stateVaxRecords.set(stateVaxObj.location, stateVaxObj);\n    stateVaxRecords[stateVaxObj.location] = stateVaxObj;\n  }\n});\nvar statePopulationObj = _config_population__WEBPACK_IMPORTED_MODULE_0__.default; // creating the legend at the top\n\nvar color = d3.scaleQuantize().domain([0, 100]).range(d3.schemeGreens[8]);\nsvg.append(\"g\").attr(\"transform\", \"translate(610,20)\").append(function () {\n  return (0,_config_legend__WEBPACK_IMPORTED_MODULE_1__.default)({\n    color: color,\n    title: \"Vaccinated Population (%)\",\n    width: 260\n  });\n}); // let x = d3.scaleLinear().domain([0, 10]);\n// .rangeRound([10, 20, 30, 40, 50, 60, 70, 80, 90]);\n// rangeRound([])\n// .rangeRound([600, 860]);\n//this deals with the width of the scale\n// var x = d3.scaleLinear().domain([0, 100]).range([300, 600]);\n// var x = d3.scaleLinear().domain([10, 100]).rangeRound([600, 860]);\n// let color = d3\n//   .scaleThreshold()\n//   .domain(d3.range(10, 100))\n//   .range(d3.schemePaired[10]);\n// let color = d3.scaleThreshold().domain([0, 100]).\n// let color = d3.scaleThreshold().domain([0, 10]).range(d3.schemeGreens[10]);\n// var g = svg\n//   .append(\"g\")\n//   .attr(\"class\", \"key\")\n//   .attr(\"transform\", \"translate(0,40)\");\n// console.log(\"this is g: \", g);\n// g.selectAll(\"rect\")\n//   .data(\n//     color.range().map(function (d) {\n//       console.log(\"THIS IS D: \", d);\n//       d = color.invertExtent(d);\n//       if (d[0] == null) d[0] = x.domain()[0];\n//       if (d[1] == null) d[1] = x.domain()[1];\n//       return d;\n//     })\n//   )\n//   .enter()\n//   .append(\"rect\")\n//   .attr(\"height\", 8)\n//   .attr(\"x\", function (d) {\n//     console.log(\"What is d here: \", d);\n//     return x(d[0]);\n//   })\n//   .attr(\"width\", function (d) {\n//     console.log(\"Is this a different D(?): \", d);\n//     return x(d[1]) - x(d[0]);\n//   })\n//   .attr(\"fill\", function (d) {\n//     return color(d[0]);\n//   });\n// g.append(\"text\")\n//   .attr(\"class\", \"caption\")\n//   .attr(\"x\", x.range()[0])\n//   .attr(\"y\", -6)\n//   .attr(\"fill\", \"#000\")\n//   .attr(\"text-anchor\", \"start\")\n//   .attr(\"font-weight\", \"bold\")\n//   .text(\"Vaccination rate\");\n// g.call(\n//   d3\n//     .axisBottom(x)\n//     .tickSize(13)\n//     .tickFormat(function (x, i) {\n//       return i ? x : x + \"%\";\n//     })\n//     .tickValues(color.domain())\n//     .ticks(10)\n// )\n//   .select(\".domain\")\n//   .remove();\n// g in this case is the legend\n\nPromise.all([usAlbersJson, stateVaxCSV, statePopulationObj]).then(function (values) {\n  drawMap(values[0], stateVaxRecords, values[2]);\n}); // Promise.all(apiUrls).then((urls) => console.log(\"this is urls: \", urls));\n\nvar drawMap = function drawMap(usTopoData, stateVaxObj, statePopulation) {\n  console.log(\"this is usTopoData\", usTopoData);\n  console.log(\"this is stateVaxObj\", stateVaxObj);\n  console.log(\"this is state population: \", statePopulation);\n  console.log(\"topojson: \", topojson.feature(usTopoData, usTopoData.objects.states).features);\n\n  try {\n    svg.append(\"g\").attr(\"class\", \"states\").selectAll(\"path\").data(topojson.feature(usTopoData, usTopoData.objects.states).features) // binding TopoJSON data elements\n    .enter().append(\"path\").attr(\"fill\", function (d) {\n      var d_State = d.properties.name; // new york === new york state in stateVaxObx\n\n      var percentage = statePopulation[d_State] ? d_State === \"New York\" ? stateVaxObj[\"New York State\"].people_fully_vaccinated / statePopulation[d_State] * 100 : stateVaxObj[d_State].people_fully_vaccinated / statePopulation[d_State] * 100 : 0; // turning percentage into a float with 2 decimal points\n\n      percentage = Number.parseFloat(percentage).toPrecision(4);\n      console.log(\"this is percentage: \", percentage);\n      var col = color(percentage);\n      console.log(\"This is col: \", col);\n      return col;\n    }).attr(\"d\", path);\n    svg.append(\"path\").datum(topojson.mesh(usTopoData, usTopoData.objects.states, function (a, b) {\n      return a !== b;\n    })).attr(\"fill\", \"none\").attr(\"stroke\", \"navy\").attr(\"stroke-linejoin\", \"round\").attr(\"d\", path);\n  } catch (e) {\n    console.log(\"error: \", e);\n  }\n};\n\n//# sourceURL=webpack://covid-visualization/./src/index.js?");

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