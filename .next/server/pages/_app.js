(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ "./src/styles/global.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");

var _jsxFileName = "C:\\Users\\Daniel\\Desktop\\Olhos do Bem\\TG_Fatec\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-use-before-define





const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{box-sizing:border-box;}body{margin:0;height:100vh;width:100vw;overflow:hidden;display:flex;background:", ";color:", ";font:400 16px Roboto,sans-serif;}"], props => props.theme.primary.main, props => props.theme.primary.contrastText));

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  primary: {
    light: "#e0f2f1",
    main: "#b2dfdb",
    dark: "#80cbc4",
    contrastText: "#000"
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyLy4vc3JjL3N0eWxlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vcXVlc3QtaGVscGVyLy4vc3JjL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly9xdWVzdC1oZWxwZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3F1ZXN0LWhlbHBlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3F1ZXN0LWhlbHBlci9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJwcmltYXJ5IiwibWFpbiIsImNvbnRyYXN0VGV4dCIsImxpZ2h0IiwiZGFyayIsInNlY29uZGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBeUIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzlELHNCQUNFLDhEQUFDLDREQUFEO0FBQWUsU0FBSyxFQUFFQyxrREFBdEI7QUFBQSw0QkFDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBLCtEQUFlSSxvRUFBZixnS0FXa0JDLEtBQUssSUFBSUEsS0FBSyxDQUFDRixLQUFOLENBQVlHLE9BQVosQ0FBb0JDLElBWC9DLEVBWWFGLEtBQUssSUFBSUEsS0FBSyxDQUFDRixLQUFOLENBQVlHLE9BQVosQ0FBb0JFLFlBWjFDLEc7Ozs7Ozs7Ozs7OztBQ0ZBLE1BQU1MLEtBQUssR0FBRztBQUNaRyxTQUFPLEVBQUU7QUFDUEcsU0FBSyxFQUFFLFNBREE7QUFFUEYsUUFBSSxFQUFFLFNBRkM7QUFHUEcsUUFBSSxFQUFFLFNBSEM7QUFJUEYsZ0JBQVksRUFBRTtBQUpQLEdBREc7QUFPWkcsV0FBUyxFQUFFO0FBQ1RGLFNBQUssRUFBRSxTQURFO0FBRVRGLFFBQUksRUFBRSxTQUZHO0FBR1RHLFFBQUksRUFBRSxTQUhHO0FBSVRGLGdCQUFZLEVBQUU7QUFKTDtBQVBDLENBQWQ7QUFlQSwrREFBZUwsS0FBZixFOzs7Ozs7Ozs7OztBQ2ZBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsXCJcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCJcclxuXHJcbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDsgICBcclxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeS5tYWlufTtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnkuY29udHJhc3RUZXh0fTtcclxuICAgIGZvbnQ6IDQwMCAxNnB4IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICB9XHJcbmBcclxuIiwiY29uc3QgdGhlbWUgPSB7XHJcbiAgcHJpbWFyeToge1xyXG4gICAgbGlnaHQ6IFwiI2UwZjJmMVwiLFxyXG4gICAgbWFpbjogXCIjYjJkZmRiXCIsXHJcbiAgICBkYXJrOiBcIiM4MGNiYzRcIixcclxuICAgIGNvbnRyYXN0VGV4dDogXCIjMDAwXCJcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgbGlnaHQ6IFwiI2ZmNzk2MVwiLFxyXG4gICAgbWFpbjogXCIjZjQ0MzM2XCIsXHJcbiAgICBkYXJrOiBcIiNiYTAwMGRcIixcclxuICAgIGNvbnRyYXN0VGV4dDogXCIjMDAwXCJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9