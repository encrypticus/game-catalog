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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("puWe");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Mtd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ PageHead; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head/PageHead.jsx




const PageHead = ({
  title
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
    children: title
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  })]
});
// CONCATENATED MODULE: ./components/Head/index.js


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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/reducers/games-data-reducer.js
var games_data_reducer = __webpack_require__("hg8P");

// EXTERNAL MODULE: ./utils/query-string.js
var query_string = __webpack_require__("5W67");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/Search/styles.js

const useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    width: '100%',
    padding: 5,
    border: 0,
    outline: 0,
    borderRadius: 5,
    backgroundColor: '#505050',
    color: '#fff',
    font: 'inherit',
    '&:focus': {
      boxShadow: '0 0 10px #fff'
    }
  },
  form: {
    marginLeft: 10,
    flexGrow: 2,
    [theme.breakpoints.up(768)]: {
      flexGrow: 0,
      minWidth: '30%',
      marginLeft: 'auto'
    }
  }
}));
// CONCATENATED MODULE: ./components/Search/Search.jsx







const Search = () => {
  const {
    0: query,
    1: setQuery
  } = Object(external_react_["useState"])('');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    gamesDataReducer: {
      options
    }
  } = Object(external_react_redux_["useSelector"])(state => state);
  const styles = useStyles();

  const handleChangeQuery = ({
    target: {
      value
    }
  }) => {
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const optionsQueryString = Object(query_string["a" /* getQueryString */])(options);
    const queryString = `${router.pathname}?${optionsQueryString}`;
    router.push(queryString);
    dispatch(Object(games_data_reducer["c" /* clearGamesData */])());
  };

  Object(external_react_["useEffect"])(() => {
    dispatch(Object(games_data_reducer["b" /* changeOptions */])({
      search: query.trim()
    }));
  }, [query]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
    className: styles.form,
    onSubmit: handleSubmit,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      className: styles.root,
      value: query,
      onChange: handleChangeQuery,
      placeholder: "Search..."
    })
  });
};
// CONCATENATED MODULE: ./components/Search/index.js

// CONCATENATED MODULE: ./components/Header/styles.js

const styles_useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    padding: '10px',
    backgroundColor: '#000'
  },
  logoText: {
    display: 'none',
    marginLeft: '10px',
    color: '#fff',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    [theme.breakpoints.up(768)]: {
      display: 'block'
    }
  }
}));
// CONCATENATED MODULE: ./components/Header/Header.jsx





const Header = ({
  page
}) => {
  const styles = styles_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: styles.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/logo.png",
      width: 70,
      alt: "Game Catalog"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: styles.logoText,
      children: "game catalog"
    }), page === 'home' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search, {})]
  });
};
Header.defaultProps = {
  page: 'home'
};
// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ "PWcZ":
/***/ (function(module, exports) {

module.exports = require("react-spinners-kit");

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

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hg8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return gamesDataReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearGamesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetFilter; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  gamesData: {
    count: '',
    results: []
  },
  options: {},
  query: ''
};
const gamesReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'gamesData',
  initialState,
  reducers: {
    add(state, {
      payload: {
        count,
        results
      }
    }) {
      const {
        gamesData: {
          results: currentResults
        }
      } = state;
      const filtered = results.filter(el => currentResults.every(cur => el.id !== cur.id));
      state.gamesData.count = count;
      state.gamesData.results = [...currentResults, ...filtered];
    },

    clearGamesData(state) {
      state.gamesData = {
        count: 0,
        results: []
      };
    },

    changeOptions(state, {
      payload
    }) {
      state.options = _objectSpread(_objectSpread({}, state.options), payload);
    },

    resetFilter(state) {
      delete state.options.platforms;
    }

  }
});
const {
  reducer: gamesDataReducer,
  actions: {
    add,
    clearGamesData,
    changeOptions,
    resetFilter
  }
} = gamesReducer;

/***/ }),

/***/ "puWe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Game; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-spinners-kit"
var external_react_spinners_kit_ = __webpack_require__("PWcZ");

