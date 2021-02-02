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
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query posts(\n    $limit: Int,\n    $offset: Int\n  ){\n    posts(pagination:{\n      limit: $limit,\n      offset: $offset\n    }) {\n      id title createdAt image\n    }\n  }\n"]);

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
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
      setPostItems(data.posts);
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
        lineNumber: 38,
        columnNumber: 5
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }));
  } else {
    return __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.news__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "News"), isLogin ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/createpost",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__newpost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, "Create New Post")) : null), data && __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, postItems.map(function (postItem) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/posts/[postId]',
          query: {
            postId: postItem.id
          }
        },
        key: postItem.id,
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
        date: postItem.createdAt,
        image: postItem.image,
        description: postItem.title,
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

_s(News, "sz3Hnxua+CTsklS7aqKFXQ1RFCk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJpc0xvZ2luIiwidXNlU3RhdGUiLCJwb3N0SXRlbXMiLCJzZXRQb3N0SXRlbXMiLCJmZWVkTGltaXQiLCJzZXRGZWVkTGltaXQiLCJ1c2VRdWVyeSIsIkZFVENIX1BPU1RTX1FVRVJZIiwidmFyaWFibGVzIiwibGltaXQiLCJvZmZzZXQiLCJsb2FkaW5nIiwiZGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInVwZGF0ZUZlZWRMaW1pdCIsInN0eWxlcyIsIm5ld3NfX2xvYWRpbmciLCJuZXdzX19jb250YWluZXIiLCJjb250YWluZXJfX3RpdGxlIiwidGl0bGVfX3RleHQiLCJ0aXRsZV9fbmV3cG9zdCIsImNvbnRhaW5lcl9fY29udGVudCIsIm1hcCIsInBvc3RJdGVtIiwicGF0aG5hbWUiLCJxdWVyeSIsInBvc3RJZCIsImlkIiwiY3JlYXRlZEF0IiwiaW1hZ2UiLCJ0aXRsZSIsImxlbmd0aCIsImNvbnRhaW5lcl9fYnV0dG9uX193cmFwcGVyIiwiY29udGFpbmVyX19idXR0b24iLCJncWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUVNQyx3REFBVSxDQUFDQyxvREFBRCxDQUZoQjtBQUFBLE1BRU5DLE9BRk0sZUFFTkEsT0FGTTs7QUFBQSxrQkFHb0JDLHNEQUFRLENBQUMsRUFBRCxDQUg1QjtBQUFBLE1BR1BDLFNBSE87QUFBQSxNQUdJQyxZQUhKOztBQUFBLG1CQUlvQkYsc0RBQVEsQ0FBQyxDQUFELENBSjVCO0FBQUEsTUFJUEcsU0FKTztBQUFBLE1BSUlDLFlBSko7O0FB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R0FuRlFwQixJO1VBTW1CUyw0RDs7O0tBTm5CVCxJO0FBcUZULElBQU1VLGlCQUFpQixHQUFHOEIsa0RBQUgsbUJBQXZCO0FBY2V4QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjM3Yjk5MTgxNjE5Zjc0MWM1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL3Bvc3RzL3Bvc3RjYXJkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmV3cy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4vVXNlckNvbnRleHQnXHJcblxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcnXHJcblxyXG5cclxuZnVuY3Rpb24gTmV3cygpIHtcclxuXHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdEl0ZW1zLCBzZXRQb3N0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmZWVkTGltaXQsIHNldEZlZWRMaW1pdF0gPSB1c2VTdGF0ZSg2KTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9QT1NUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGxpbWl0OiBmZWVkTGltaXQsXHJcbiAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRQb3N0SXRlbXMoZGF0YS5wb3N0cyk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVGZWVkTGltaXQoKSB7XHJcbiAgICBzZXRGZWVkTGltaXQoZmVlZExpbWl0ICogMik7XHJcbiAgfVxyXG5cclxuICBpZihsb2FkaW5nKXtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2xvYWRpbmd9PlxyXG4gICAgICA8TG9hZGluZyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c19fY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fdGl0bGV9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX190ZXh0fT5OZXdzPC9oMj5cclxuICAgICAgICAgIHsgaXNMb2dpbiA/XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvY3JlYXRlcG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX19uZXdwb3N0fT5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgUG9zdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IGRhdGEgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fY29udGVudH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwb3N0SXRlbXMubWFwKChwb3N0SXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzL1twb3N0SWRdJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHBvc3RJZDogcG9zdEl0ZW0uaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHtwb3N0SXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHtwb3N0SXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0ge3Bvc3RJdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtwb3N0SXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgJiYgKGRhdGEucG9zdHMubGVuZ3RoID4gZmVlZExpbWl0KSkgXHJcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25fX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwZGF0ZUZlZWRMaW1pdH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2FkIE1vcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgRkVUQ0hfUE9TVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgcG9zdHMoXHJcbiAgICAkbGltaXQ6IEludCxcclxuICAgICRvZmZzZXQ6IEludFxyXG4gICl7XHJcbiAgICBwb3N0cyhwYWdpbmF0aW9uOntcclxuICAgICAgbGltaXQ6ICRsaW1pdCxcclxuICAgICAgb2Zmc2V0OiAkb2Zmc2V0XHJcbiAgICB9KSB7XHJcbiAgICAgIGlkIHRpdGxlIGNyZWF0ZWRBdCBpbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3czsiXSwic291cmNlUm9vdCI6IiJ9