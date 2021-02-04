webpackHotUpdate_N_E("pages/posts/createpost",{

/***/ "./pages/posts/createpost.js":
/*!***********************************!*\
  !*** ./pages/posts/createpost.js ***!
  \***********************************/
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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewpost.module.css */ "./pages/posts/viewpost.module.css");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _repositories_posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../repositories/posts */ "./repositories/posts.js");



var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\pages\\posts\\createpost.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function CreatePost() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var uploadImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      dateToday = _useState[0],
      setDateToday = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: '',
    content: '',
    image: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var onChange = function onChange(event) {
    setValues(_objectSpread(_objectSpread({}, values), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_9__["ADD_POST"], {
    update: function update(_, result) {
      if (result.data.addPost.id != -1) {
        router.push("/posts/".concat(result.data.addPost.id));
      } else {
        alert("There was an error");
        router.push('/');
      }
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      title: values.title,
      content: values.content,
      image: values.image
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addPost = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var cancelEditPost = function cancelEditPost(e) {
    var Answer = confirm("Are you sure you want to cancel?");

    if (Answer) {
      e.preventDefault();
      router.push('/');
    }
  };

  var saveEditPost = function saveEditPost() {
    addPost();
  };

  var handleImageUpload = function handleImageUpload(event) {
    uploadImage.current.click();
  };

  var fileDataURL = function fileDataURL(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();

      fr.onload = function () {
        return resolve(fr.result);
      };

      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  };

  var handleImage = function handleImage(event) {
    if (event.target.files[0]) {
      fileDataURL(event.target.files[0]).then(function (res) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          image: res
        }));
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.title = "Create New Post - BLOG";
    var date = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    setDateToday(date);
  }, []);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.viewpost__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content__text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "HOME")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "\xA0Create New Post"))), __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body__action,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__text,
    onClick: saveEditPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "Save Post"), __jsx("p", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__text,
    onClick: cancelEditPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "Cancel"))), __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body__details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, dateToday), __jsx("textarea", {
    placeholder: "Title",
    name: "title",
    onChange: onChange,
    values: values.title,
    className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__title, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__title__text),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__upload_image,
    onClick: handleImageUpload,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "Upload Image"), __jsx("input", {
    name: "image",
    type: "file",
    ref: uploadImage,
    onChange: handleImage,
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  })), __jsx("img", {
    className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__image,
    src: values.image ? values.image : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), __jsx("textarea", {
    placeholder: "Content",
    name: "content",
    onChange: onChange,
    values: values.content,
    className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__body, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__body__text),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
}

_s(CreatePost, "YdCSS2bsFsc0EFPOHGWA2Yu+IVg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"]];
});

_c = CreatePost;
/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

var _c;

