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

    if (values.password == values.confirmPassword) {
      addUser();
    } else {
      alert("Password doesn't Match.");
    }
  };

  return __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.register__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container__content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Register")), __jsx("form", {
    onSubmit: onSubmit,
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__input,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.login__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
      columnNumber: 13
    }
  })), __jsx("button", {
    type: "submit",
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Register"), __jsx("p", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Already have an account?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.register__link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldExvZ2luIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1c2VNdXRhdGlvbiIsIkFVVEhFTlRJQ0FURV9VU0VSIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiYXV0aGVudGljYXRlIiwicHVzaCIsIm9uRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiYXV0aGVudGljYXRlVXNlciIsImxvYWRpbmdXYWl0IiwiUkVHSVNURVJfVVNFUiIsImdyYXBoUUxFcnJvcnMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwiZXJyb3JzIiwiYWRkVXNlciIsImxvYWRpbmciLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJzdHlsZXMiLCJyZWdpc3Rlcl9fY29udGFpbmVyIiwiY29udGFpbmVyX19jb250ZW50IiwiY29udGVudF9fdGl0bGUiLCJ0aXRsZV9fdGV4dCIsImNvbnRlbnRfX2lucHV0IiwiaW5wdXRfX2xvZ2luIiwibG9naW5fX3RleHQiLCJsb2dpbl9fdGV4dGJveCIsImlucHV0X19idXR0b24iLCJpbnB1dF9fcmVnaXN0ZXIiLCJyZWdpc3Rlcl9fbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRU4sMkRBQU0sQ0FBQ08sV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQ0UsTUFBRSxFQUFDLGtCQURMO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxRQUFJLEVBQUMsaUJBSFA7QUFJRSxhQUFTLEVBQUVQLDJEQUFNLENBQUNRLGNBSnBCO0FBS0UsU0FBSyxFQUFFMUMsTUFBTSxDQUFDRCxlQUxoQjtBQU1FLFlBQVEsRUFBRUcsUUFOWjtBQU9FLFlBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0EzQkYsRUF1Q0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRWdDLDJEQUFNLENBQUNTLGFBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkNGLEVBNkNFO0FBQUcsYUFBUyxFQUFFVCwyREFBTSxDQUFDVSxlQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVWLDJEQUFNLENBQUNXLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FGRixDQTdDRixDQUpGLENBREYsQ0FERjtBQTZERDs7R0FqSFF6RCxRO1VBQ1FFLHFELEVBYzZCaUIsK0QsRUFlYkEsK0Q7OztLQTlCeEJuQixRO0FBbUhNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci44MjExMDY1NzE5MTExOWUyYmQ3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBSRUdJU1RFUl9VU0VSLCBBVVRIRU5USUNBVEVfVVNFUiB9IGZyb20gJy4uL3JlcG9zaXRvcmllcy91c2VycydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4vVXNlckNvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SZWdpc3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNldExvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogJydcclxuICB9KVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2F1dGhlbnRpY2F0ZVVzZXIsIHsgbG9hZGluZ1dhaXQgfV0gPSB1c2VNdXRhdGlvbihBVVRIRU5USUNBVEVfVVNFUiwge1xyXG4gICAgdXBkYXRlKF8sIHJlc3VsdCl7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3VsdC5kYXRhLmF1dGhlbnRpY2F0ZSk7XHJcbiAgICAgIHNldExvZ2luKHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFthZGRVc2VyLCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRUdJU1RFUl9VU0VSLCB7XHJcbiAgICB1cGRhdGUoXywgcmVzdWx0KXtcclxuICAgICAgYXV0aGVudGljYXRlVXNlcigpO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKXtcclxuICAgICAgc2V0RXJyb3IoZXJyLmdyYXBoUUxFcnJvcnNbMF0uZXh0ZW5zaW9ucy5leGNlcHRpb24uZXJyb3JzKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkID09IHZhbHVlcy5jb25maXJtUGFzc3dvcmQpe1xyXG4gICAgICBhZGRVc2VyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGRvZXNuJ3QgTWF0Y2guXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcl9fY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fdGl0bGV9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX190ZXh0fT5SZWdpc3RlcjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH0gXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X19pbnB1dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X19sb2dpbn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0fT5FbWFpbDwvcD5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dGJveH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X19sb2dpbn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX190ZXh0fT5QYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fX3RleHRib3h9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9fbG9naW59PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dH0+Q29uZmlybSBQYXNzd29yZDwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtX3Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9fdGV4dGJveH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX2J1dHRvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3JlZ2lzdGVyfT5cclxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcl9fbGlua30+TG9naW4gSGVyZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9