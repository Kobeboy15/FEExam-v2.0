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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _repositories_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../repositories/posts */ "./repositories/posts.js");
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      isLogin = _useContext.isLogin;

  var postId = router.query.postId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      postDetails = _useState[0],
      setPostDetails = _useState[1];

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

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_6__["FETCH_POST_QUERY"], {
    variables: {
      postId: Number(postId)
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT"], {
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

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_repositories_posts__WEBPACK_IMPORTED_MODULE_6__["UPDATE_POST"], {
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
      document.title = "".concat(data.post.title, " - BLOG");
    }
  }, [data]);

  if (loading) {
    return __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewpost__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }
    }, postDetails && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }), postDetails.title && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.content__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, "HOME")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }, "\xA0", postDetails.title))), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, isLogin && __jsx("div", {
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
    }, "Edit Post")), postDetails && __jsx("div", {
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
    }, isEditing && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__upload_image,
      onClick: handleImageUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
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
        lineNumber: 210,
        columnNumber: 25
      }
    })), __jsx("img", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.details__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
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
        lineNumber: 227,
        columnNumber: 23
      }
    })), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments && postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.comments__input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
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
        lineNumber: 251,
        columnNumber: 19
      }
    }), __jsx("input", {
      type: "button",
      value: "Submit",
      onClick: function onClick() {
        commentContent && addComment();
      },
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.input__submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }
    }));
  }
}

