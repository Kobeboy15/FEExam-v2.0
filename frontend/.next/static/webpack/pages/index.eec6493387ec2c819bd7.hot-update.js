webpackHotUpdate_N_E("pages/index",{

/***/ "./components/news.js":
/*!****************************!*\
  !*** ./components/news.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts_postcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/postcard */ "./components/posts/postcard.js");
/* harmony import */ var _news_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.module.css */ "./components/news.module.css");
/* harmony import */ var _news_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_news_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserContext */ "./components/UserContext.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");


var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\components\\news.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    posts {\n      id title createdAt image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










function News() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      isLogin = _useContext.isLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      postItems = _useState[0],
      setPostItems = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(6),
      feedLimit = _useState2[0],
      setFeedLimit = _useState2[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(FETCH_POSTS_QUERY, {
    variables: {
      limit: feedLimit,
      offset: 0
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      console.log(data);
    }
  }, [data]);

  function updateFeedLimit() {
    setFeedLimit(feedLimit * 2);
  }

  if (loading) {
    return __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.news__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }));
  } else {
    return __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.news__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "News"), isLogin ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/createpost",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__newpost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, "Create New Post")) : null), data && __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, data.posts.filter(function (item, index) {
      return index < feedLimit;
    }).map(function (filteredItem) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/posts/[postId]',
          query: {
            postId: filteredItem.id
          }
        },
        key: filteredItem.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, __jsx(_posts_postcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        date: filteredItem.createdAt,
        image: filteredItem.image,
        description: filteredItem.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 23
        }
      })));
    })), data && data.posts.length > feedLimit ? __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button__wrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
      onClick: updateFeedLimit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, "Load More")) : null);
  }
}

_s(News, "08Af0fJngehd64i0xy/4KT/EVS4=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c = News;
var FETCH_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (News);

var _c;

$RefreshReg$(_c, "News");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJpc0xvZ2luIiwidXNlU3RhdGUiLCJwb3N0SXRlbXMiLCJzZXRQb3N0SXRlbXMiLCJmZWVkTGltaXQiLCJzZXRGZWVkTGltaXQiLCJ1c2VRdWVyeSIsIkZFVENIX1BPU1RTX1FVRVJZIiwidmFyaWFibGVzIiwibGltaXQiLCJvZmZzZXQiLCJsb2FkaW5nIiwiZGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVGZWVkTGltaXQiLCJzdHlsZXMiLCJuZXdzX19sb2FkaW5nIiwibmV3c19fY29udGFpbmVyIiwiY29udGFpbmVyX190aXRsZSIsInRpdGxlX190ZXh0IiwidGl0bGVfX25ld3Bvc3QiLCJjb250YWluZXJfX2NvbnRlbnQiLCJwb3N0cyIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsIm1hcCIsImZpbHRlcmVkSXRlbSIsInBhdGhuYW1lIiwicXVlcnkiLCJwb3N0SWQiLCJpZCIsImNyZWF0ZWRBdCIsImltYWdlIiwidGl0bGUiLCJsZW5ndGgiLCJjb250YWluZXJfX2J1dHRvbl9fd3JhcHBlciIsImNvbnRhaW5lcl9fYnV0dG9uIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFFTUMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FGaEI7QUFBQSxNQUVOQyxPQUZNLGVBRU5BLE9BRk07O0FBQUEsa0JBR29CQyxzREFBUSxDQUFDLEVBQUQsQ0FINUI7QUFBQSxNQUdQQyxTQUhPO0FBQUEsTUFHSUMsWUFISjs7QUFBQSxtQkFJb0JGLHNEQUFRLENBQUMsQ0FBRCxDQUo1QjtBQUFBLE1B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QUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixHQVNFLElBL0NOLENBREY7QUFvREQ7QUFDRjs7R0FuRlFuQixJO1VBTW1CUyw0RDs7O0tBTm5CVCxJO0FBcUZULElBQU1VLGlCQUFpQixHQUFHaUMsa0RBQUgsbUJBQXZCO0FBUWUzQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWM2NDkzMzg3ZWMyYzgxOWJkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL3Bvc3RzL3Bvc3RjYXJkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmV3cy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4vVXNlckNvbnRleHQnXHJcblxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcnXHJcblxyXG5cclxuZnVuY3Rpb24gTmV3cygpIHtcclxuXHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdEl0ZW1zLCBzZXRQb3N0SXRlbXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtmZWVkTGltaXQsIHNldEZlZWRMaW1pdF0gPSB1c2VTdGF0ZSg2KTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9QT1NUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGxpbWl0OiBmZWVkTGltaXQsXHJcbiAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVGZWVkTGltaXQoKSB7XHJcbiAgICBzZXRGZWVkTGltaXQoZmVlZExpbWl0ICogMik7XHJcbiAgfVxyXG5cclxuICBpZihsb2FkaW5nKXtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2xvYWRpbmd9PlxyXG4gICAgICA8TG9hZGluZyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c19fY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fdGl0bGV9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX190ZXh0fT5OZXdzPC9oMj5cclxuICAgICAgICAgIHsgaXNMb2dpbiA/XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvY3JlYXRlcG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX19uZXdwb3N0fT5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgUG9zdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IGRhdGEgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY29udGVudH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkYXRhLnBvc3RzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IChpbmRleCA8IGZlZWRMaW1pdCkpXHJcbiAgICAgICAgICAgICAgLm1hcCgoZmlsdGVyZWRJdGVtKSA9PiBcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMvW3Bvc3RJZF0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgcG9zdElkOiBmaWx0ZXJlZEl0ZW0uaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHtmaWx0ZXJlZEl0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSB7ZmlsdGVyZWRJdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7ZmlsdGVyZWRJdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtmaWx0ZXJlZEl0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChkYXRhICYmIChkYXRhLnBvc3RzLmxlbmd0aCA+IGZlZWRMaW1pdCkpIFxyXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVGZWVkTGltaXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9hZCBNb3JlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZFVENIX1BPU1RTX1FVRVJZID0gZ3FsYFxyXG4gIHtcclxuICAgIHBvc3RzIHtcclxuICAgICAgaWQgdGl0bGUgY3JlYXRlZEF0IGltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzOyJdLCJzb3VyY2VSb290IjoiIn0=