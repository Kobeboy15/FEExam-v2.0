webpackHotUpdate_N_E("pages/posts/[postId]",{

/***/ "./pages/posts/[postId].js":
/*!*********************************!*\
  !*** ./pages/posts/[postId].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _repositories_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../repositories/posts */ "./repositories/posts.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/loading */ "./components/loading.js");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewpost.module.css */ "./pages/posts/viewpost.module.css");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\pages\\posts\\[postId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function ViewPost() {
  _s();

  var _this = this;

  var uploadImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var postId = router.query.postId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      postDetails = _useState[0],
      setPostDetails = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      isLogin = _useContext.isLogin;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isEditing = _useState2[0],
      setEditStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      imgValue = _useState3[0],
      setImgValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      commentContent = _useState4[0],
      setCommentContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    id: null,
    title: '',
    content: '',
    image: ''
  }),
      tempValues = _useState5[0],
      setTempValues = _useState5[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_5__["FETCH_POST_QUERY"], {
    variables: {
      postId: Number(postId)
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT"], {
    update: function update(_, result) {
      var commentArray = postDetails.comments;
      var newComment = {
        id: result.data.addComment.id,
        content: result.data.addComment.content,
        createdAt: result.data.addComment.createdAt
      };
      commentArray.unshift(newComment);
      setPostDetails(_objectSpread(_objectSpread({}, postDetails), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'comments', commentArray)));
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      postId: Number(postId),
      content: commentContent
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      addComment = _useMutation2[0],
      loadingComment = _useMutation2[1].loadingComment;

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_5__["UPDATE_POST"], {
    update: function update(_, result) {
      location.reload();
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      id: tempValues.id,
      title: tempValues.title,
      content: tempValues.content,
      image: imgValue
    }
  }),
      _useMutation4 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 2),
      updatePost = _useMutation4[0],
      loadingUpdate = _useMutation4[1].loadingUpdate;

  var handleComment = function handleComment(event) {
    setCommentContent(event.target.value);
  };

  var onChange = function onChange(event) {
    setTempValues(_objectSpread(_objectSpread({}, tempValues), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  };

  var handleEditPost = function handleEditPost() {
    console.log(data);
    var tempObject = {
      id: data.post.id,
      title: data.post.title,
      content: data.post.content,
      image: data.post.image
    };
    setTempValues(tempObject);
    setEditStatus(true);
  };

  var cancelEditPost = function cancelEditPost() {
    var res = confirm("Are you sure you want to cancel changes?");

    if (res) {
      var tempObject = {
        id: data.post.id,
        title: data.post.title,
        content: data.post.content
      };
      setImgValue(data.post.image);
      setTempValues(tempObject);
      setEditStatus(false);
    }
  };

  var saveEditPost = function saveEditPost() {
    updatePost();
    setEditStatus(false);
  };

  var handleImageUpload = function handleImageUpload() {
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
        setImgValue(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data) {
      setPostDetails(data.post);
    }
  }, [data]);

  if (loading) {
    return __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewpost__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 7
      }
    }, postDetails && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }), postDetails.title ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.content__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, "HOME")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, "\xA0", postDetails.title))) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, isLogin ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__action,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: saveEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }
    }, "Save Post"), __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: cancelEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }, "Cancel")) : __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: handleEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }
    }, "Edit Post")) : null, postDetails ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }, postDetails.createdAt ? data.post.createdAt.slice(0, 10) : null), !isEditing ? __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, postDetails.title) : __jsx("textarea", {
      placeholder: "title",
      name: "title",
      onChange: onChange,
      defaultValue: tempValues.title,
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__title, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__title__text),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__upload_image,
      onClick: handleImageUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, "Upload Image"), __jsx("input", {
      name: "myfile",
      type: "file",
      ref: uploadImage,
      onChange: handleImage,
      hidden: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    })) : null, __jsx("img", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 23
      }
    }, postDetails.content) : __jsx("textarea", {
      placeholder: "Content",
      name: "content",
      onChange: onChange,
      defaultValue: tempValues.content,
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__body, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__body__text),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 23
      }
    })) : null, __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments ? postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 17
      }
    }, __jsx("textarea", {
      placeholder: "Write comment",
      name: "comment",
      onBlur: handleComment,
      defaultValue: commentContent,
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.input__textarea,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 19
      }
    }), __jsx("input", {
      type: "button",
      value: "Submit",
      onClick: addComment,
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.input__submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }
    }));
  }
}

