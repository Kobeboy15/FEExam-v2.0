webpackHotUpdate_N_E("pages/index",{

/***/ "./repositories/posts.js":
/*!*******************************!*\
  !*** ./repositories/posts.js ***!
  \*******************************/
/*! exports provided: FETCH_POSTS_QUERY, FETCH_POST_QUERY, UPDATE_POST, ADD_COMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_QUERY", function() { return FETCH_POSTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST_QUERY", function() { return FETCH_POST_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT", function() { return ADD_COMMENT; });
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation addComment(\n    $postId: Int!\n    $content: String!\n  ){\n    addComment(\n      postId: $postId,\n      content: $content\n    )\n    {\n      id createdAt content\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation updatePost(\n    $id: Int!\n    $title:String!\n    $content:String\n    $image:String\n  ){\n    updatePost(\n      post: {\n        id: $id,\n        title: $title,\n        content: $content,\n        image: $image\t\n    })\n    {\n      title\n      content \n      image\n      comments{\n        id content createdAt\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Post($postId: Int!){\n    post(id: $postId) {\n      id \n      title \n      content \n      image \n      createdAt \n      comments{\n        id content createdAt\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query posts(\n    $limit: Int,\n    $offset: Int\n  ){\n    posts(pagination:{\n      limit: $limit,\n      offset: $offset\n    }) {\n      id title createdAt image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FETCH_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var FETCH_POST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var UPDATE_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var ADD_COMMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVwb3NpdG9yaWVzL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIkZFVENIX1BPU1RTX1FVRVJZIiwiZ3FsIiwiRkVUQ0hfUE9TVF9RVUVSWSIsIlVQREFURV9QT1NUIiwiQUREX0NPTU1FTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQWNBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7QUFlQSxJQUFNRSxXQUFXLEdBQUdGLGtEQUFILG9CQUFqQjtBQXlCQSxJQUFNRyxXQUFXLEdBQUdILGtEQUFILG9CQUFqQjtBQWVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNhYmZiYzIyMTQ4OTczNTJjNWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5cclxuY29uc3QgRkVUQ0hfUE9TVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgcG9zdHMoXHJcbiAgICAkbGltaXQ6IEludCxcclxuICAgICRvZmZzZXQ6IEludFxyXG4gICl7XHJcbiAgICBwb3N0cyhwYWdpbmF0aW9uOntcclxuICAgICAgbGltaXQ6ICRsaW1pdCxcclxuICAgICAgb2Zmc2V0OiAkb2Zmc2V0XHJcbiAgICB9KSB7XHJcbiAgICAgIGlkIHRpdGxlIGNyZWF0ZWRBdCBpbWFnZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRkVUQ0hfUE9TVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBQb3N0KCRwb3N0SWQ6IEludCEpe1xyXG4gICAgcG9zdChpZDogJHBvc3RJZCkge1xyXG4gICAgICBpZCBcclxuICAgICAgdGl0bGUgXHJcbiAgICAgIGNvbnRlbnQgXHJcbiAgICAgIGltYWdlIFxyXG4gICAgICBjcmVhdGVkQXQgXHJcbiAgICAgIGNvbW1lbnRze1xyXG4gICAgICAgIGlkIGNvbnRlbnQgY3JlYXRlZEF0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFVQREFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoXHJcbiAgICAkaWQ6IEludCFcclxuICAgICR0aXRsZTpTdHJpbmchXHJcbiAgICAkY29udGVudDpTdHJpbmdcclxuICAgICRpbWFnZTpTdHJpbmdcclxuICApe1xyXG4gICAgdXBkYXRlUG9zdChcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIGlkOiAkaWQsXHJcbiAgICAgICAgdGl0bGU6ICR0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAkY29udGVudCxcclxuICAgICAgICBpbWFnZTogJGltYWdlXHRcclxuICAgIH0pXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNvbnRlbnQgXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIGNvbW1lbnRze1xyXG4gICAgICAgIGlkIGNvbnRlbnQgY3JlYXRlZEF0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZENvbW1lbnQoXHJcbiAgICAkcG9zdElkOiBJbnQhXHJcbiAgICAkY29udGVudDogU3RyaW5nIVxyXG4gICl7XHJcbiAgICBhZGRDb21tZW50KFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIGNvbnRlbnQ6ICRjb250ZW50XHJcbiAgICApXHJcbiAgICB7XHJcbiAgICAgIGlkIGNyZWF0ZWRBdCBjb250ZW50XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgeyBGRVRDSF9QT1NUU19RVUVSWSwgRkVUQ0hfUE9TVF9RVUVSWSwgVVBEQVRFX1BPU1QsIEFERF9DT01NRU5UIH07Il0sInNvdXJjZVJvb3QiOiIifQ==