// EXTERNAL MODULE: ./components/Head/index.js + 1 modules
var Head = __webpack_require__("5Mtd");

// EXTERNAL MODULE: ./components/Header/index.js + 5 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__("KaAA");

// CONCATENATED MODULE: ./components/Slider/Slider.jsx



const Slider = ({
  urls,
  alt
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_responsive_carousel_["Carousel"], {
  emulateTouch: true,
  dynamicHeight: true,
  children: urls.map((url, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: url,
      alt: alt
    })
  }, idx))
});
// CONCATENATED MODULE: ./components/Slider/index.js

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./styles/styles.js

const useStyles = Object(core_["makeStyles"])(theme => ({
  gameName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    fontSize: '1.5rem',
    [theme.breakpoints.up(768)]: {
      fontSize: '2rem'
    }
  },
  sliderWrapper: {
    margin: 'auto',
    [theme.breakpoints.up(992)]: {
      maxWidth: '80%'
    }
  },
  linkWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 20,
    fontSize: '1.3rem',
    overflow: 'hidden'
  },
  gameLink: {
    display: 'block',
    marginLeft: 10,
    color: 'green'
  },
  description: {
    marginBottom: 20,
    padding: 10,
    boxShadow: '0 0 5px 5px rgba(0, 0, 0, .1)',
    fontSize: '1.2rem',
    letterSpacing: '.1px'
  },
  linkCap: {
    marginLeft: 10
  },
  btnBack: {
    display: 'inline-block',
    marginRight: 30,
    backgroundColor: 'green',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '8px 20px',
    border: 0,
    borderRadius: 5,
    fontSize: '1.1rem',
    letterSpacing: '.8px',
    cursor: 'pointer',
    transition: 'background-color .3s',
    '&:hover': {
      backgroundColor: '#006d00'
    }
  },
  nameWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}));
// EXTERNAL MODULE: ./utils/rawg-connector.js + 1 modules
var rawg_connector = __webpack_require__("XwpU");

// CONCATENATED MODULE: ./pages/game/[slug].js










function Game({
  game,
  screenshots
}) {
  const {
    name,
    description,
    website
  } = game;
  const descrRef = Object(external_react_["useRef"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  const startLoading = () => setLoading(true);

  const stopLoading = () => setLoading(false);

  const styles = useStyles();
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    const descrBlock = descrRef.current;
    descrBlock && (descrBlock.innerHTML = description);
  }, []);
  Object(external_react_["useEffect"])(() => {
    router_default.a.events.on('routeChangeStart', startLoading);
    router_default.a.events.on('routeChangeComplete', stopLoading);
    return () => {
      router_default.a.events.off('routeChangeStart', startLoading);
      router_default.a.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const renderSpinner = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "spinner-container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spinners_kit_["MetroSpinner"], {
      color: "#83838A",
      size: 60
    })
  });

  const renderLink = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    className: styles.gameLink,
    href: website,
    target: "_blank",
    rel: "noreferrer",
    children: website
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "page-container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Head["a" /* PageHead */], {
      title: name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* Header */], {
      page: "game"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.nameWrapper,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "button",
            className: styles.btnBack,
            onClick: () => router.back(),
            children: "Back"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: styles.gameName,
            children: name
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.sliderWrapper,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider, {
            urls: screenshots,
            alt: name
          }), loading && renderSpinner()]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: styles.linkWrapper,
          children: ["homepage:", ' ', website ? renderLink() : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: styles.linkCap,
            children: "Unknown"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: styles.description,
          ref: descrRef
        })]
      })
    })]
  });
}
async function getServerSideProps({
  query
}) {
  const {
    slug,
    screenshots
  } = query;
  let game;

  try {
    game = await rawg_connector["a" /* rawgConnector */].getGameData(slug);
  } catch ({
    message
  }) {
    game = {
      error: {
        message
      }
    };
  }

  return {
    props: {
      game,
      screenshots: JSON.parse(screenshots)
    }
  };
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });