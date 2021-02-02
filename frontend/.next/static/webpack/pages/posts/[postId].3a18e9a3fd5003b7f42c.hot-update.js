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
      setCommentContent('');
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
        lineNumber: 142,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, postDetails && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }), postDetails.title ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.content__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, "HOME")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, "\xA0", postDetails.title))) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, isLogin ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__action,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: saveEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }, "Save Post"), __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: cancelEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, "Cancel")) : __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.action__text,
      onClick: handleEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }
    }, "Edit Post")) : null, postDetails ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 19
      }
    }, postDetails.createdAt ? data.post.createdAt.slice(0, 10) : null), !isEditing ? __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
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
        lineNumber: 194,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__upload_image,
      onClick: handleImageUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
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
        lineNumber: 212,
        columnNumber: 25
      }
    })) : null, __jsx("img", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
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
        lineNumber: 230,
        columnNumber: 23
      }
    })) : null, __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments ? postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
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
        lineNumber: 256,
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
        lineNumber: 263,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwb3N0RGV0YWlscyIsInNldFBvc3REZXRhaWxzIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNMb2dpbiIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VNdXRhdGlvbiIsIkFERF9DT01NRU5UIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImNvbW1lbnRBcnJheSIsImNvbW1lbnRzIiwibmV3Q29tbWVudCIsImFkZENvbW1lbnQiLCJjcmVhdGVkQXQiLCJ1bnNoaWZ0Iiwib25FcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkaW5nQ29tbWVudCIsIlVQREFURV9QT1NUIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cGRhdGVQb3N0IiwibG9hZGluZ1VwZGF0ZSIsImhhbmRsZUNvbW1lbnQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidmlld3Bvc3RfX2xvYWRpbmciLCJ2aWV3cG9zdF9fY29udGFpbmVyIiwibmF2aWdhdGlvbl9faGVhZGVyIiwibmF2aWdhdGlvbl9fY29udGVudCIsImNvbnRlbnRfX3RleHQiLCJuYXZpZ2F0aW9uX19ib2R5IiwiYm9keV9fYWN0aW9uIiwiYWN0aW9uX19jb250YWluZXIiLCJhY3Rpb25fX3RleHQiLCJib2R5X19kZXRhaWxzIiwiZGV0YWlsc19fZGF0ZSIsInNsaWNlIiwiZGV0YWlsc19fdGl0bGUiLCJkZXRhaWxzX190aXRsZV9fdGV4dCIsImRldGFpbHNfX2NvbnRhaW5lciIsImRldGFpbHNfXyIsImRldGFpbHNfX3VwbG9hZF9pbWFnZSIsImRldGFpbHNfX2ltYWdlIiwiZGV0YWlsc19fYm9keSIsImRldGFpbHNfX2JvZHlfX3RleHQiLCJib2R5X19jb21tZW50cyIsImNvbW1lbnRzX190aXRsZSIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50c19faXRlbSIsIml0ZW1fX2NvbnRlbnQiLCJpdGVtX19kYXRlIiwiY29tbWVudHNfX2lucHV0IiwiaW5wdXRfX3RleHRhcmVhIiwiaW5wdXRfX3N1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRmtCLE1BR1ZDLE1BSFUsR0FHQ0YsTUFBTSxDQUFDRyxLQUhSLENBR1ZELE1BSFU7O0FBQUEsa0JBSW9CRSxzREFBUSxDQUFDLEVBQUQsQ0FKNUI7QUFBQSxNQUlYQyxXQUpXO0FBQUEsTUFJRUMsY0FKRjs7QUFBQSxvQkFLRUMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FMWjtBQUFBLE1BS1ZDLE9BTFUsZUFLVkEsT0FMVTs7QUFBQSxtQkFNaUJMLHNEQUFRLENBQUMsS0FBRCxDQU56QjtBQUFBLE1BTVhNLFNBTlc7QUFBQSxNQU1BQyxhQU5BOztBQUFBLG1CQU9jUCxzREFBUSxDQUFDLEVBQUQsQ0FQdEI7QUFBQSxNQU9YUSxRQVBXO0FBQUEsTUFPREMsV0FQQzs7QUFBQSxtQkFRMEJULHNEQUFRLENBQUMsRUFBRCxDQVJsQztBQUFBLE1BUVhVLGNBUlc7QUFBQSxNQVFLQyxpQkFSTDs7QUFBQSxtQkFTa0JYLHNEQUFRLENBQUM7QUFDM0NZLE1BQUUsRUFBRSxJQUR1QztBQUUzQ0MsU0FBSyxFQUFFLEVBRm9DO0FBRzNDQyxXQUFPLEVBQUUsRUFIa0M7QUFJM0NDLFNBQUssRUFBRTtBQUpvQyxHQUFELENBVDFCO0FBQUEsTUFTWEMsVUFUVztBQUFBLE1BU0NDLGFBVEQ7O0FBQUEsa0JBZ0JlQyxvRUFBUSxDQUFDQyxvRUFBRCxFQUFtQjtBQUMxREMsYUFBUyxFQUFFO0FBQ1R0QixZQUFNLEVBQUV1QixNQUFNLENBQUN2QixNQUFEO0FBREw7QUFEK0MsR0FBbkIsQ0FoQnZCO0FBQUEsTUFnQlZ3QixPQWhCVSxhQWdCVkEsT0FoQlU7QUFBQSxNQWdCREMsS0FoQkMsYUFnQkRBLEtBaEJDO0FBQUEsTUFnQk1DLElBaEJOLGFBZ0JNQSxJQWhCTjs7QUFBQSxxQkFzQnVCQyx1RUFBVyxDQUFDQywrREFBRCxFQUFjO0FBQ2hFQyxVQURnRSxrQkFDekRDLENBRHlELEVBQ3ZEQyxNQUR1RCxFQUMvQztBQUNmLFVBQUlDLFlBQVksR0FBRzdCLFdBQVcsQ0FBQzhCLFFBQS9CO0FBQ0EsVUFBSUMsVUFBVSxHQUFHO0FBQ2ZwQixVQUFFLEVBQUVpQixNQUFNLENBQUNMLElBQVAsQ0FBWVMsVUFBWixDQUF1QnJCLEVBRFo7QUFFZkUsZUFBTyxFQUFFZSxNQUFNLENBQUNMLElBQVAsQ0FBWVMsVUFBWixDQUF1Qm5CLE9BRmpCO0FBR2ZvQixpQkFBUyxFQUFFTCxNQUFNLENBQUNMLElBQVAsQ0FBWVMsVUFBWixDQUF1QkM7QUFIbkIsT0FBakI7QUFLQUosa0JBQVksQ0FBQ0ssT0FBYixDQUFxQkgsVUFBckI7QUFDQXJCLHVCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDQVQsb0JBQWMsaUNBQUtELFdBQUwsa0tBQW1CLFVBQW5CLEVBQWdDNkIsWUFBaEMsR0FBZDtBQUNELEtBWCtEO0FBWWhFTSxXQVpnRSxtQkFZeERDLEdBWndELEVBWW5EO0FBQ1hDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsS0FkK0Q7QUFlaEVqQixhQUFTLEVBQUU7QUFDVHRCLFlBQU0sRUFBRXVCLE1BQU0sQ0FBQ3ZCLE1BQUQsQ0FETDtBQUVUZ0IsYUFBTyxFQUFFSjtBQUZBO0FBZnFELEdBQWQsQ0F0QmxDO0FBQUE7QUFBQSxNQXNCWHVCLFVBdEJXO0FBQUEsTUFzQkdPLGNBdEJILG9CQXNCR0EsY0F0Qkg7O0FBQUEsc0JBMkNzQmYsdUVBQVcsQ0FBQ2dCLCtEQUFELEVBQWM7QUFDL0RkLFVBRCtELGtCQUN4REMsQ0FEd0QsRUFDckRDLE1BRHFELEVBQzdDO0FBQ2hCYSxjQUFRLENBQUNDLE1BQVQ7QUFDRCxLQUg4RDtBQUkvRFAsV0FKK0QsbUJBSXZEQyxHQUp1RCxFQUluRDtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBTjhEO0FBTy9EakIsYUFBUyxFQUFFO0FBQ1RSLFFBQUUsRUFBRUksVUFBVSxDQUFDSixFQUROO0FBRVRDLFdBQUssRUFBRUcsVUFBVSxDQUFDSCxLQUZUO0FBR1RDLGFBQU8sRUFBRUUsVUFBVSxDQUFDRixPQUhYO0FBSVRDLFdBQUssRUFBRVA7QUFKRTtBQVBvRCxHQUFkLENBM0NqQztBQUFBO0FBQUEsTUEyQ1hvQyxVQTNDVztBQUFBLE1BMkNHQyxhQTNDSCxvQkEyQ0dBLGFBM0NIOztBQTBEbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0JwQyxxQkFBaUIsQ0FBQ29DLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxLQUFELEVBQVc7QUFDMUI5QixpQkFBYSxpQ0FBS0QsVUFBTCxrS0FBa0IrQixLQUFLLENBQUNDLE1BQU4sQ0FBYUcsSUFBL0IsRUFBc0NKLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFuRCxHQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixJQUFaO0FBQ0EsUUFBSTZCLFVBQVUsR0FBRztBQUNmekMsUUFBRSxFQUFFWSxJQUFJLENBQUM4QixJQUFMLENBQVUxQyxFQURDO0FBRWZDLFdBQUssRUFBRVcsSUFBSSxDQUFDOEIsSUFBTCxDQUFVekMsS0FGRjtBQUdmQyxhQUFPLEVBQUVVLElBQUksQ0FBQzhCLElBQUwsQ0FBVXhDLE9BSEo7QUFJZkMsV0FBSyxFQUFFUyxJQUFJLENBQUM4QixJQUFMLENBQVV2QztBQUpGLEtBQWpCO0FBTUFFLGlCQUFhLENBQUNvQyxVQUFELENBQWI7QUFDQTlDLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FWRDs7QUFZQSxNQUFNZ0QsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlDLEdBQUcsR0FBR0MsT0FBTyxDQUFDLDBDQUFELENBQWpCOztBQUNBLFFBQUdELEdBQUgsRUFBTztBQUNMLFVBQUlILFVBQVUsR0FBRztBQUNmekMsVUFBRSxFQUFFWSxJQUFJLENBQUM4QixJQUFMLENBQVUxQyxFQURDO0FBRWZDLGFBQUssRUFBRVcsSUFBSSxDQUFDOEIsSUFBTCxDQUFVekMsS0FGRjtBQUdmQyxlQUFPLEVBQUVVLElBQUksQ0FBQzhCLElBQUwsQ0FBVXhDO0FBSEosT0FBakI7QUFLQUwsaUJBQVcsQ0FBQ2UsSUFBSSxDQUFDOEIsSUFBTCxDQUFVdkMsS0FBWCxDQUFYO0FBQ0FFLG1CQUFhLENBQUNvQyxVQUFELENBQWI7QUFDQTlDLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLE1BQU1tRCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCZCxjQUFVO0FBQ1ZyQyxpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsTUFBTW9ELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QmpFLGVBQVcsQ0FBQ2tFLE9BQVosQ0FBb0JDLEtBQXBCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxJQUFJO0FBQUEsV0FBSSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzNELFVBQUlDLEVBQUUsR0FBRyxJQUFJQyxVQUFKLEVBQVQ7O0FBQ0FELFFBQUUsQ0FBQ0UsTUFBSCxHQUFZO0FBQUEsZUFBTUosT0FBTyxDQUFDRSxFQUFFLENBQUN0QyxNQUFKLENBQWI7QUFBQSxPQUFaOztBQUNBc0MsUUFBRSxDQUFDRyxPQUFILEdBQWFKLE1BQWI7QUFDQUMsUUFBRSxDQUFDSSxhQUFILENBQWlCUixJQUFqQjtBQUNELEtBTDJCLENBQUo7QUFBQSxHQUF4Qjs7QUFPQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDekIsS0FBRCxFQUFXO0FBQzdCLFFBQUdBLEtBQUssQ0FBQ0MsTUFBTixDQUFheUIsS0FBYixDQUFtQixDQUFuQixDQUFILEVBQXlCO0FBQ3ZCWCxpQkFBVyxDQUFDZixLQUFLLENBQUNDLE1BQU4sQ0FBYXlCLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFYLENBQ0NDLElBREQsQ0FDTSxVQUFBbEIsR0FBRyxFQUFJO0FBQ1gvQyxtQkFBVyxDQUFDK0MsR0FBRCxDQUFYO0FBQ0QsT0FIRCxXQUlPLFVBQUFuQixHQUFHLEVBQUk7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQU5EO0FBT0Q7QUFDRixHQVZEOztBQVlBc0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR25ELElBQUgsRUFBUTtBQUNOdEIsb0JBQWMsQ0FBQ3NCLElBQUksQ0FBQzhCLElBQU4sQ0FBZDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUM5QixJQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFHRixPQUFILEVBQVc7QUFDVCxXQUNFO0FBQUssZUFBUyxFQUFFc0QsNERBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBS0QsR0FORCxNQU1PO0FBQ0wsV0FDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTVFLFdBQVcsSUFDWDtBQUFLLGVBQVMsRUFBRTJFLDREQUFNLENBQUNFLG1CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFSTdFLFdBQVcsQ0FBQ1ksS0FBWixHQUNBO0FBQUssZUFBUyxFQUFFK0QsNERBQU0sQ0FBQ0csa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUgsNERBQU0sQ0FBQ0ksbUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFFSiw0REFBTSxDQUFDSyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdCLEtBQWhCLFNBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVVoRixXQUFXLENBQUNZLEtBQXRCLENBTEYsQ0FERixDQURBLEdBVUUsSUFaTixFQWNFO0FBQUssZUFBUyxFQUFFK0QsNERBQU0sQ0FBQ00sZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTdFLE9BQU8sR0FDUDtBQUFLLGVBQVMsRUFBRXVFLDREQUFNLENBQUNPLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTdFLFNBQVMsR0FDWDtBQUFLLGVBQVMsRUFBRXNFLDREQUFNLENBQUNRLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxlQUFTLEVBQUVSLDREQUFNLENBQUNTLFlBRHBCO0FBRUUsYUFBTyxFQUFFM0IsWUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBTUU7QUFDRSxlQUFTLEVBQUVrQiw0REFBTSxDQUFDUyxZQURwQjtBQUVFLGFBQU8sRUFBRTlCLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixDQURXLEdBWVQ7QUFDRSxlQUFTLEVBQUVxQiw0REFBTSxDQUFDUyxZQURwQjtBQUVFLGFBQU8sRUFBRWpDLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSixDQURPLEdBb0JMLElBckJOLEVBdUJJbkQsV0FBVyxHQUNYO0FBQUssZUFBUyxFQUFFMkUsNERBQU0sQ0FBQ1UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFFViw0REFBTSxDQUFDVyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d0RixXQUFXLENBQUNpQyxTQUFaLEdBQXdCVixJQUFJLENBQUM4QixJQUFMLENBQVVwQixTQUFWLENBQW9Cc0QsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNEIsRUFBNUIsQ0FBeEIsR0FBMEQsSUFEN0QsQ0FERixFQUlJLENBQUNsRixTQUFELEdBQ0E7QUFBSSxlQUFTLEVBQUVzRSw0REFBTSxDQUFDYSxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVDeEYsV0FBVyxDQUFDWSxLQUFuRCxDQURBLEdBRUE7QUFDRSxpQkFBVyxFQUFDLE9BRGQ7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLGNBQVEsRUFBRXFDLFFBSFo7QUFJRSxrQkFBWSxFQUFFbEMsVUFBVSxDQUFDSCxLQUozQjtBQUtFLGVBQVMsWUFBSytELDREQUFNLENBQUNhLGNBQVosZ0JBQWdDYiw0REFBTSxDQUFDYyxvQkFBdkMsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkosRUFjRTtBQUFLLGVBQVMsRUFBRWQsNERBQU0sQ0FBQ2Usa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSXJGLFNBQVMsR0FFVDtBQUFLLGVBQVMsRUFBRXNFLDREQUFNLENBQUNnQixTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxlQUFTLEVBQUVoQiw0REFBTSxDQUFDaUIscUJBRHBCO0FBRUUsYUFBTyxFQUFFbEMsaUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQU9FO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLFNBQUcsRUFBRWpFLFdBSFA7QUFJRSxjQUFRLEVBQUU4RSxXQUpaO0FBS0UsWUFBTSxNQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixDQUZTLEdBaUJQLElBbEJOLEVBb0JFO0FBQ0UsZUFBUyxFQUFFSSw0REFBTSxDQUFDa0IsY0FEcEI7QUFFRSxTQUFHLEVBQUV0RixRQUFRLEdBQUdBLFFBQUgsR0FDVFAsV0FBVyxDQUFDYyxLQUFaLEdBQW9CZCxXQUFXLENBQUNjLEtBQWhDLEdBQXdDLGtCQUg5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcEJGLENBZEYsRUF3Q0ksQ0FBQ1QsU0FBRCxHQUNFO0FBQUcsZUFBUyxFQUFFc0UsNERBQU0sQ0FBQ21CLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUM5RixXQUFXLENBQUNhLE9BQWpELENBREYsR0FFRTtBQUNFLGlCQUFXLEVBQUMsU0FEZDtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsY0FBUSxFQUFFb0MsUUFIWjtBQUlFLGtCQUFZLEVBQUVsQyxVQUFVLENBQUNGLE9BSjNCO0FBS0UsZUFBUyxZQUFLOEQsNERBQU0sQ0FBQ21CLGFBQVosZ0JBQStCbkIsNERBQU0sQ0FBQ29CLG1CQUF0QyxDQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUExQ04sQ0FEVyxHQW9EVCxJQTNFTixFQTZFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0VGLEVBOEVFO0FBQUssZUFBUyxFQUFFcEIsNERBQU0sQ0FBQ3FCLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRXJCLDREQUFNLENBQUNzQixlQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUlqRyxXQUFXLENBQUM4QixRQUFaLEdBQ0E5QixXQUFXLENBQUM4QixRQUFaLENBQXFCb0UsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3BDLGFBQ0U7QUFBSyxXQUFHLEVBQUVBLE9BQU8sQ0FBQ3hGLEVBQWxCO0FBQXNCLGlCQUFTLEVBQUVnRSw0REFBTSxDQUFDeUIsY0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBRXpCLDREQUFNLENBQUMwQixhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDRixPQUFPLENBQUN0RixPQUE3QyxDQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFFOEQsNERBQU0sQ0FBQzJCLFVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0NILE9BQU8sQ0FBQ2xFLFNBQVIsQ0FBa0JzRCxLQUFsQixDQUF3QixDQUF4QixFQUEwQixFQUExQixDQUFsQyxDQUZGLENBREY7QUFNRCxLQVBELENBREEsR0FTRSxJQVhOLEVBYUU7QUFBSyxlQUFTLEVBQUVaLDREQUFNLENBQUM0QixlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxpQkFBVyxFQUFDLGVBRGQ7QUFFRSxVQUFJLEVBQUMsU0FGUDtBQUdFLFlBQU0sRUFBRTFELGFBSFY7QUFJRSxrQkFBWSxFQUFFcEMsY0FKaEI7QUFLRSxlQUFTLEVBQUVrRSw0REFBTSxDQUFDNkIsZUFMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUU7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFdBQUssRUFBQyxRQUZSO0FBR0UsYUFBTyxFQUFFeEUsVUFIWDtBQUlFLGVBQVMsRUFBRTJDLDREQUFNLENBQUM4QixhQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FiRixDQTlFRixDQWRGLENBRkosRUE4SEUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BOUhGLENBREY7QUFrSUQ7QUFDRjs7R0F4UVFqSCxRO1VBRVFJLHFELEVBY2tCcUIsNEQsRUFNUU8sK0QsRUFxQkRBLCtEOzs7S0EzQ2pDaEMsUTs7QUE4UU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0SWRdLjNhMThlOWEzZmQ1MDAzYjdmNDJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBGRVRDSF9QT1NUX1FVRVJZLCBBRERfQ09NTUVOVCwgVVBEQVRFX1BPU1QgfSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvcG9zdHMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJDb250ZXh0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ZpZXdwb3N0Lm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFZpZXdQb3N0KCkge1xyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcG9zdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Bvc3REZXRhaWxzLCBzZXRQb3N0RGV0YWlsc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRFZGl0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1nVmFsdWUsIHNldEltZ1ZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tbWVudENvbnRlbnQsIHNldENvbW1lbnRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGVtcFZhbHVlcywgc2V0VGVtcFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogbnVsbCxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgaW1hZ2U6ICcnXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfUE9TVF9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICBwb3N0SWQ6IE51bWJlcihwb3N0SWQpIFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFthZGRDb21tZW50LCB7IGxvYWRpbmdDb21tZW50IH1dID0gdXNlTXV0YXRpb24oQUREX0NPTU1FTlQsIHtcclxuICAgIHVwZGF0ZShfLHJlc3VsdCkge1xyXG4gICAgICBsZXQgY29tbWVudEFycmF5ID0gcG9zdERldGFpbHMuY29tbWVudHM7XHJcbiAgICAgIGxldCBuZXdDb21tZW50ID0ge1xyXG4gICAgICAgIGlkOiByZXN1bHQuZGF0YS5hZGRDb21tZW50LmlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5kYXRhLmFkZENvbW1lbnQuY29udGVudCxcclxuICAgICAgICBjcmVhdGVkQXQ6IHJlc3VsdC5kYXRhLmFkZENvbW1lbnQuY3JlYXRlZEF0XHJcbiAgICAgIH1cclxuICAgICAgY29tbWVudEFycmF5LnVuc2hpZnQobmV3Q29tbWVudCk7XHJcbiAgICAgIHNldENvbW1lbnRDb250ZW50KCcnKTtcclxuICAgICAgc2V0UG9zdERldGFpbHMoey4uLnBvc3REZXRhaWxzLCBbJ2NvbW1lbnRzJ106IGNvbW1lbnRBcnJheX0pO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHBvc3RJZDogTnVtYmVyKHBvc3RJZCksXHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnRDb250ZW50XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW3VwZGF0ZVBvc3QsIHsgbG9hZGluZ1VwZGF0ZSB9XSA9IHVzZU11dGF0aW9uKFVQREFURV9QT1NULCB7XHJcbiAgICB1cGRhdGUoXywgcmVzdWx0KSB7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IHRlbXBWYWx1ZXMuaWQsXHJcbiAgICAgIHRpdGxlOiB0ZW1wVmFsdWVzLnRpdGxlLFxyXG4gICAgICBjb250ZW50OiB0ZW1wVmFsdWVzLmNvbnRlbnQsXHJcbiAgICAgIGltYWdlOiBpbWdWYWx1ZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENvbW1lbnRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGVtcFZhbHVlcyh7Li4udGVtcFZhbHVlcywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgIGlkOiBkYXRhLnBvc3QuaWQsXHJcbiAgICAgIHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICBpbWFnZTogZGF0YS5wb3N0LmltYWdlXHJcbiAgICB9XHJcbiAgICBzZXRUZW1wVmFsdWVzKHRlbXBPYmplY3QpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbmNlbEVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIGNoYW5nZXM/XCIpO1xyXG4gICAgaWYocmVzKXtcclxuICAgICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgICAgaWQ6IGRhdGEucG9zdC5pZCxcclxuICAgICAgICB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICB9XHJcbiAgICAgIHNldEltZ1ZhbHVlKGRhdGEucG9zdC5pbWFnZSk7XHJcbiAgICAgIHNldFRlbXBWYWx1ZXModGVtcE9iamVjdCk7XHJcbiAgICAgIHNldEVkaXRTdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlUG9zdCgpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHVwbG9hZEltYWdlLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVEYXRhVVJMID0gZmlsZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZnIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShmci5yZXN1bHQpO1xyXG4gICAgZnIub25lcnJvciA9IHJlamVjdDtcclxuICAgIGZyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgIGZpbGVEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRJbWdWYWx1ZShyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyhkYXRhLnBvc3QpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYobG9hZGluZyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19sb2FkaW5nfT5cclxuICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7IHBvc3REZXRhaWxzICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgcG9zdERldGFpbHMudGl0bGUgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fdGV4dH0+SE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDsmbmJzcDt7JyA+ICd9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDt7cG9zdERldGFpbHMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19ib2R5fT5cclxuICAgICAgICAgICAgICB7IGlzTG9naW4gP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICB7IGlzRWRpdGluZyA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmUgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPkVkaXQgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19kYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdERldGFpbHMuY3JlYXRlZEF0ID8gZGF0YS5wb3N0LmNyZWF0ZWRBdC5zbGljZSgwLDEwKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgeyAhaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX190aXRsZX0+e3Bvc3REZXRhaWxzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXRhaWxzX190aXRsZX0gKyAke3N0eWxlcy5kZXRhaWxzX190aXRsZV9fdGV4dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19ffT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3VwbG9hZF9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJteWZpbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt1cGxvYWRJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19faW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdWYWx1ZSA/IGltZ1ZhbHVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6KHBvc3REZXRhaWxzLmltYWdlID8gcG9zdERldGFpbHMuaW1hZ2UgOiBcIi9pbWFnZXMvZ2lybC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsgIWlzRWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fYm9keX0+e3Bvc3REZXRhaWxzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGV0YWlsc19fYm9keX0gKyAke3N0eWxlcy5kZXRhaWxzX19ib2R5X190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2NvbW1lbnRzfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19fdGl0bGV9PkNPTU1FTlQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscy5jb21tZW50cyA/XHJcbiAgICAgICAgICAgICAgICAgIHBvc3REZXRhaWxzLmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19faXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fX2NvbnRlbnR9Pntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX19kYXRlfT57Y29tbWVudC5jcmVhdGVkQXQuc2xpY2UoMCwxMCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBjb21tZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvbW1lbnRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X190ZXh0YXJlYX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIHJldHVybiB7cHJvcHM6IHt9fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=