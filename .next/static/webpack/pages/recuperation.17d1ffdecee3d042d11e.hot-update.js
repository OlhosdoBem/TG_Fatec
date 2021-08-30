self["webpackHotUpdate_N_E"]("pages/recuperation",{

/***/ "./src/styles/pages/recuperation.ts":
/*!******************************************!*\
  !*** ./src/styles/pages/recuperation.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewLoginFrame": function() { return /* binding */ ViewLoginFrame; },
/* harmony export */   "LoginFrame": function() { return /* binding */ LoginFrame; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; },
/* harmony export */   "Title": function() { return /* binding */ Title; },
/* harmony export */   "SubTitle": function() { return /* binding */ SubTitle; },
/* harmony export */   "Fields": function() { return /* binding */ Fields; },
/* harmony export */   "Fields2": function() { return /* binding */ Fields2; },
/* harmony export */   "Username": function() { return /* binding */ Username; },
/* harmony export */   "Name": function() { return /* binding */ Name; },
/* harmony export */   "Password": function() { return /* binding */ Password; },
/* harmony export */   "SigninButton": function() { return /* binding */ SigninButton; },
/* harmony export */   "ForgotLink": function() { return /* binding */ ForgotLink; },
/* harmony export */   "Close": function() { return /* binding */ Close; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var ViewLoginFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__ViewLoginFrame",
  componentId: "sc-1n94oza-0"
})(["width:100vw;height:100vh;align-items:center;justify-content:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;"]);
var LoginFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__LoginFrame",
  componentId: "sc-1n94oza-1"
})(["width:625px;height:425px;padding:40px 35px 35px 35px;border-radius:40px;background:", ";box-shadow:13px 13px 20px ", ",-13px -13px 20px ", ";"], function (props) {
  return props.theme.primary.main;
}, function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.light;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Logo",
  componentId: "sc-1n94oza-2"
})(["background:url(\"logo.png\") center no-repeat;width:100px;height:100px;margin:0 auto;border-radius:50%;box-shadow:0px 0px 2px ", ",0px 0px 0px 5px ", ",8px 8px 15px #80cbc4,-8px -8px 15px ", ";"], function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.main;
}, function (props) {
  return props.theme.primary.light;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Title",
  componentId: "sc-1n94oza-3"
})(["text-align:start;font-size:28px;font-weight:bolder;padding-top:0px;letter-spacing:0.5px;"]);
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__SubTitle",
  componentId: "sc-1n94oza-4"
})(["text-align:right;font-size:15px;padding-top:7px;"]);
var Fields = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Fields",
  componentId: "sc-1n94oza-5"
})(["width:100%;padding:55px 5px 5px 5px;& input{border:none;outline:none;background:none;font-size:16px;color:#555;padding:28px 10px 20px 5px;}& svg{height:22px;margin:0 10px -3px 25px;}"]);
var Fields2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Fields2",
  componentId: "sc-1n94oza-6"
})(["width:100%;padding:0px 5px 0px 5px;& input{border:none;outline:none;background:none;font-size:14px;color:#555;padding:15px 15px 15px 30px;}& svg{height:22px;margin:0 10px -3px 25px;}"]);
var Username = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Username",
  componentId: "sc-1n94oza-7"
})(["margin-bottom:30px;border-radius:35px;box-shadow:inset 8px 8px 8px ", ",inset -8px -8px 8px ", ";"], function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.light;
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Name",
  componentId: "sc-1n94oza-8"
})(["margin-bottom:30px;border-radius:35px;box-shadow:inset 8px 8px 8px ", ",inset -8px -8px 8px ", ";"], function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.light;
});
var Password = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Password",
  componentId: "sc-1n94oza-9"
})(["margin-bottom:30px;border-radius:35px;box-shadow:inset 8px 8px 8px ", ",inset -8px -8px 8px ", ";"], function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.light;
});
var SigninButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "recuperation__SigninButton",
  componentId: "sc-1n94oza-10"
})(["outline:none;border:none;cursor:pointer;width:100%;height:60px;border-radius:30px;font-size:20px;font-weight:700;font-family:\"Lato\",sans-serif;color:", ";text-align:center;background:#00796b;box-shadow:3px 3px 3px ", ",-3px -3px 8px ", ";transition:0.5s;&:hover{background:#004d40;}&:active{background:#000;color:#fff;}"], function (props) {
  return props.theme.primary.light;
}, function (props) {
  return props.theme.primary.dark;
}, function (props) {
  return props.theme.primary.light;
});
var ForgotLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__ForgotLink",
  componentId: "sc-1n94oza-11"
})(["margin:10px;padding-bottom:20px;text-align:start;font-size:15px;& a{text-decoration:none;color:#000;}"]);
var Close = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "recuperation__Close",
  componentId: "sc-1n94oza-12"
})(["padding:0px 0px 0px 525px;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9yZWN1cGVyYXRpb24udHMiXSwibmFtZXMiOlsiVmlld0xvZ2luRnJhbWUiLCJzdHlsZWQiLCJMb2dpbkZyYW1lIiwicHJvcHMiLCJ0aGVtZSIsInByaW1hcnkiLCJtYWluIiwiZGFyayIsImxpZ2h0IiwiTG9nbyIsIlRpdGxlIiwiU3ViVGl0bGUiLCJGaWVsZHMiLCJGaWVsZHMyIiwiVXNlcm5hbWUiLCJOYW1lIiwiUGFzc3dvcmQiLCJTaWduaW5CdXR0b24iLCJGb3Jnb3RMaW5rIiwiQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsY0FBYyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvS0FBcEI7QUFZQSxJQUFNQyxVQUFVLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUtQLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsSUFBeEI7QUFBQSxDQUxFLEVBTVEsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRSxJQUF4QjtBQUFBLENBTmIsRUFPQSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JHLEtBQXhCO0FBQUEsQ0FQTCxDQUFoQjtBQVVBLElBQU1DLElBQUksR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsME1BT1UsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRSxJQUF4QjtBQUFBLENBUGYsRUFRbUIsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxJQUF4QjtBQUFBLENBUnhCLEVBVW1CLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkcsS0FBeEI7QUFBQSxDQVZ4QixDQUFWO0FBYUEsSUFBTUUsS0FBSyxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnR0FBWDtBQVFBLElBQU1VLFFBQVEsR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0RBQWQ7QUFPQSxJQUFNVyxNQUFNLEdBQUdYLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhMQUFaO0FBaUJBLElBQU1ZLE9BQU8sR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEsOExBQWI7QUFpQkEsSUFBTWEsUUFBUSxHQUFHYixxRUFBSDtBQUFBO0FBQUE7QUFBQSwwR0FHYSxVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JFLElBQXhCO0FBQUEsQ0FIbEIsRUFJSyxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JHLEtBQXhCO0FBQUEsQ0FKVixDQUFkO0FBT0EsSUFBTU8sSUFBSSxHQUFHZCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwwR0FHaUIsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRSxJQUF4QjtBQUFBLENBSHRCLEVBSVMsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRyxLQUF4QjtBQUFBLENBSmQsQ0FBVjtBQU9BLElBQU1RLFFBQVEsR0FBR2YscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEdBR2EsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRSxJQUF4QjtBQUFBLENBSGxCLEVBSUssVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRyxLQUF4QjtBQUFBLENBSlYsQ0FBZDtBQU9BLElBQU1TLFlBQVksR0FBR2hCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDBVQVVkLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkcsS0FBeEI7QUFBQSxDQVZTLEVBYUcsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CRSxJQUF4QjtBQUFBLENBYlIsRUFjTCxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JHLEtBQXhCO0FBQUEsQ0FkQSxDQUFsQjtBQXlCQSxJQUFNVSxVQUFVLEdBQUdqQixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2R0FBaEI7QUFXQSxJQUFNa0IsS0FBSyxHQUFHbEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0NBQVgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjdXBlcmF0aW9uLjE3ZDFmZmRlY2VlM2QwNDJkMTFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5leHBvcnQgY29uc3QgVmlld0xvZ2luRnJhbWUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTG9naW5GcmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA2MjVweDtcbiAgaGVpZ2h0OiA0MjVweDtcbiAgcGFkZGluZzogNDBweCAzNXB4IDM1cHggMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5Lm1haW59O1xuICBib3gtc2hhZG93OiAxM3B4IDEzcHggMjBweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnkuZGFya30sXG4gICAgLTEzcHggLTEzcHggMjBweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnkubGlnaHR9O1xuYFxuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHVybChcImxvZ28ucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogXG4gIC8qIGxvZ28gKi8gMHB4IDBweCAycHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmRhcmt9LFxuICAgIC8qIG9mZiBzZXQgKi8gMHB4IDBweCAwcHggNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeS5tYWlufSxcbiAgICAvKiBib3R0b20gcmlndGggKi8gOHB4IDhweCAxNXB4ICM4MGNiYzQsXG4gICAgLyogdG9wIGxlZnQgKi8gLThweCAtOHB4IDE1cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmxpZ2h0fTtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuYFxuXG5leHBvcnQgY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBcbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1NXB4IDVweCA1cHggNXB4O1xuICAmIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBwYWRkaW5nOiAyOHB4IDEwcHggMjBweCA1cHg7XG4gIH1cbiAgJiBzdmcge1xuICAgIGhlaWdodDogMjJweDtcbiAgICBtYXJnaW46IDAgMTBweCAtM3B4IDI1cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkczIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuICAmIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAzMHB4O1xuICB9XG4gICYgc3ZnIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luOiAwIDEwcHggLTNweCAyNXB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVc2VybmFtZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDhweCA4cHggOHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeS5kYXJrfSxcbiAgICBpbnNldCAtOHB4IC04cHggOHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeS5saWdodH07XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCA4cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmRhcmt9LFxuICAgIGluc2V0IC04cHggLThweCA4cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmxpZ2h0fTtcbmBcblxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgOHB4IDhweCA4cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmRhcmt9LFxuICAgIGluc2V0IC04cHggLThweCA4cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmxpZ2h0fTtcbmBcblxuZXhwb3J0IGNvbnN0IFNpZ25pbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeS5saWdodH07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwNzk2YjtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmRhcmt9LFxuICAgIC0zcHggLTNweCA4cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5LmxpZ2h0fTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzAwNGQ0MDtcbiAgfVxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9yZ290TGluayA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gICYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDbG9zZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDUyNXB4O1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==