webpackHotUpdate_N_E("pages/register",{

/***/ "./components/register.js":
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
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
/* harmony import */ var _Register_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Register.module.css */ "./components/Register.module.css");
/* harmony import */ var _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Register_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\components\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Register() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      setLogin = _useContext.setLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    password: '',
    confirmPassword: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var onChange = function onChange(event) {
    setValues(_objectSpread(_objectSpread({}, values), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_repositories_users__WEBPACK_IMPORTED_MODULE_6__["AUTHENTICATE_USER"], {
    update: function update(_, result) {
      localStorage.setItem('token', result.data.authenticate);
      setLogin(true);
      router.push('/');
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      authenticateUser = _useMutation2[0],
      loadingWait = _useMutation2[1].loadingWait;

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_repositories_users__WEBPACK_IMPORTED_MODULE_6__["REGISTER_USER"], {
    update: function update(_, result) {
      authenticateUser();
    },
    onError: function onError(err) {
      setError(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  }),
      _useMutation4 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 2),
      addUser = _useMutation4[0],
      loading = _useMutation4[1].loading;

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");

    if (values.password != values.confirmPassword) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity("");
      console.log("PASSWORDS MATCH");
    } //addUser();

  };

  return __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.register__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container__content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Register")), __jsx("form", {
    onSubmit: onSubmit,
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__textbox,
    value: values.email,
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Password"), __jsx("input", {
    id: "password",
    type: "password",
    name: "password",
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__textbox,
    value: values.password,
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Confirm Password"), __jsx("input", {
    id: "confirm_password",
    type: "password",
    name: "confirmPassword",
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__textbox,
    value: values.confirmPassword,
    onChange: onChange,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Register"), __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Already have an account?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.register__link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Login Here"))))));
}

_s(Register, "tjf6WCsZLiMF2VFHh9S4S3p5kcc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldExvZ2luIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VNdXRhdGlvbiIsIkFVVEhFTlRJQ0FURV9VU0VSIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiYXV0aGVudGljYXRlIiwicHVzaCIsIm9uRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiYXV0aGVudGljYXRlVXNlciIsImxvYWRpbmdXYWl0IiwiUkVHSVNURVJfVVNFUiIsImdyYXBoUUxFcnJvcnMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwiZXJyb3JzIiwiYWRkVXNlciIsImxvYWRpbmciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpcm1fcGFzc3dvcmQiLCJzZXRDdXN0b21WYWxpZGl0eSIsInN0eWxlcyIsInJlZ2lzdGVyX19jb250YWluZXIiLCJjb250YWluZXJfX2NvbnRlbnQiLCJjb250ZW50X190aXRsZSIsInRpdGxlX190ZXh0IiwiY29udGVudF9faW5wdXQiLCJpbnB1dF9fbG9naW4iLCJsb2dpbl9fdGV4dCIsImxvZ2luX190ZXh0Ym94IiwiaW5wdXRfX2J1dHRvbiIsImlucHV0X19yZWdpc3RlciIsInJlZ2lzdGVyX19saW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFD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QUFBQTtBQUFBLGtCQURGLENBRkYsQ0E3Q0YsQ0FKRixDQURGLENBREY7QUE2REQ7O0dBckhRNUQsUTtVQUNRRSxxRCxFQWM2QmlCLCtELEVBZWJBLCtEOzs7S0E5QnhCbkIsUTtBQXVITUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuOWJiMTViZTEzYTBhOWI2NmI2OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgUkVHSVNURVJfVVNFUiwgQVVUSEVOVElDQVRFX1VTRVIgfSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvdXNlcnMnXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuL1VzZXJDb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmVnaXN0ZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzZXRMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVVc2VyLCB7IGxvYWRpbmdXYWl0IH1dID0gdXNlTXV0YXRpb24oQVVUSEVOVElDQVRFX1VTRVIsIHtcclxuICAgIHVwZGF0ZShfLCByZXN1bHQpe1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXN1bHQuZGF0YS5hdXRoZW50aWNhdGUpO1xyXG4gICAgICBzZXRMb2dpbih0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbYWRkVXNlciwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oUkVHSVNURVJfVVNFUiwge1xyXG4gICAgdXBkYXRlKF8sIHJlc3VsdCl7XHJcbiAgICAgIGF1dGhlbnRpY2F0ZVVzZXIoKTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yKGVycil7XHJcbiAgICAgIHNldEVycm9yKGVyci5ncmFwaFFMRXJyb3JzWzBdLmV4dGVuc2lvbnMuZXhjZXB0aW9uLmVycm9ycyk7XHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgICB2YXIgY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9wYXNzd29yZFwiKTtcclxuICAgIGlmKHZhbHVlcy5wYXNzd29yZCAhPSB2YWx1ZXMuY29uZmlybVBhc3N3b3JkKXtcclxuICAgICAgY29uZmlybV9wYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcIlBhc3N3b3JkcyBEb24ndCBNYXRjaFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZpcm1fcGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIilcclxuICAgICAgY29uc29sZS5sb2coXCJQQVNTV09SRFMgTUFUQ0hcIik7XHJcbiAgICB9XHJcbiAgICAvL2FkZFVzZXIoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlZ2lzdGVyX19jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X190aXRsZX0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX3RleHR9PlJlZ2lzdGVyPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fSBcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX2lucHV0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX2xvZ2lufT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fX3RleHR9PkVtYWlsPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0Ym94fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX2xvZ2lufT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fX3RleHR9PlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dGJveH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X19sb2dpbn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0fT5Db25maXJtIFBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0Ym94fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9fYnV0dG9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9fcmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2lzdGVyX19saW5rfT5Mb2dpbiBIZXJlPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=