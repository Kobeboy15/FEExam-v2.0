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
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewpost.module.css */ "./pages/posts/viewpost.module.css");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _repositories_posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../repositories/posts */ "./repositories/posts.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/loading */ "./components/loading.js");



var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\FE_EXAM(CLEANUP)\\frontend\\pages\\posts\\[postId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function ViewPost() {
  _s();

  var _this = this;

  var uploadImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var postId = router.query.postId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      postDetails = _useState[0],
      setPostDetails = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
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

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_9__["FETCH_POST_QUERY"], {
    variables: {
      postId: Number(postId)
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var handleComment = function handleComment(event) {
    setCommentContent(event.target.value);
  };

  var onChange = function onChange(event) {
    setTempValues(_objectSpread(_objectSpread({}, tempValues), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_9__["ADD_COMMENT"], {
    update: function update(_, result) {
      var commentArray = postDetails.comments;
      var newComment = {
        id: result.data.addComment.id,
        content: result.data.addComment.content,
        createdAt: result.data.addComment.createdAt
      };
      commentArray.unshift(newComment);
      setCommentContent('');
      setPostDetails(_objectSpread(_objectSpread({}, postDetails), {}, Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, 'comments', commentArray)));
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      postId: Number(postId),
      content: commentContent
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addComment = _useMutation2[0],
      loadingComment = _useMutation2[1].loadingComment;

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_9__["UPDATE_POST"], {
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
      _useMutation4 = Object(C_Users_Kobeboy_Desktop_FE_EXAM_CLEANUP_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 2),
      updatePost = _useMutation4[0],
      loadingUpdate = _useMutation4[1].loadingUpdate;

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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.viewpost__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }
    }, postDetails && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }), postDetails.title ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    }, "HOME")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, "\xA0", postDetails.title))) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, isLogin ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body__action,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__text,
      onClick: saveEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }
    }, "Save Post"), __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__text,
      onClick: cancelEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, "Cancel")) : __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.action__text,
      onClick: handleEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, "Edit Post")) : null, postDetails ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }, postDetails.createdAt ? data.post.createdAt.slice(0, 10) : null), !isEditing ? __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 21
      }
    }, postDetails.title) : __jsx("textarea", {
      placeholder: "title",
      name: "title",
      onChange: onChange,
      defaultValue: tempValues.title,
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__title, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__title__text),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 19
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__upload_image,
      onClick: handleImageUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
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
        lineNumber: 214,
        columnNumber: 25
      }
    })) : null, __jsx("img", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    }, postDetails.content) : __jsx("textarea", {
      placeholder: "Content",
      name: "content",
      onChange: onChange,
      defaultValue: tempValues.content,
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__body, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.details__body__text),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    })) : null, __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments ? postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.comments__input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }
    }, __jsx("textarea", {
      placeholder: "Write comment",
      name: "comment",
      onBlur: handleComment,
      defaultValue: commentContent,
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input__textarea,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 19
      }
    }), __jsx("input", {
      type: "button",
      value: "Submit",
      onClick: addComment,
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.input__submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }
    }));
  }
}

