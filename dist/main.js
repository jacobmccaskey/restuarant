/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menu = \"<br>Luigi's Italian Bistro. <br>\\n<hr>\\n<ul>\\n<li><h3>SALMON SORRENTO</h3><br>\\nLemon butter sauce, Roma tomatoes & capers </li>\\n\\n<li><h3>CHICKEN LIMONE</h3><br>\\nLemon butter sauce & capers </li>\\n<li> <h3>Grandma's Special</h3><br> lil hate on side</li>\\n\\n\\n</ul><hr>\";\nvar contactUs = \"<br>\\n For reservations, please call 077-879-115-7789\\n <hr>\\n James Miato, Chef \\n <hr>\\n Jacob McCaskey, CEO\\n <hr>\\n <br><br>\\n \";\nvar aboutUs = \"<br><br>Luigi's Italian restuarant was founded after the great war,\\nMe grandfater founded it for me great grandmother, who always \\\"claimed\\\" she liked italian.\\nIt was later revealed that she said this becuase her first husband was italian, \\nand she was a nasty women who liked to cause trouble. Anyways, the restuarant gained\\n popularity with the locals, and now we have been in business for 75 years. \\n Me great grandmother is still alive and as full of hate as the day she imigrated from Italy. Please stop by and eat my spagetti.<br><br>\";\nmodule.exports = {\n  aboutUs: aboutUs,\n  contactUs: contactUs,\n  menu: menu\n};\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var webContent = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\nvar contentSpace;\nvar nav = document.createElement('div');\nnav.classList.add('nav');\n\nvar addContent = function addContent() {\n  contentSpace = document.createElement('div');\n  nav.appendChild(contentSpace);\n};\n\nvar removeContent = function removeContent() {\n  nav.removeChild(contentSpace);\n};\n\nvar contactInfo = function contactInfo() {\n  removeContent();\n  addContent();\n  contentSpace.classList.add('info');\n  contentSpace.innerHTML = webContent.contactUs;\n};\n\nvar aboutInfo = function aboutInfo() {\n  removeContent();\n  addContent();\n  contentSpace.classList.add('info');\n  contentSpace.innerHTML = webContent.aboutUs;\n};\n\nvar menuInfo = function menuInfo() {\n  removeContent();\n  addContent();\n  contentSpace.classList.add('info');\n  contentSpace.innerHTML = webContent.menu;\n};\n\nmodule.exports = {\n  nav: nav,\n  contentSpace: contentSpace,\n  menuInfo: menuInfo,\n  aboutInfo: aboutInfo,\n  addContent: addContent,\n  removeContent: removeContent,\n  contactInfo: contactInfo // contactBtn: contactBtn,\n  // aboutBtn: aboutBtn,\n  // menuBtn: menuBtn,\n  // nav: nav,\n\n};\n\n//# sourceURL=webpack:///./src/dom-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = document.querySelector('#content'); // const webContent = require('./content.js');\n\nvar domFun = __webpack_require__(/*! ./dom-functions.js */ \"./src/dom-functions.js\");\n\ndomFun.nav;\ncontent.appendChild(domFun.nav);\nvar menuBtn = document.createElement('button');\nmenuBtn.classList.add('btn');\nmenuBtn.textContent = \"Menu\";\nmenuBtn.addEventListener('click', domFun.menuInfo, false);\ndomFun.nav.appendChild(menuBtn);\nvar aboutBtn = document.createElement('button');\naboutBtn.classList.add('btn');\naboutBtn.textContent = \"About Us\";\naboutBtn.addEventListener('click', domFun.aboutInfo, false);\ndomFun.nav.appendChild(aboutBtn);\nvar contactBtn = document.createElement('button');\ncontactBtn.classList.add('btn');\ncontactBtn.textContent = \"Contact Us\";\ncontactBtn.addEventListener('click', domFun.contactInfo, false);\ndomFun.nav.appendChild(contactBtn);\ndomFun.addContent();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });