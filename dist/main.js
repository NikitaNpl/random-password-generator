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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/scss/main.scss */ \"./assets/styles/scss/main.scss\");\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// Range Slider Properties.\r\n// fill : The trailing color that you see when you drag the slider.\r\n// background : Default Range Slider Background\r\nconst rangeProperties = {\r\n    fill: \"#e66465\",\r\n    background: \"rgba(255, 255, 255, 0.214)\"\r\n};\r\n\r\n// Selecting the Range Slider container which will effect the LENGTH property of the password.\r\nconst range = document.querySelector(\".range__slider\");\r\n// Text which will show the value of the range slider.\r\nconst rangeValue = document.querySelector(\".length__title\");\r\n\r\n// Using Event Listener to apply the fill and also change the value of the text.\r\nrange.querySelector(\"input\").addEventListener(\"input\", (event) => {\r\n    rangeValue.setAttribute(\"data-length\", event.target.value);\r\n    applyFill(event.target);\r\n})\r\n// Selecting the range input and passing it in the applyFill function\r\napplyFill(range.querySelector(\"input\"));\r\n// This function is responsible to create the range color and setting the fill.\r\nfunction applyFill(range) {\r\n    const percent = (100 * (range.value - range.min)) / (range.max - range.min);\r\n    const bg = `linear-gradient(90deg, ${rangeProperties.fill} ${percent}%, ${rangeProperties.background} ${percent + 0.1}%)`;\r\n    range.style.background = bg;\r\n    rangeValue.setAttribute(\"data-length\", range.value);\r\n}\r\n\r\n// Object of all the function names that we will use to create random password\r\nconst randomFunction = {\r\n    upper: getRandomUpper,\r\n    lower: getRandomLower,\r\n    number: getRandomNumber,\r\n    symbol: getRandomSymbol \r\n};\r\n\r\n// All the functions that are responsible to return a random value that we will use to create password.\r\nfunction getRandomUpper() {\r\n    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);\r\n}\r\nfunction getRandomLower() {\r\n    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);\r\n}\r\nfunction getRandomNumber() {\r\n    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);\r\n}\r\nfunction getRandomSymbol() {\r\n    const symbols = '~!@#$%^&*()_+{}\":?><;.,';\r\n    return symbols[Math.floor(Math.random() * symbols.length)];\r\n}\r\n\r\n// The Viewbox where the result will be shown\r\nconst resultElement = document.getElementById(\"result\");\r\n// The input slider, will use to change the length of the password\r\nconst lengthElement = document.getElementById(\"slider\");\r\n\r\n// Checkboxes representing the options that is responsible to create differnt type of password\r\nconst uppercaseElement = document.getElementById(\"uppercase\"),\r\n      lowercaseElement = document.getElementById(\"lowercase\"),\r\n      numberElement    = document.getElementById(\"number\"),\r\n      symbolElement    = document.getElementById(\"symbol\");\r\n\r\n// Button to generate the password\r\nconst generateButton = document.getElementById(\"generate\");\r\n// Button to copy the text\r\nconst copyButton = document.getElementById(\"copy-btn\");\r\n// Result viewbox container\r\nconst resultContainer = document.querySelector(\".result\");\r\n// Text info showed after generate button is clicked\r\nconst copyInfo = document.querySelector(\".result__info.right\");\r\n// Text info afte copy button is clicked\r\nconst copiedInfo = document.querySelector(\".result__info.left\");\r\n\r\n// If this variable is true only then the \"copyButton\" will appear, i.e. when the user first click generate the \"copyButton\" will interact.\r\nlet generatedPassword = false;\r\n\r\n// Update CSS properties of the copy button\r\n// Getting the bounds of the resutlt viewbox container\r\nlet resultContainerBound = {\r\n    left: resultContainer.getBoundingClientRect().left,\r\n    top: resultContainer.getBoundingClientRect().top,\r\n};\r\n\r\n// This will update the position of the copy button based on mouse position\r\nresultContainer.addEventListener(\"mousemove\", (event) => {\r\n    let resultContainerBound = {\r\n        left: resultContainer.getBoundingClientRect().left,\r\n        top: resultContainer.getBoundingClientRect().top,\r\n    };\r\n    if (generatedPassword) {\r\n        copyButton.style.opacity = \"1\";\r\n        copyButton.style.pointerEvents = \"all\";\r\n        copyButton.style.setProperty(\"--x\", `${event.clientX - resultContainerBound.left}px`);\r\n\t\tcopyButton.style.setProperty(\"--y\", `${event.clientY - resultContainerBound.top}px`);\r\n    } else {\r\n        copyButton.style.opacity = \"0\";\r\n        copyButton.style.pointerEvents = \"all\";\r\n    }\r\n});\r\n\r\n// Event that happens when the viewport is resized\r\nwindow.addEventListener(\"risize\", () => {\r\n    let resultContainerBound = {\r\n        left: resultContainer.getBoundingClientRect().left,\r\n        top: resultContainer.getBoundingClientRect().top,\r\n    };\r\n});\r\n\r\n// Copy password\r\ncopyButton.addEventListener(\"click\", () => {\r\n    const textarea = document.createElement(\"textarea\");\r\n    const password = resultElement.innerText;\r\n    if (!password || password == \"CLICK GENERATE\") {\r\n        return;\r\n    }\r\n    textarea.value = password;\r\n    document.body.appendChild(textarea);\r\n    textarea.select();\r\n    document.execCommand(\"copy\");\r\n    textarea.remove();\r\n\r\n    copyInfo.style.transform = \"translateY(200%)\";\r\n\tcopyInfo.style.opacity = \"0\";\r\n\tcopiedInfo.style.transform = \"translateY(0%)\";\r\n\tcopiedInfo.style.opacity = \"0.75\";\r\n});\r\n\r\n// When Generate is clicked password id generated\r\ngenerateButton.addEventListener(\"click\", () => {\r\n    const length    = lengthElement.value,\r\n          hasUpper  = uppercaseElement.checked,\r\n          hasLower  = lowercaseElement.checked,\r\n          hasNumber = numberElement.checked,\r\n          hasSymbol = symbolElement.checked;\r\n    generatedPassword = true;\r\n    resultElement.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);\r\n    copyInfo.style.transform = \"translateY(0%)\";\r\n\tcopyInfo.style.opacity = \"0.75\";\r\n\tcopiedInfo.style.transform = \"translateY(200%)\";\r\n\tcopiedInfo.style.opacity = \"0\";\r\n});\r\n\r\n// Function responsible to generate password\r\nfunction generatePassword(length, upper, lower, number, symbol) {\r\n    let generatedPassword = \"\";\r\n    const typeCount = upper + lower + number + symbol;\r\n    const typeArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);\r\n    if (typeCount === 0) {\r\n        return \"\";\r\n    }\r\n\r\n    for (let i = 0; i < length; i++) {\r\n        typeArray.forEach(type => {\r\n            const functionName = Object.keys(type)[0];\r\n            console.log(randomFunction);\r\n            generatedPassword += randomFunction[functionName]();\r\n        });\r\n    }\r\n    return generatedPassword.slice(0, length);\r\n}\r\n\r\n// Function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.\r\nfunction disableOnlyCheckbox() {\r\n    let totalChecked = [uppercaseElement, lowercaseElement, numberElement, symbolElement].filter(element => element.checked);\r\n    totalChecked.forEach(element => {\r\n        if (totalChecked.length == 1) {\r\n            element.disabled = true;\r\n        } else {\r\n            element.disabled = false;\r\n        }\r\n    })\r\n}\r\n\r\n[uppercaseElement, lowercaseElement, numberElement, symbolElement].forEach(element => {\r\n    element.addEventListener(\"click\", () => {\r\n        disableOnlyCheckbox();\r\n    })\r\n})\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/styles/scss/main.scss":
/*!**************************************!*\
  !*** ./assets/styles/scss/main.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/scss/main.scss?");

/***/ })

/******/ });