_s(ViewPost, "lkaS4jRX09aYGD6HZUTf6rlUyM8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwb3N0RGV0YWlscyIsInNldFBvc3REZXRhaWxzIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNMb2dpbiIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJoYW5kbGVDb21tZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmFtZSIsInVzZU11dGF0aW9uIiwiQUREX0NPTU1FTlQiLCJ1cGRhdGUiLCJfIiwicmVzdWx0IiwiY29tbWVudEFycmF5IiwiY29tbWVudHMiLCJuZXdDb21tZW50IiwiYWRkQ29tbWVudCIsImNyZWF0ZWRBdCIsInVuc2hpZnQiLCJvbkVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmdDb21tZW50IiwiVVBEQVRFX1BPU1QiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZVBvc3QiLCJsb2FkaW5nVXBkYXRlIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidmlld3Bvc3RfX2xvYWRpbmciLCJ2aWV3cG9zdF9fY29udGFpbmVyIiwibmF2aWdhdGlvbl9faGVhZGVyIiwibmF2aWdhdGlvbl9fY29udGVudCIsImNvbnRlbnRfX3RleHQiLCJuYXZpZ2F0aW9uX19ib2R5IiwiYm9keV9fYWN0aW9uIiwiYWN0aW9uX19jb250YWluZXIiLCJhY3Rpb25fX3RleHQiLCJib2R5X19kZXRhaWxzIiwiZGV0YWlsc19fZGF0ZSIsInNsaWNlIiwiZGV0YWlsc19fdGl0bGUiLCJkZXRhaWxzX190aXRsZV9fdGV4dCIsImRldGFpbHNfX2NvbnRhaW5lciIsImRldGFpbHNfXyIsImRldGFpbHNfX3VwbG9hZF9pbWFnZSIsImRldGFpbHNfX2ltYWdlIiwiZGV0YWlsc19fYm9keSIsImRldGFpbHNfX2JvZHlfX3RleHQiLCJib2R5X19jb21tZW50cyIsImNvbW1lbnRzX190aXRsZSIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50c19faXRlbSIsIml0ZW1fX2NvbnRlbnQiLCJpdGVtX19kYXRlIiwiY29tbWVudHNfX2lucHV0IiwiaW5wdXRfX3RleHRhcmVhIiwiaW5wdXRfX3N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBRmtCLE1BR1ZDLE1BSFUsR0FHQ0YsTUFBTSxDQUFDRyxLQUhSLENB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cGFjay9wYWdlcy9wb3N0cy9bcG9zdElkXS43MDJlMmVmMzQwOWExMzAxZjFiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyQ29udGV4dCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlld3Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IEZFVENIX1BPU1RfUVVFUlksIEFERF9DT01NRU5ULCBVUERBVEVfUE9TVCB9IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9wb3N0cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRpbmcnXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFZpZXdQb3N0KCkge1xyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcG9zdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Bvc3REZXRhaWxzLCBzZXRQb3N0RGV0YWlsc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRFZGl0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1nVmFsdWUsIHNldEltZ1ZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudENvbnRlbnQsIHNldENvbW1lbnRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGVtcFZhbHVlcywgc2V0VGVtcFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgaW1hZ2U6ICcnXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfUE9TVF9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICBwb3N0SWQ6IE51bWJlcihwb3N0SWQpIFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENvbW1lbnRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGVtcFZhbHVlcyh7Li4udGVtcFZhbHVlcywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWRkQ29tbWVudCwgeyBsb2FkaW5nQ29tbWVudCB9XSA9IHVzZU11dGF0aW9uKEFERF9DT01NRU5ULCB7XHJcbiAgICB1cGRhdGUoXyxyZXN1bHQpIHtcclxuICAgICAgbGV0IGNvbW1lbnRBcnJheSA9IHBvc3REZXRhaWxzLmNvbW1lbnRzO1xyXG4gICAgICBsZXQgbmV3Q29tbWVudCA9IHtcclxuICAgICAgICBpZDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5pZCxcclxuICAgICAgICBjb250ZW50OiByZXN1bHQuZGF0YS5hZGRDb21tZW50LmNvbnRlbnQsXHJcbiAgICAgICAgY3JlYXRlZEF0OiByZXN1bHQuZGF0YS5hZGRDb21tZW50LmNyZWF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICAgIGNvbW1lbnRBcnJheS51bnNoaWZ0KG5ld0NvbW1lbnQpO1xyXG4gICAgICBzZXRDb21tZW50Q29udGVudCgnJyk7XHJcbiAgICAgIHNldFBvc3REZXRhaWxzKHsuLi5wb3N0RGV0YWlscywgWydjb21tZW50cyddOiBjb21tZW50QXJyYXl9KTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBwb3N0SWQ6IE51bWJlcihwb3N0SWQpLFxyXG4gICAgICBjb250ZW50OiBjb21tZW50Q29udGVudFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFt1cGRhdGVQb3N0LCB7IGxvYWRpbmdVcGRhdGUgfV0gPSB1c2VNdXRhdGlvbihVUERBVEVfUE9TVCwge1xyXG4gICAgdXBkYXRlKF8sIHJlc3VsdCkge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkOiB0ZW1wVmFsdWVzLmlkLFxyXG4gICAgICB0aXRsZTogdGVtcFZhbHVlcy50aXRsZSxcclxuICAgICAgY29udGVudDogdGVtcFZhbHVlcy5jb250ZW50LFxyXG4gICAgICBpbWFnZTogaW1nVmFsdWVcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgIGlkOiBkYXRhLnBvc3QuaWQsXHJcbiAgICAgIHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICBpbWFnZTogZGF0YS5wb3N0LmltYWdlXHJcbiAgICB9XHJcbiAgICBzZXRUZW1wVmFsdWVzKHRlbXBPYmplY3QpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbmNlbEVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIGNoYW5nZXM/XCIpO1xyXG4gICAgaWYocmVzKXtcclxuICAgICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgICAgaWQ6IGRhdGEucG9zdC5pZCxcclxuICAgICAgICB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICB9XHJcbiAgICAgIHNldEltZ1ZhbHVlKGRhdGEucG9zdC5pbWFnZSk7XHJcbiAgICAgIHNldFRlbXBWYWx1ZXModGVtcE9iamVjdCk7XHJcbiAgICAgIHNldEVkaXRTdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlUG9zdCgpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHVwbG9hZEltYWdlLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVEYXRhVVJMID0gZmlsZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZnIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShmci5yZXN1bHQpO1xyXG4gICAgZnIub25lcnJvciA9IHJlamVjdDtcclxuICAgIGZyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgIGZpbGVEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRJbWdWYWx1ZShyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyhkYXRhLnBvc3QpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYobG9hZGluZyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19sb2FkaW5nfT5cclxuICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7IHBvc3REZXRhaWxzICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgcG9zdERldGFpbHMudGl0bGUgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fdGV4dH0+SE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDsmbmJzcDt7JyA+ICd9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDt7cG9zdERldGFpbHMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19ib2R5fT5cclxuICAgICAgICAgICAgICB7IGlzTG9naW4gP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICB7IGlzRWRpdGluZyA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmUgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPkVkaXQgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19kYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdERldGFpbHMuY3JlYXRlZEF0ID8gZGF0YS5wb3N0LmNyZWF0ZWRBdC5zbGljZSgwLDEwKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgeyAhaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX190aXRsZX0+e3Bvc3REZXRhaWxzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXRhaWxzX190aXRsZX0gKyAke3N0eWxlcy5kZXRhaWxzX190aXRsZV9fdGV4dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19ffT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3VwbG9hZF9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJteWZpbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt1cGxvYWRJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19faW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdWYWx1ZSA/IGltZ1ZhbHVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6KHBvc3REZXRhaWxzLmltYWdlID8gcG9zdERldGFpbHMuaW1hZ2UgOiBcIi9pbWFnZXMvZ2lybC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsgIWlzRWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fYm9keX0+e3Bvc3REZXRhaWxzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGV0YWlsc19fYm9keX0gKyAke3N0eWxlcy5kZXRhaWxzX19ib2R5X190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2NvbW1lbnRzfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19fdGl0bGV9PkNPTU1FTlQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscy5jb21tZW50cyA/XHJcbiAgICAgICAgICAgICAgICAgIHBvc3REZXRhaWxzLmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19faXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fX2NvbnRlbnR9Pntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX19kYXRlfT57Y29tbWVudC5jcmVhdGVkQXQuc2xpY2UoMCwxMCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBjb21tZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvbW1lbnRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X190ZXh0YXJlYX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIHJldHVybiB7cHJvcHM6IHt9fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=