$RefreshReg$(_c, "CreatePost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvY3JlYXRlcG9zdC5qcyJdLCJuYW1lcyI6WyJDcmVhdGVQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXBsb2FkSW1hZ2UiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImRhdGVUb2RheSIsInNldERhdGVUb2RheSIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInVzZU11dGF0aW9uIiwiQUREX1BPU1QiLCJ1cGRhdGUiLCJfIiwicmVzdWx0IiwiZGF0YSIsImFkZFBvc3QiLCJpZCIsInB1c2giLCJhbGVydCIsIm9uRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwibG9hZGluZyIsImNhbmNlbEVkaXRQb3N0IiwiZSIsIkFuc3dlciIsImNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwicmVzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJkYXRlIiwiRGF0ZSIsInRvSlNPTiIsInNsaWNlIiwicmVwbGFjZSIsInN0eWxlcyIsInZpZXdwb3N0X19jb250YWluZXIiLCJuYXZpZ2F0aW9uX19oZWFkZXIiLCJuYXZpZ2F0aW9uX19jb250ZW50IiwiY29udGVudF9fdGV4dCIsIm5hdmlnYXRpb25fX2JvZHkiLCJib2R5X19hY3Rpb24iLCJhY3Rpb25fX2NvbnRhaW5lciIsImFjdGlvbl9fdGV4dCIsImJvZHlfX2RldGFpbHMiLCJkZXRhaWxzX19kYXRlIiwiZGV0YWlsc19fdGl0bGUiLCJkZXRhaWxzX190aXRsZV9fdGV4dCIsImRldGFpbHNfX2NvbnRhaW5lciIsImRldGFpbHNfXyIsImRldGFpbHNfX3VwbG9hZF9pbWFnZSIsImRldGFpbHNfX2ltYWdlIiwiZGV0YWlsc19fYm9keSIsImRldGFpbHNfX2JvZHlfX3RleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjs7QUFGb0Isa0JBR2NDLHNEQUFRLENBQUMsRUFBRCxDQUh0QjtBQUFBLE1BR2JDLFNBSGE7QUFBQSxNQUdGQyxZQUhFOztBQUFBLG1CQUlRRixzREFBUSxDQUFDO0FBQ25DRyxTQUFLLEVBQUUsRUFENEI7QUFFbkNDLFdBQU8sRUFBRSxFQUYwQjtBQUduQ0MsU0FBSyxFQUFFO0FBSDRCLEdBQUQsQ0FKaEI7QUFBQSxNQUliQyxNQUphO0FBQUEsTUFJTEMsU0FKSzs7QUFVcEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCRixhQUFTLGlDQUFLRCxNQUFMLGtLQUFjRyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBM0IsRUFBa0NGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUEvQyxHQUFUO0FBQ0QsR0FGRDs7QUFWb0IscUJBY1dDLHVFQUFXLENBQUNDLDREQUFELEVBQVc7QUFDbkRDLFVBRG1ELGtCQUM1Q0MsQ0FENEMsRUFDekNDLE1BRHlDLEVBQ2pDO0FBQ2hCLFVBQUdBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CQyxFQUFwQixJQUEwQixDQUFDLENBQTlCLEVBQWdDO0FBQzlCeEIsY0FBTSxDQUFDeUIsSUFB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QUZyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLENBVEYsRUE4Qkk7QUFDRSxlQUFXLEVBQUMsU0FEZDtBQUVFLFFBQUksRUFBQyxTQUZQO0FBR0UsWUFBUSxFQUFFRyxRQUhaO0FBSUUsVUFBTSxFQUFFRixNQUFNLENBQUNGLE9BSmpCO0FBS0UsYUFBUyxZQUFLdUQsMkRBQU0sQ0FBQ2lCLGFBQVosZ0JBQStCakIsMkRBQU0sQ0FBQ2tCLG1CQUF0QyxDQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkosQ0FkRixDQVhGLENBREYsRUFrRUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEVGLENBREY7QUFzRUQ7O0dBakpRbEYsVTtVQUNRRSxxRCxFQWFnQmdCLCtEOzs7S0FkeEJsQixVO0FBbUpNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9jcmVhdGVwb3N0LjA3M2JiM2ViMWNjZDc2OGEzZGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlld3Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgQUREX1BPU1QgfSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvcG9zdHMnXHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2RhdGVUb2RheSwgc2V0RGF0ZVRvZGF5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBpbWFnZTogJydcclxuICB9KVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2FkZFBvc3QsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKEFERF9QT1NULCB7XHJcbiAgICB1cGRhdGUoXywgcmVzdWx0KSB7XHJcbiAgICAgIGlmKHJlc3VsdC5kYXRhLmFkZFBvc3QuaWQgIT0gLTEpe1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcG9zdHMvJHtyZXN1bHQuZGF0YS5hZGRQb3N0LmlkfWApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3JcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdGl0bGU6IHZhbHVlcy50aXRsZSxcclxuICAgICAgY29udGVudDogdmFsdWVzLmNvbnRlbnQsXHJcbiAgICAgIGltYWdlOiB2YWx1ZXMuaW1hZ2VcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjYW5jZWxFZGl0UG9zdCA9IChlKSA9PiB7XHJcbiAgICBsZXQgQW5zd2VyID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/XCIpO1xyXG4gICAgaWYoQW5zd2VyKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNhdmVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIGFkZFBvc3QoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICB1cGxvYWRJbWFnZS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWxlRGF0YVVSTCA9IGZpbGUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoZnIucmVzdWx0KTtcclxuICAgIGZyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICBmci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZihldmVudC50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICBmaWxlRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIGltYWdlOiByZXN9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiQ3JlYXRlIE5ldyBQb3N0IC0gQkxPR1wiXHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwxMCkucmVwbGFjZSgvLS9nLCctJyk7XHJcbiAgICBzZXREYXRlVG9kYXkoZGF0ZSk7XHJcbiAgfSwgW10pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3cG9zdF9fY29udGFpbmVyfT5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fX2hlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX3RleHR9PkhPTUU8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxwPiZuYnNwOyZuYnNwO3snID4gJ30mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgPHA+Jm5ic3A7Q3JlYXRlIE5ldyBQb3N0PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fYm9keX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2FjdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmUgUG9zdDwvcD5cclxuICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgID5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19kYXRlfT57ZGF0ZVRvZGF5fTwvcD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRldGFpbHNfX3RpdGxlfSArICR7c3R5bGVzLmRldGFpbHNfX3RpdGxlX190ZXh0fWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19ffT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3VwbG9hZF9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3VwbG9hZEltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19faW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3ZhbHVlcy5pbWFnZSA/IHZhbHVlcy5pbWFnZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGV0YWlsc19fYm9keX0gKyAke3N0eWxlcy5kZXRhaWxzX19ib2R5X190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPiBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==