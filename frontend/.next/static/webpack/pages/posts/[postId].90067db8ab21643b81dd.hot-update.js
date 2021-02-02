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
/* harmony import */ var C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UserContext */ "./components/UserContext.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewpost.module.css */ "./pages/posts/viewpost.module.css");
/* harmony import */ var _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/loading */ "./components/loading.js");




var _jsxFileName = "C:\\Users\\Kobeboy\\Desktop\\frontend-exam\\frontend\\pages\\posts\\[postId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation addComment(\n    $postId: Int!\n    $content: String!\n  ){\n    addComment(\n      postId: $postId,\n      content: $content\n    )\n    {\n      id createdAt content\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation updatePost(\n    $id: Int!\n    $title:String!\n    $content:String\n    $image:String\n  ){\n    updatePost(\n      post: {\n        id: $id,\n        title: $title,\n        content: $content,\n        image: $image\t\n    })\n    {\n      title\n      content \n      image\n      comments{\n        id content createdAt\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Post($postId: Int!){\n    post(id: $postId) {\n      id \n      title \n      content \n      image \n      createdAt \n      comments{\n        id content createdAt\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function ViewPost() {
  _s();

  var _this = this;

  var uploadImage = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var postId = router.query.postId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      postDetails = _useState[0],
      setPostDetails = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      isLogin = _useContext.isLogin;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isEditing = _useState2[0],
      setEditStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imgValue = _useState3[0],
      setImgValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      commentContent = _useState4[0],
      setCommentContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    id: null,
    title: '',
    content: '',
    image: ''
  }),
      tempValues = _useState5[0],
      setTempValues = _useState5[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(FETCH_POST_QUERY, {
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
    setTempValues(_objectSpread(_objectSpread({}, tempValues), {}, Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.value)));
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(ADD_COMMENT, {
    update: function update(_, result) {
      var commentArray = postDetails.comments;
      var newComment = {
        id: result.data.addComment.id,
        content: result.data.addComment.content,
        createdAt: result.data.addComment.createdAt
      };
      commentArray.unshift(newComment);
      setCommentContent('');
      setPostDetails(_objectSpread(_objectSpread({}, postDetails), {}, Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, 'comments', commentArray)));
    },
    onError: function onError(err) {
      console.log(err);
    },
    variables: {
      postId: Number(postId),
      content: commentContent
    }
  }),
      _useMutation2 = Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      addComment = _useMutation2[0],
      loadingComment = _useMutation2[1].loadingComment;

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(UPDATE_POST, {
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
      _useMutation4 = Object(C_Users_Kobeboy_Desktop_frontend_exam_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 2),
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (data) {
      setPostDetails(data.post);
    }
  }, [data]);

  if (loading) {
    return __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.viewpost__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }), postDetails.title ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__text,
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, isLogin ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__action,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: saveEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }
    }, "Save Post"), __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: cancelEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, "Cancel")) : __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: handleEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, "Edit Post")) : null, postDetails ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }, postDetails.createdAt ? data.post.createdAt.slice(0, 10) : null), !isEditing ? __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__title,
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
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__title, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__title__text),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 19
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__upload_image,
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__body,
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
      className: "".concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__body, " + ").concat(_viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__body__text),
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments ? postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__input,
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__textarea,
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
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.input__submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c = ViewPost;
var FETCH_POST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
var UPDATE_POST = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject2());
var ADD_COMMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject3());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwb3N0RGV0YWlscyIsInNldFBvc3REZXRhaWxzIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNMb2dpbiIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJoYW5kbGVDb21tZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmFtZSIsInVzZU11dGF0aW9uIiwiQUREX0NPTU1FTlQiLCJ1cGRhdGUiLCJfIiwicmVzdWx0IiwiY29tbWVudEFycmF5IiwiY29tbWVudHMiLCJuZXdDb21tZW50IiwiYWRkQ29tbWVudCIsImNyZWF0ZWRBdCIsInVuc2hpZnQiLCJvbkVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmdDb21tZW50IiwiVVBEQVRFX1BPU1QiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZVBvc3QiLCJsb2FkaW5nVXBkYXRlIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidmlld3Bvc3RfX2xvYWRpbmciLCJ2aWV3cG9zdF9fY29udGFpbmVyIiwibmF2aWdhdGlvbl9faGVhZGVyIiwibmF2aWdhdGlvbl9fY29udGVudCIsImNvbnRlbnRfX3RleHQiLCJuYXZpZ2F0aW9uX19ib2R5IiwiYm9keV9fYWN0aW9uIiwiYWN0aW9uX19jb250YWluZXIiLCJhY3Rpb25fX3RleHQiLCJib2R5X19kZXRhaWxzIiwiZGV0YWlsc19fZGF0ZSIsInNsaWNlIiwiZGV0YWlsc19fdGl0bGUiLCJkZXRhaWxzX190aXRsZV9fdGV4dCIsImRldGFpbHNfX2NvbnRhaW5lciIsImRldGFpbHNfXyIsImRldGFpbHNfX3VwbG9hZF9pbWFnZSIsImRldGFpbHNfX2ltYWdlIiwiZGV0YWlsc19fYm9keSIsImRldGFpbHNfX2JvZHlfX3RleHQiLCJib2R5X19jb21tZW50cyIsImNvbW1lbnRzX190aXRsZSIsIm1hcCIsImNvbW1lbnQiLCJjb21tZW50c19faXRlbSIsIml0ZW1fX2NvbnRlbnQiLCJpdGVtX19kYXRlIiwiY29tbWVudHNfX2lucHV0IiwiaW5wdXRfX3RleHRhcmVhIiwiaW5wdXRfX3N1Ym1pdCIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FB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QyxRO0FBOFFULElBQU0wQixnQkFBZ0IsR0FBR3dGLG1EQUFILG1CQUF0QjtBQWVBLElBQU01RCxXQUFXLEdBQUc0RCxtREFBSCxvQkFBakI7QUF5QkEsSUFBTTNFLFdBQVcsR0FBRzJFLG1EQUFILG9CQUFqQjs7QUFnQmVsSCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdElkXS45MDA2N2RiOGFiMjE2NDNiODFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyQ29udGV4dCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlld3Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nJ1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBWaWV3UG9zdCgpIHtcclxuICBjb25zdCB1cGxvYWRJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwb3N0RGV0YWlscywgc2V0UG9zdERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgaXNMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0RWRpdFN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltZ1ZhbHVlLCBzZXRJbWdWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRDb250ZW50LCBzZXRDb21tZW50Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RlbXBWYWx1ZXMsIHNldFRlbXBWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGltYWdlOiAnJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEZFVENIX1BPU1RfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVDb21tZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRDb21tZW50Q29udGVudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFRlbXBWYWx1ZXMoey4uLnRlbXBWYWx1ZXMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2FkZENvbW1lbnQsIHsgbG9hZGluZ0NvbW1lbnQgfV0gPSB1c2VNdXRhdGlvbihBRERfQ09NTUVOVCwge1xyXG4gICAgdXBkYXRlKF8scmVzdWx0KSB7XHJcbiAgICAgIGxldCBjb21tZW50QXJyYXkgPSBwb3N0RGV0YWlscy5jb21tZW50cztcclxuICAgICAgbGV0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLmFkZENvbW1lbnQuaWQsXHJcbiAgICAgICAgY29udGVudDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jb250ZW50LFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jcmVhdGVkQXRcclxuICAgICAgfVxyXG4gICAgICBjb21tZW50QXJyYXkudW5zaGlmdChuZXdDb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudENvbnRlbnQoJycpO1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyh7Li4ucG9zdERldGFpbHMsIFsnY29tbWVudHMnXTogY29tbWVudEFycmF5fSk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSxcclxuICAgICAgY29udGVudDogY29tbWVudENvbnRlbnRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbdXBkYXRlUG9zdCwgeyBsb2FkaW5nVXBkYXRlIH1dID0gdXNlTXV0YXRpb24oVVBEQVRFX1BPU1QsIHtcclxuICAgIHVwZGF0ZShfLCByZXN1bHQpIHtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZDogdGVtcFZhbHVlcy5pZCxcclxuICAgICAgdGl0bGU6IHRlbXBWYWx1ZXMudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBWYWx1ZXMuY29udGVudCxcclxuICAgICAgaW1hZ2U6IGltZ1ZhbHVlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGxldCB0ZW1wT2JqZWN0ID0ge1xyXG4gICAgICBpZDogZGF0YS5wb3N0LmlkLFxyXG4gICAgICB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLFxyXG4gICAgICBjb250ZW50OiBkYXRhLnBvc3QuY29udGVudCxcclxuICAgICAgaW1hZ2U6IGRhdGEucG9zdC5pbWFnZVxyXG4gICAgfVxyXG4gICAgc2V0VGVtcFZhbHVlcyh0ZW1wT2JqZWN0KTtcclxuICAgIHNldEVkaXRTdGF0dXModHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW5jZWxFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIHZhciByZXMgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCBjaGFuZ2VzP1wiKTtcclxuICAgIGlmKHJlcyl7XHJcbiAgICAgIGxldCB0ZW1wT2JqZWN0ID0ge1xyXG4gICAgICAgIGlkOiBkYXRhLnBvc3QuaWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEucG9zdC50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBkYXRhLnBvc3QuY29udGVudCxcclxuICAgICAgfVxyXG4gICAgICBzZXRJbWdWYWx1ZShkYXRhLnBvc3QuaW1hZ2UpO1xyXG4gICAgICBzZXRUZW1wVmFsdWVzKHRlbXBPYmplY3QpO1xyXG4gICAgICBzZXRFZGl0U3RhdHVzKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNhdmVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVBvc3QoKTtcclxuICAgIHNldEVkaXRTdGF0dXMoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB1cGxvYWRJbWFnZS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWxlRGF0YVVSTCA9IGZpbGUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoZnIucmVzdWx0KTtcclxuICAgIGZyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICBmci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZihldmVudC50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICBmaWxlRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0SW1nVmFsdWUocmVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgc2V0UG9zdERldGFpbHMoZGF0YS5wb3N0KTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGlmKGxvYWRpbmcpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3cG9zdF9fbG9hZGluZ30+XHJcbiAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgeyBwb3N0RGV0YWlscyAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3cG9zdF9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICB7IHBvc3REZXRhaWxzLnRpdGxlID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX3RleHR9PkhPTUU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7Jm5ic3A7eycgPiAnfSZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7e3Bvc3REZXRhaWxzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fYm9keX0+XHJcbiAgICAgICAgICAgICAgeyBpc0xvZ2luID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keV9fYWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgeyBpc0VkaXRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmVFZGl0UG9zdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlIFBvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25fX3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxFZGl0UG9zdH1cclxuICAgICAgICAgICAgICAgICAgICA+Q2FuY2VsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOiA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5FZGl0IFBvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsgcG9zdERldGFpbHMgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3REZXRhaWxzLmNyZWF0ZWRBdCA/IGRhdGEucG9zdC5jcmVhdGVkQXQuc2xpY2UoMCwxMCkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIHsgIWlzRWRpdGluZyBcclxuICAgICAgICAgICAgICAgICAgPyA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fdGl0bGV9Pntwb3N0RGV0YWlscy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA6IDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZW1wVmFsdWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGV0YWlsc19fdGl0bGV9ICsgJHtzdHlsZXMuZGV0YWlsc19fdGl0bGVfX3RleHR9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7IGlzRWRpdGluZyBcclxuICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX191cGxvYWRfaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibXlmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dXBsb2FkSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nVmFsdWUgPyBpbWdWYWx1ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOihwb3N0RGV0YWlscy5pbWFnZSA/IHBvc3REZXRhaWxzLmltYWdlIDogXCIvaW1hZ2VzL2dpcmwucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ICFpc0VkaXRpbmdcclxuICAgICAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX2JvZHl9Pntwb3N0RGV0YWlscy5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA6IDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZW1wVmFsdWVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRldGFpbHNfX2JvZHl9ICsgJHtzdHlsZXMuZGV0YWlsc19fYm9keV9fdGV4dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19jb21tZW50c30+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX3RpdGxlfT5DT01NRU5UPC9oMj5cclxuICAgICAgICAgICAgICAgIHsgcG9zdERldGFpbHMuY29tbWVudHMgP1xyXG4gICAgICAgICAgICAgICAgICBwb3N0RGV0YWlscy5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX19jb250ZW50fT57Y29tbWVudC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbV9fZGF0ZX0+e2NvbW1lbnQuY3JlYXRlZEF0LnNsaWNlKDAsMTApfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX19pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgY29tbWVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb21tZW50Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9fdGV4dGFyZWF9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X19zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcclxuICByZXR1cm4ge3Byb3BzOiB7fX07XHJcbn1cclxuXHJcbmNvbnN0IEZFVENIX1BPU1RfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgUG9zdCgkcG9zdElkOiBJbnQhKXtcclxuICAgIHBvc3QoaWQ6ICRwb3N0SWQpIHtcclxuICAgICAgaWQgXHJcbiAgICAgIHRpdGxlIFxyXG4gICAgICBjb250ZW50IFxyXG4gICAgICBpbWFnZSBcclxuICAgICAgY3JlYXRlZEF0IFxyXG4gICAgICBjb21tZW50c3tcclxuICAgICAgICBpZCBjb250ZW50IGNyZWF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBVUERBVEVfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVQb3N0KFxyXG4gICAgJGlkOiBJbnQhXHJcbiAgICAkdGl0bGU6U3RyaW5nIVxyXG4gICAgJGNvbnRlbnQ6U3RyaW5nXHJcbiAgICAkaW1hZ2U6U3RyaW5nXHJcbiAgKXtcclxuICAgIHVwZGF0ZVBvc3QoXHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICBpZDogJGlkLFxyXG4gICAgICAgIHRpdGxlOiAkdGl0bGUsXHJcbiAgICAgICAgY29udGVudDogJGNvbnRlbnQsXHJcbiAgICAgICAgaW1hZ2U6ICRpbWFnZVx0XHJcbiAgICB9KVxyXG4gICAge1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBjb250ZW50IFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBjb21tZW50c3tcclxuICAgICAgICBpZCBjb250ZW50IGNyZWF0ZWRBdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBBRERfQ09NTUVOVCA9IGdxbGBcclxuICBtdXRhdGlvbiBhZGRDb21tZW50KFxyXG4gICAgJHBvc3RJZDogSW50IVxyXG4gICAgJGNvbnRlbnQ6IFN0cmluZyFcclxuICApe1xyXG4gICAgYWRkQ29tbWVudChcclxuICAgICAgcG9zdElkOiAkcG9zdElkLFxyXG4gICAgICBjb250ZW50OiAkY29udGVudFxyXG4gICAgKVxyXG4gICAge1xyXG4gICAgICBpZCBjcmVhdGVkQXQgY29udGVudFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9