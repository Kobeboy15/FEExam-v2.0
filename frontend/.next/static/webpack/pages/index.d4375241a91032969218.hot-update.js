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
          lineNumber: 62,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx(_posts_postcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        date: filteredItem.createdAt,
        image: filteredItem.image,
        description: filteredItem.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 23
        }
      })));
    })), data && data.posts.length > feedLimit ? __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button__wrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
      onClick: updateFeedLimit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJpc0xvZ2luIiwidXNlU3RhdGUiLCJwb3N0SXRlbXMiLCJzZXRQb3N0SXRlbXMiLCJmZWVkTGltaXQiLCJzZXRGZWVkTGltaXQiLCJ1c2VRdWVyeSIsIkZFVENIX1BPU1RTX1FVRVJZIiwidmFyaWFibGVzIiwibGltaXQiLCJvZmZzZXQiLCJsb2FkaW5nIiwiZGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInVwZGF0ZUZlZWRMaW1pdCIsInN0eWxlcyIsIm5ld3NfX2xvYWRpbmciLCJuZXdzX19jb250YWluZXIiLCJjb250YWluZXJfX3RpdGxlIiwidGl0bGVfX3RleHQiLCJ0aXRsZV9fbmV3cG9zdCIsImNvbnRhaW5lcl9fY29udGVudCIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsIm1hcCIsImZpbHRlcmVkSXRlbSIsInBhdGhuYW1lIiwicXVlcnkiLCJwb3N0SWQiLCJpZCIsImNyZWF0ZWRBdCIsImltYWdlIiwidGl0bGUiLCJsZW5ndGgiLCJjb250YWluZXJfX2J1dHRvbl9fd3JhcHBlciIsImNvbnRhaW5lcl9fYnV0dG9uIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFFTUMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FGaEI7QUFBQSxNQUVOQyxPQUZNLGVBRU5BLE9BRk07O0FBQUEsa0JBR29CQyxzREFBUSxDQUFDLEVBQUQsQ0FINUI7QUFBQSxNQUdQQyxTQUhPO0FBQUEsTUFHSUMsWUFISjs7QUFBQSxtQkFJb0JGLHNEQUFRLENBQUMsQ0FBRCxDQUo1QjtBQUFBLE1B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Qix1REFBTSxDQUFDcUIsaUJBRHBCO0FBRUUsYUFBTyxFQUFFdEIsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsR0FTRSxJQS9DTixDQURGO0FBb0REO0FBQ0Y7O0dBcEZRcEIsSTtVQU1tQlMsNEQ7OztLQU5uQlQsSTtBQXNGVCxJQUFNVSxpQkFBaUIsR0FBR2lDLGtEQUFILG1CQUF2QjtBQWNlM0MsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDQzNzUyNDFhOTEwMzI5NjkyMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9wb3N0cy9wb3N0Y2FyZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25ld3MubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuL1VzZXJDb250ZXh0J1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5ld3MoKSB7XHJcblxyXG4gIGNvbnN0IHsgaXNMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3Bvc3RJdGVtcywgc2V0UG9zdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmVlZExpbWl0LCBzZXRGZWVkTGltaXRdID0gdXNlU3RhdGUoNik7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfUE9TVFNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBsaW1pdDogZmVlZExpbWl0LFxyXG4gICAgICBvZmZzZXQ6IDBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0UG9zdEl0ZW1zKGRhdGEucG9zdHMpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRmVlZExpbWl0KCkge1xyXG4gICAgc2V0RmVlZExpbWl0KGZlZWRMaW1pdCAqIDIpO1xyXG4gIH1cclxuXHJcbiAgaWYobG9hZGluZyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzX19sb2FkaW5nfT5cclxuICAgICAgPExvYWRpbmcgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3RpdGxlfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fdGV4dH0+TmV3czwvaDI+XHJcbiAgICAgICAgICB7IGlzTG9naW4gP1xyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL2NyZWF0ZXBvc3RcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fbmV3cG9zdH0+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IFBvc3RcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyBkYXRhICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGF0YS5wb3N0cy5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggPCBmZWVkTGltaXQpKVxyXG4gICAgICAgICAgICAgIC5tYXAoKGZpbHRlcmVkSXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzL1twb3N0SWRdJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHBvc3RJZDogZmlsdGVyZWRJdGVtLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSB7ZmlsdGVyZWRJdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0ge2ZpbHRlcmVkSXRlbS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2ZpbHRlcmVkSXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7ZmlsdGVyZWRJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSAmJiAoZGF0YS5wb3N0cy5sZW5ndGggPiBmZWVkTGltaXQpKSBcclxuICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbl9fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dXBkYXRlRmVlZExpbWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvYWQgTW9yZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBGRVRDSF9QT1NUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBwb3N0cyhcclxuICAgICRsaW1pdDogSW50LFxyXG4gICAgJG9mZnNldDogSW50XHJcbiAgKXtcclxuICAgIHBvc3RzKHBhZ2luYXRpb246e1xyXG4gICAgICBsaW1pdDogJGxpbWl0LFxyXG4gICAgICBvZmZzZXQ6ICRvZmZzZXRcclxuICAgIH0pIHtcclxuICAgICAgaWQgdGl0bGUgY3JlYXRlZEF0IGltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzOyJdLCJzb3VyY2VSb290IjoiIn0=