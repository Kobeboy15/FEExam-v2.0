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
          lineNumber: 60,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, __jsx(_posts_postcard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        date: postItem.createdAt,
        image: postItem.image,
        description: postItem.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      })));
    })), postItems && postItems.length >= feedLimit ? __jsx("div", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button__wrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: _news_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__button,
      onClick: updateFeedLimit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJpc0xvZ2luIiwidXNlU3RhdGUiLCJwb3N0SXRlbXMiLCJzZXRQb3N0SXRlbXMiLCJmZWVkTGltaXQiLCJzZXRGZWVkTGltaXQiLCJ1c2VRdWVyeSIsIkZFVENIX1BPU1RTX1FVRVJZIiwidmFyaWFibGVzIiwibGltaXQiLCJvZmZzZXQiLCJsb2FkaW5nIiwiZGF0YSIsInVzZUVmZmVjdCIsInBvc3RzIiwidXBkYXRlRmVlZExpbWl0Iiwic3R5bGVzIiwibmV3c19fbG9hZGluZyIsIm5ld3NfX2NvbnRhaW5lciIsImNvbnRhaW5lcl9fdGl0bGUiLCJ0aXRsZV9fdGV4dCIsInRpdGxlX19uZXdwb3N0IiwiY29udGFpbmVyX19jb250ZW50IiwibWFwIiwicG9zdEl0ZW0iLCJwYXRobmFtZSIsInF1ZXJ5IiwicG9zdElkIiwiaWQiLCJjcmVhdGVkQXQiLCJpbWFnZSIsInRpdGxlIiwibGVuZ3RoIiwiY29udGFpbmVyX19idXR0b25fX3dyYXBwZXIiLCJjb250YWluZXJfX2J1dHRvbiIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsb0JBRU1DLHdEQUFVLENBQUNDLG9EQUFELENBRmhCO0FBQUEsTUFFTkMsT0FGTSxlQUVOQSxPQUZNOztBQUFBLGtCQUdvQkMsc0RBQVEsQ0FBQyxFQUFELENBSDVCO0FBQUEsTUFHUEMsU0FITztBQUFBLE1BR0lDLFlBSEo7O0FBQUEsbUJBSW9CRixzREFBUSxDQUFDLENBQUQsQ0FKNUI7QUFBQSxNQUlQRyxTQUpPO0FBQUEsTUFJSUMsWUFKSjs7QUFBQSxrQkFNWUMsb0VBQVEsQ0FBQ0MsaUJBQUQsRUFBb0I7QUFDcERDLGFBQVMsRUFBRTtBQUNUQyxXQUFLLEVBQUVMLFNBREU7QUFFVE0sWUFBTSxFQUFFO0FBRkM7QUFEeUMsR0FBcEIsQ0FOcEI7QUFBQSxNQU1OQyxPQU5NLGFBTU5BLE9BTk07QUFBQSxNQU1HQyxJQU5ILGFBTUdBLElBTkg7O0FBYWRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdELElBQUgsRUFBUTtBQUNOVCxrQkFBWSxDQUFDUyxJQUFJLENBQUNFLEtBQU4sQ0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNGLElBQUQsQ0FKTSxDQUFUOztBQU1BLFdBQVNHLGVBQVQsR0FBMkI7QUFDekJWLGdCQUFZLENBQUNELFNBQVMsR0FBRyxDQUFiLENBQVo7QUFDRDs7QUFFRCxNQUFHTyxPQUFILEVBQVc7QUFDVCxXQUNBO0FBQUssZUFBUyxFQUFFSyx1REFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEQTtBQUtELEdBTkQsTUFNTztBQUNMLFdBQ0U7QUFBSyxlQUFTLEVBQUVELHVEQUFNLENBQUNFLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUYsdURBQU0sQ0FBQ0csZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRUgsdURBQU0sQ0FBQ0ksV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUlwQixPQUFPLEdBQ1AsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUVnQix1REFBTSxDQUFDSyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBRE8sR0FNTCxJQVJOLENBREYsRUFZSVQsSUFBSSxJQUNKO0FBQUssZUFBUyxFQUFFSSx1REFBTSxDQUFDTSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJcEIsU0FBUyxDQUFDcUIsR0FBVixDQUFjLFVBQUNDLFFBQUQ7QUFBQSxhQUVWLE1BQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSkMsa0JBQVEsRUFBRSxpQkFETjtBQUVKQyxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRUgsUUFBUSxDQUFDSTtBQUFuQjtBQUZILFNBRFI7QUFLRSxXQUFHLEVBQUlKLFFBQVEsQ0FBQ0ksRUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFJSixRQUFRLENBQUNLLFNBRG5CO0FBRUUsYUFBSyxFQUFJTCxRQUFRLENBQUNNLEtBRnBCO0FBR0UsbUJBQVcsRUFBSU4sUUFBUSxDQUFDTyxLQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FORixDQUZVO0FBQUEsS0FBZCxDQUZKLENBYkosRUFxQ0s3QixTQUFTLElBQUtBLFNBQVMsQ0FBQzhCLE1BQVYsSUFBb0I1QixTQUFuQyxHQUNFO0FBQUssZUFBUyxFQUFFWSx1REFBTSxDQUFDaUIsMEJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBRWpCLHVEQUFNLENBQUNrQixpQkFEcEI7QUFFRSxhQUFPLEVBQUVuQixlQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixHQVNFLElBOUNOLENBREY7QUFtREQ7QUFDRjs7R0FsRlFsQixJO1VBTW1CUyw0RDs7O0tBTm5CVCxJO0FBb0ZULElBQU1VLGlCQUFpQixHQUFHNEIsa0RBQUgsbUJBQXZCO0FBY2V0QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZjM0YTlmMGJhZDIzMDg2MTM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL3Bvc3RzL3Bvc3RjYXJkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmV3cy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4vVXNlckNvbnRleHQnXHJcblxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcnXHJcblxyXG5cclxuZnVuY3Rpb24gTmV3cygpIHtcclxuXHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcG9zdEl0ZW1zLCBzZXRQb3N0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmZWVkTGltaXQsIHNldEZlZWRMaW1pdF0gPSB1c2VTdGF0ZSg2KTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9QT1NUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGxpbWl0OiBmZWVkTGltaXQsXHJcbiAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgIHNldFBvc3RJdGVtcyhkYXRhLnBvc3RzKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUZlZWRMaW1pdCgpIHtcclxuICAgIHNldEZlZWRMaW1pdChmZWVkTGltaXQgKiAyKTtcclxuICB9XHJcblxyXG4gIGlmKGxvYWRpbmcpe1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c19fbG9hZGluZ30+XHJcbiAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzX19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX190aXRsZX0+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX3RleHR9Pk5ld3M8L2gyPlxyXG4gICAgICAgICAgeyBpc0xvZ2luID9cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9jcmVhdGVwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX25ld3Bvc3R9PlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBQb3N0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgZGF0YSAmJiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19jb250ZW50fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBvc3RJdGVtcy5tYXAoKHBvc3RJdGVtKSA9PiBcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMvW3Bvc3RJZF0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgcG9zdElkOiBwb3N0SXRlbS5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ge3Bvc3RJdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0ge3Bvc3RJdGVtLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7cG9zdEl0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge3Bvc3RJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAocG9zdEl0ZW1zICYmIChwb3N0SXRlbXMubGVuZ3RoID49IGZlZWRMaW1pdCkpIFxyXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b259XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVGZWVkTGltaXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9hZCBNb3JlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZFVENIX1BPU1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHBvc3RzKFxyXG4gICAgJGxpbWl0OiBJbnQsXHJcbiAgICAkb2Zmc2V0OiBJbnRcclxuICApe1xyXG4gICAgcG9zdHMocGFnaW5hdGlvbjp7XHJcbiAgICAgIGxpbWl0OiAkbGltaXQsXHJcbiAgICAgIG9mZnNldDogJG9mZnNldFxyXG4gICAgfSkge1xyXG4gICAgICBpZCB0aXRsZSBjcmVhdGVkQXQgaW1hZ2VcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7Il0sInNvdXJjZVJvb3QiOiIifQ==