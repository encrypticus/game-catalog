module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FeR3");


/***/ }),

/***/ "5W67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getQueryString; });
/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */
const getQueryString = options => {
  let optionsQueryString = '';

  for (const option in options) {
    optionsQueryString += `&${option}=${options[option]}`;
  }

  return optionsQueryString;
};

/***/ }),

/***/ "FeR3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rawg_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XwpU");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-console */

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const options = Object.assign({}, req.body);
  const perPage = 20;

  try {
    const gamesData = await _utils_rawg_connector__WEBPACK_IMPORTED_MODULE_0__[/* rawgConnector */ "a"].getGamesData({
      options
    });
    const platforms = await _utils_rawg_connector__WEBPACK_IMPORTED_MODULE_0__[/* rawgConnector */ "a"].getPlatformsData();
    const count = await gamesData.count;
    const maxPage = Math.ceil(count / perPage);

    const {
      page
    } = options,
          otherOptions = _objectWithoutProperties(options, ["page"]);

    res.statusCode = 200;
    res.json({
      gamesData,
      platforms: platforms.results.map(({
        name,
        id
      }) => ({
        name,
        id
      })),
      page: options.page,
      maxPage,
      options: otherOptions
    });
  } catch ({
    message
  }) {
    console.log(message);
  }
});

/***/ }),

/***/ "XwpU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ rawgConnector; });

// UNUSED EXPORTS: default

// CONCATENATED MODULE: ./constants/api-key.js
const API_KEY = 'da040d3c74694ccd93ba910215c99065';
// EXTERNAL MODULE: ./utils/query-string.js
var query_string = __webpack_require__("5W67");

// CONCATENATED MODULE: ./utils/rawg-connector.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console */


class rawg_connector_RawgConnector {
  constructor() {
    _defineProperty(this, "_gameURL", 'https://api.rawg.io/api/games');

    _defineProperty(this, "_platformURL", 'https://api.rawg.io/api/platforms');

    _defineProperty(this, "getGamesData", async ({
      search,
      options
    } = {
      search: '',
      options: {}
    }) => {
      const queryString = Object(query_string["a" /* getQueryString */])(options);

      try {
        const response = await fetch(`${this._gameURL}?key=${API_KEY}${queryString}`);
        return await response.json();
      } catch ({
        message
      }) {
        console.log(message);
      }
    });

    _defineProperty(this, "getGameData", async slug => {
      try {
        const response = await fetch(`${this._gameURL}/${slug}?key=${API_KEY}`);
        return await response.json();
      } catch ({
        message
      }) {
        console.log(message);
      }
    });

    _defineProperty(this, "getPlatformsData", async () => {
      try {
        const response = await fetch(`${this._platformURL}?key=${API_KEY}`);
        return await response.json();
      } catch ({
        message
      }) {
        console.log(message);
      }
    });
  }

}
const rawgConnector = new rawg_connector_RawgConnector();

/***/ })

/******/ });