_s(ViewPost, "SnbcyDkt6cC6ewk3fjbaBAR64u0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImlzTG9naW4iLCJwb3N0SWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicG9zdERldGFpbHMiLCJzZXRQb3N0RGV0YWlscyIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VNdXRhdGlvbiIsIkFERF9DT01NRU5UIiwidXBkYXRlIiwiXyIsInJlc3VsdCIsImNvbW1lbnRBcnJheSIsImNvbW1lbnRzIiwibmV3Q29tbWVudCIsImFkZENvbW1lbnQiLCJjcmVhdGVkQXQiLCJ1bnNoaWZ0Iiwib25FcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkaW5nQ29tbWVudCIsIlVQREFURV9QT1NUIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cGRhdGVQb3N0IiwibG9hZGluZ1VwZGF0ZSIsImhhbmRsZUNvbW1lbnQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJzdHlsZXMiLCJ2aWV3cG9zdF9fbG9hZGluZyIsInZpZXdwb3N0X19jb250YWluZXIiLCJuYXZpZ2F0aW9uX19oZWFkZXIiLCJuYXZpZ2F0aW9uX19jb250ZW50IiwiY29udGVudF9fdGV4dCIsIm5hdmlnYXRpb25fX2JvZHkiLCJib2R5X19hY3Rpb24iLCJhY3Rpb25fX2NvbnRhaW5lciIsImFjdGlvbl9fdGV4dCIsImJvZHlfX2RldGFpbHMiLCJkZXRhaWxzX19kYXRlIiwic2xpY2UiLCJkZXRhaWxzX190aXRsZSIsImRldGFpbHNfX3RpdGxlX190ZXh0IiwiZGV0YWlsc19fY29udGFpbmVyIiwiZGV0YWlsc19fIiwiZGV0YWlsc19fdXBsb2FkX2ltYWdlIiwiZGV0YWlsc19faW1hZ2UiLCJkZXRhaWxzX19ib2R5IiwiZGV0YWlsc19fYm9keV9fdGV4dCIsImJvZHlfX2NvbW1lbnRzIiwiY29tbWVudHNfX3RpdGxlIiwibWFwIiwiY29tbWVudCIsImNvbW1lbnRzX19pdGVtIiwiaXRlbV9fY29udGVudCIsIml0ZW1fX2RhdGUiLCJjb21tZW50c19faW5wdXQiLCJpbnB1dF9fdGV4dGFyZWEiLCJpbnB1dF9fc3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmtCLG9CQUdFQyx3REFBVSxDQUFDQywrREFB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QXlRTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uYzZlZTVmMDRmMzc4MDk5ZjlhNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZFVENIX1BPU1RfUVVFUlksIEFERF9DT01NRU5ULCBVUERBVEVfUE9TVCB9IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9wb3N0cydcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlckNvbnRleHQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlld3Bvc3QubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gVmlld1Bvc3QoKSB7XHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpc0xvZ2luIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIFxyXG4gIGNvbnN0IFtwb3N0RGV0YWlscywgc2V0UG9zdERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldEVkaXRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWdWYWx1ZSwgc2V0SW1nVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50Q29udGVudCwgc2V0Q29tbWVudENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZW1wVmFsdWVzLCBzZXRUZW1wVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBpbWFnZTogJydcclxuICB9KVxyXG5cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9QT1NUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgXHJcbiAgICAgIHBvc3RJZDogTnVtYmVyKHBvc3RJZCkgXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2FkZENvbW1lbnQsIHsgbG9hZGluZ0NvbW1lbnQgfV0gPSB1c2VNdXRhdGlvbihBRERfQ09NTUVOVCwge1xyXG4gICAgdXBkYXRlKF8scmVzdWx0KSB7XHJcbiAgICAgIGxldCBjb21tZW50QXJyYXkgPSBwb3N0RGV0YWlscy5jb21tZW50cztcclxuICAgICAgbGV0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLmFkZENvbW1lbnQuaWQsXHJcbiAgICAgICAgY29udGVudDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jb250ZW50LFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jcmVhdGVkQXRcclxuICAgICAgfVxyXG4gICAgICBjb21tZW50QXJyYXkudW5zaGlmdChuZXdDb21tZW50KTtcclxuICAgICAgc2V0UG9zdERldGFpbHMoey4uLnBvc3REZXRhaWxzLCBbJ2NvbW1lbnRzJ106IGNvbW1lbnRBcnJheX0pO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHBvc3RJZDogTnVtYmVyKHBvc3RJZCksXHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnRDb250ZW50XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW3VwZGF0ZVBvc3QsIHsgbG9hZGluZ1VwZGF0ZSB9XSA9IHVzZU11dGF0aW9uKFVQREFURV9QT1NULCB7XHJcbiAgICB1cGRhdGUoXywgcmVzdWx0KSB7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IHRlbXBWYWx1ZXMuaWQsXHJcbiAgICAgIHRpdGxlOiB0ZW1wVmFsdWVzLnRpdGxlLFxyXG4gICAgICBjb250ZW50OiB0ZW1wVmFsdWVzLmNvbnRlbnQsXHJcbiAgICAgIGltYWdlOiBpbWdWYWx1ZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENvbW1lbnRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGVtcFZhbHVlcyh7Li4udGVtcFZhbHVlcywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgIGlkOiBkYXRhLnBvc3QuaWQsXHJcbiAgICAgIHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICBpbWFnZTogZGF0YS5wb3N0LmltYWdlXHJcbiAgICB9XHJcbiAgICBzZXRUZW1wVmFsdWVzKHRlbXBPYmplY3QpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbmNlbEVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIGNoYW5nZXM/XCIpO1xyXG4gICAgaWYocmVzKXtcclxuICAgICAgbGV0IHRlbXBPYmplY3QgPSB7XHJcbiAgICAgICAgaWQ6IGRhdGEucG9zdC5pZCxcclxuICAgICAgICB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEucG9zdC5jb250ZW50LFxyXG4gICAgICB9XHJcbiAgICAgIHNldEltZ1ZhbHVlKGRhdGEucG9zdC5pbWFnZSk7XHJcbiAgICAgIHNldFRlbXBWYWx1ZXModGVtcE9iamVjdCk7XHJcbiAgICAgIHNldEVkaXRTdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlUG9zdCgpO1xyXG4gICAgc2V0RWRpdFN0YXR1cyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHVwbG9hZEltYWdlLmN1cnJlbnQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbGVEYXRhVVJMID0gZmlsZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgZnIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShmci5yZXN1bHQpO1xyXG4gICAgZnIub25lcnJvciA9IHJlamVjdDtcclxuICAgIGZyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgIGZpbGVEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRJbWdWYWx1ZShyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyhkYXRhLnBvc3QpO1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGAke2RhdGEucG9zdC50aXRsZX0gLSBCTE9HYDtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGlmKGxvYWRpbmcpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3cG9zdF9fbG9hZGluZ30+XHJcbiAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgeyBwb3N0RGV0YWlscyAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3cG9zdF9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICB7IHBvc3REZXRhaWxzLnRpdGxlICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X190ZXh0fT5IT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOyZuYnNwO3snID4gJ30mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiZuYnNwO3twb3N0RGV0YWlscy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fX2JvZHl9PlxyXG4gICAgICAgICAgICAgIHsgaXNMb2dpbiAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICB7IGlzRWRpdGluZyA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmUgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPkVkaXQgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsgcG9zdERldGFpbHMgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keV9fZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0RGV0YWlscy5jcmVhdGVkQXQgPyBkYXRhLnBvc3QuY3JlYXRlZEF0LnNsaWNlKDAsMTApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICB7ICFpc0VkaXRpbmcgXHJcbiAgICAgICAgICAgICAgICAgID8gPGgyIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3RpdGxlfT57cG9zdERldGFpbHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgOiA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGVtcFZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRldGFpbHNfX3RpdGxlfSArICR7c3R5bGVzLmRldGFpbHNfX3RpdGxlX190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0VkaXRpbmcgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX191cGxvYWRfaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibXlmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dXBsb2FkSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19pbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1ZhbHVlID8gaW1nVmFsdWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoocG9zdERldGFpbHMuaW1hZ2UgPyBwb3N0RGV0YWlscy5pbWFnZSA6IFwiL2ltYWdlcy9naXJsLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgeyAhaXNFZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19ib2R5fT57cG9zdERldGFpbHMuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGVtcFZhbHVlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXRhaWxzX19ib2R5fSArICR7c3R5bGVzLmRldGFpbHNfX2JvZHlfX3RleHR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2NvbW1lbnRzfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19fdGl0bGV9PkNPTU1FTlQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscy5jb21tZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgICBwb3N0RGV0YWlscy5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX19jb250ZW50fT57Y29tbWVudC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV9fZGF0ZX0+e2NvbW1lbnQuY3JlYXRlZEF0LnNsaWNlKDAsMTApfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBjb21tZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvbW1lbnRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X190ZXh0YXJlYX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgY29tbWVudENvbnRlbnQgJiYgYWRkQ29tbWVudCgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIHJldHVybiB7cHJvcHM6IHt9fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=