_s(ViewPost, "lkaS4jRX09aYGD6HZUTf6rlUyM8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = ViewPost;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ViewPost);

var _c;

$RefreshReg$(_c, "ViewPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwb3N0RGV0YWlscyIsInNldFBvc3REZXRhaWxzIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNMb2dpbiIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VNdXRhdGlvbiIsIkFERF9DT01NRU5UIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImNvbW1lbnRBcnJheSIsImNvbW1lbnRzIiwibmV3Q29tbWVudCIsImFkZENvbW1lbnQiLCJjcmVhdGVkQXQiLCJ1bnNoaWZ0Iiwib25FcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkaW5nQ29tbWVudCIsIlVQREFURV9QT1NUIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cGRhdGVQb3N0IiwibG9hZGluZ1VwZGF0ZSIsImhhbmRsZUNvbW1lbnQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidmlld3Bvc3RfX2xvYWRpbmciLCJ2aWV3cG9zdF9fY29udGFpbmVyIiwibmF2aWdhdGlvbl9faGVhZGVyIiwibmF2aWdhdGlvbl9fY29udGVudCIsImNvbnRlbnRfX3RleHQiLCJuYXZpZ2F0aW9uX19ib2R5IiwiYm9keV9fYWN0aW9uIiwiYWN0aW9uX19jb250YWluZXIiLCJhY3Rpb25fX3RleHQiLCJib2R5X19kZXRhaWxzIiwiZGV0YWlsc19fZGF0ZSIsInNsaWNlIiwiZGV0YWlsc19fdGl0bGUiLCJkZXRhaWxzX190aXRsZV9fdGV4dCIsImRldGFpbHNfX2NvbnRhaW5lciIsImRldGFpbHNfXyIsImRldGFpbHNfX3VwbG9hZF9pbWFnZSIsImRldGFpbHNfX2ltYWdlIiwiZGV0YWlsc19fYm9keSIsImRldGFpbHNfX2JvZHlfX3RleHQiLCJib2R5X19jb21tZW50cyIsImNvbW1lbnRzX190aXRsZSIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50c19faXRlbSIsIml0ZW1fX2NvbnRlbnQiLCJpdGVtX19kYXRlIiwiY29tbWVudHNfX2lucHV0IiwiaW5wdXRfX3RleHRhcmVhIiwiaW5wdXRfX3N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRmtCLE1BR1ZDLE1BSFUsR0FHQ0YsTUFBTSxDQUFDRyxLQUhSLENB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OGUxYjkwYzRmZmEwYWY3MjZhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgRkVUQ0hfUE9TVF9RVUVSWSwgQUREX0NPTU1FTlQsIFVQREFURV9QT1NUIH0gZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL3Bvc3RzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyQ29udGV4dCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRpbmcnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92aWV3cG9zdC5tb2R1bGUuY3NzJztcclxuXHJcblxyXG5mdW5jdGlvbiBWaWV3UG9zdCgpIHtcclxuICBjb25zdCB1cGxvYWRJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwb3N0RGV0YWlscywgc2V0UG9zdERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgaXNMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0RWRpdFN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltZ1ZhbHVlLCBzZXRJbWdWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRDb250ZW50LCBzZXRDb21tZW50Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RlbXBWYWx1ZXMsIHNldFRlbXBWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGltYWdlOiAnJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEZFVENIX1BPU1RfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbYWRkQ29tbWVudCwgeyBsb2FkaW5nQ29tbWVudCB9XSA9IHVzZU11dGF0aW9uKEFERF9DT01NRU5ULCB7XHJcbiAgICB1cGRhdGUoXyxyZXN1bHQpIHtcclxuICAgICAgbGV0IGNvbW1lbnRBcnJheSA9IHBvc3REZXRhaWxzLmNvbW1lbnRzO1xyXG4gICAgICBsZXQgbmV3Q29tbWVudCA9IHtcclxuICAgICAgICBpZDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5pZCxcclxuICAgICAgICBjb250ZW50OiByZXN1bHQuZGF0YS5hZGRDb21tZW50LmNvbnRlbnQsXHJcbiAgICAgICAgY3JlYXRlZEF0OiByZXN1bHQuZGF0YS5hZGRDb21tZW50LmNyZWF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICAgIGNvbW1lbnRBcnJheS51bnNoaWZ0KG5ld0NvbW1lbnQpO1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyh7Li4ucG9zdERldGFpbHMsIFsnY29tbWVudHMnXTogY29tbWVudEFycmF5fSk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSxcclxuICAgICAgY29udGVudDogY29tbWVudENvbnRlbnRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbdXBkYXRlUG9zdCwgeyBsb2FkaW5nVXBkYXRlIH1dID0gdXNlTXV0YXRpb24oVVBEQVRFX1BPU1QsIHtcclxuICAgIHVwZGF0ZShfLCByZXN1bHQpIHtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZDogdGVtcFZhbHVlcy5pZCxcclxuICAgICAgdGl0bGU6IHRlbXBWYWx1ZXMudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBWYWx1ZXMuY29udGVudCxcclxuICAgICAgaW1hZ2U6IGltZ1ZhbHVlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29tbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudENvbnRlbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRUZW1wVmFsdWVzKHsuLi50ZW1wVmFsdWVzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBsZXQgdGVtcE9iamVjdCA9IHtcclxuICAgICAgaWQ6IGRhdGEucG9zdC5pZCxcclxuICAgICAgdGl0bGU6IGRhdGEucG9zdC50aXRsZSxcclxuICAgICAgY29udGVudDogZGF0YS5wb3N0LmNvbnRlbnQsXHJcbiAgICAgIGltYWdlOiBkYXRhLnBvc3QuaW1hZ2VcclxuICAgIH1cclxuICAgIHNldFRlbXBWYWx1ZXModGVtcE9iamVjdCk7XHJcbiAgICBzZXRFZGl0U3RhdHVzKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FuY2VsRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgY2hhbmdlcz9cIik7XHJcbiAgICBpZihyZXMpe1xyXG4gICAgICBsZXQgdGVtcE9iamVjdCA9IHtcclxuICAgICAgICBpZDogZGF0YS5wb3N0LmlkLFxyXG4gICAgICAgIHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsXHJcbiAgICAgICAgY29udGVudDogZGF0YS5wb3N0LmNvbnRlbnQsXHJcbiAgICAgIH1cclxuICAgICAgc2V0SW1nVmFsdWUoZGF0YS5wb3N0LmltYWdlKTtcclxuICAgICAgc2V0VGVtcFZhbHVlcyh0ZW1wT2JqZWN0KTtcclxuICAgICAgc2V0RWRpdFN0YXR1cyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVQb3N0KCk7XHJcbiAgICBzZXRFZGl0U3RhdHVzKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdXBsb2FkSW1hZ2UuY3VycmVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsZURhdGFVUkwgPSBmaWxlID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBmci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGZyLnJlc3VsdCk7XHJcbiAgICBmci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgZnIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgZmlsZURhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldEltZ1ZhbHVlKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgIHNldFBvc3REZXRhaWxzKGRhdGEucG9zdCk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICBpZihsb2FkaW5nKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld3Bvc3RfX2xvYWRpbmd9PlxyXG4gICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsgcG9zdERldGFpbHMgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld3Bvc3RfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgeyBwb3N0RGV0YWlscy50aXRsZSA/XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X190ZXh0fT5IT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOyZuYnNwO3snID4gJ30mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiZuYnNwO3twb3N0RGV0YWlscy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fX2JvZHl9PlxyXG4gICAgICAgICAgICAgIHsgaXNMb2dpbiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2FjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIHsgaXNFZGl0aW5nID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25fX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25fX3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2F2ZSBQb3N0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPkNhbmNlbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDogPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25fX3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0UG9zdH1cclxuICAgICAgICAgICAgICAgICAgICA+RWRpdCBQb3N0PC9wPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7IHBvc3REZXRhaWxzID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keV9fZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0RGV0YWlscy5jcmVhdGVkQXQgPyBkYXRhLnBvc3QuY3JlYXRlZEF0LnNsaWNlKDAsMTApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ICFpc0VkaXRpbmcgXHJcbiAgICAgICAgICAgICAgICAgID8gPGgyIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3RpdGxlfT57cG9zdERldGFpbHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgOiA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGVtcFZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRldGFpbHNfX3RpdGxlfSArICR7c3R5bGVzLmRldGFpbHNfX3RpdGxlX190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0VkaXRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX199PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fdXBsb2FkX2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm15ZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3VwbG9hZEltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19pbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1ZhbHVlID8gaW1nVmFsdWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoocG9zdERldGFpbHMuaW1hZ2UgPyBwb3N0RGV0YWlscy5pbWFnZSA6IFwiL2ltYWdlcy9naXJsLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgeyAhaXNFZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19ib2R5fT57cG9zdERldGFpbHMuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGVtcFZhbHVlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXRhaWxzX19ib2R5fSArICR7c3R5bGVzLmRldGFpbHNfX2JvZHlfX3RleHR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keV9fY29tbWVudHN9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX190aXRsZX0+Q09NTUVOVDwvaDI+XHJcbiAgICAgICAgICAgICAgICB7IHBvc3REZXRhaWxzLmNvbW1lbnRzID9cclxuICAgICAgICAgICAgICAgICAgcG9zdERldGFpbHMuY29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX19pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV9fY29udGVudH0+e2NvbW1lbnQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fX2RhdGV9Pntjb21tZW50LmNyZWF0ZWRBdC5zbGljZSgwLDEwKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19faW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGNvbW1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29tbWVudENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3RleHRhcmVhfSBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9fc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgcmV0dXJuIHtwcm9wczoge319O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3UG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==