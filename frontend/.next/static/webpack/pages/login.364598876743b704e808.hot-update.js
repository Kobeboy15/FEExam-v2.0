webpackHotUpdate_N_E("pages/login",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _repositories_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../repositories/users */ "./repositories/users.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.js");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.module.css */ "./components/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\components\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Login() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      setLogin = _useContext.setLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    password: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var onChange = function onChange(event) {
    setValues(_objectSpread(_objectSpread({}, values), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_repositories_users__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATE_USER"], {
    update: function update(_, result) {
      if (result.data.authenticate) {
        localStorage.setItem('token', result.data.authenticate);
        setLogin(true);
        router.push('/');
      }
    },
    onError: function onError(err) {
      setError(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      authenticateUser = _useMutation2[0],
      loadingWait = _useMutation2[1].loadingWait;

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    authenticateUser();
  };

  return __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container__content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Login")), __jsx("form", {
    onSubmit: onSubmit,
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__textbox,
    value: values.email,
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Password"), __jsx("input", {
    type: "password",
    name: "password",
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__textbox,
    value: values.password,
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Login"), __jsx("p", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "No account yet?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _login_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.register__link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Register Here"))))));
}

_s(Login, "dhm2cPGVZFQ+fwVocBBrefzwBMM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldExvZ2luIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VNdXRhdGlvbiIsIkFVVEhFTlRJQ0FURV9VU0VSIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImRhdGEiLCJhdXRoZW50aWNhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsIm9uRXJyb3IiLCJlcnIiLCJncmFwaFFMRXJyb3JzIiwiZXh0ZW5zaW9ucyIsImV4Y2VwdGlvbiIsImVycm9ycyIsInZhcmlhYmxlcyIsImF1dGhlbnRpY2F0ZVVzZXIiLCJsb2FkaW5nV2FpdCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJsb2dpbl9fY29udGFpbmVyIiwiY29udGFpbmVyX19jb250ZW50IiwiY29udGVudF9fdGl0bGUiLCJ0aXRsZV9fdGV4dCIsImNvbnRlbnRfX2lucHV0IiwiaW5wdXRfX2xvZ2luIiwibG9naW5fX3RleHQiLCJsb2dpbl9fdGV4dGJveCIsImlucHV0X19idXR0b24iLCJpbnB1dF9fcmVnaXN0ZXIiLCJyZWdpc3Rlcl9fbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDZixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURlLG9CQUVNQyx3REFBVSxDQUFDQyxvREFBRCxDQUZoQjtBQUFBLE1BRVBDLFFBRk8sZUFF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QUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVOLHdEQUFNLENBQUNPLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxhQUFTLEVBQUVQLHdEQUFNLENBQUNRLGNBSHBCO0FBSUUsU0FBSyxFQUFFcEMsTUFBTSxDQUFDRCxRQUpoQjtBQUtFLFlBQVEsRUFBRUcsUUFMWjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FmRixFQTBCRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFMEIsd0RBQU0sQ0FBQ1MsYUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRixFQWdDRTtBQUFHLGFBQVMsRUFBRVQsd0RBQU0sQ0FBQ1UsZUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFVix3REFBTSxDQUFDVyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBRkYsQ0FoQ0YsQ0FKRixDQURGLENBREY7QUFnREQ7O0dBbkZRbEQsSztVQUNRRSxxRCxFQVk2QmdCLCtEOzs7S0FickNsQixLO0FBcUZNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4zNjQ1OTg4NzY3NDNiNzA0ZTgwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBBVVRIRU5USUNBVEVfVVNFUiB9IGZyb20gJy4uL3JlcG9zaXRvcmllcy91c2VycydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4vVXNlckNvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzZXRMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2F1dGhlbnRpY2F0ZVVzZXIsIHsgbG9hZGluZ1dhaXQgfV0gPSB1c2VNdXRhdGlvbihBVVRIRU5USUNBVEVfVVNFUiwge1xyXG4gICAgdXBkYXRlKF8sIHJlc3VsdCl7XHJcbiAgICAgIGlmKHJlc3VsdC5kYXRhLmF1dGhlbnRpY2F0ZSl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzdWx0LmRhdGEuYXV0aGVudGljYXRlKTtcclxuICAgICAgICBzZXRMb2dpbih0cnVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpe1xyXG4gICAgICBzZXRFcnJvcihlcnIuZ3JhcGhRTEVycm9yc1swXS5leHRlbnNpb25zLmV4Y2VwdGlvbi5lcnJvcnMpO1xyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXIoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX19jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X190aXRsZX0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX3RleHR9PkxvZ2luPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX2lucHV0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX2xvZ2lufT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fX3RleHR9PkVtYWlsPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dGJveH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X19sb2dpbn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0fT5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dGJveH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX2J1dHRvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3JlZ2lzdGVyfT5cclxuICAgICAgICAgICAgTm8gYWNjb3VudCB5ZXQ/XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcl9fbGlua30+UmVnaXN0ZXIgSGVyZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=