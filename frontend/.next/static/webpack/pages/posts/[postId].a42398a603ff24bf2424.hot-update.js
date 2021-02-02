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
      setInterval(function () {
        console.log("TEST");
        setPostDetails(data.post);
      }, 5000);
    }
  }, [data]);

  if (loading) {
    return __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.viewpost__loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }));
  } else {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }
    }, postDetails && __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.viewpost__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }), postDetails.title ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content__text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }, "HOME")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 19
      }
    }, "\xA0\xA0", ' > ', "\xA0"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, "\xA0", postDetails.title))) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navigation__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, isLogin ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__action,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: saveEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, "Save Post"), __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: cancelEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    }, "Cancel")) : __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.action__text,
      onClick: handleEditPost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }
    }, "Edit Post")) : null, postDetails ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__date,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 19
      }
    }, postDetails.createdAt ? data.post.createdAt.slice(0, 10) : null), !isEditing ? __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
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
        lineNumber: 200,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    }, isEditing ? __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 23
      }
    }, __jsx("button", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__upload_image,
      onClick: handleImageUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
        lineNumber: 218,
        columnNumber: 25
      }
    })) : null, __jsx("img", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__image,
      src: imgValue ? imgValue : postDetails.image ? postDetails.image : "/images/girl.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 21
      }
    })), !isEditing ? __jsx("p", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.details__body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
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
        lineNumber: 236,
        columnNumber: 23
      }
    })) : null, __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body__comments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 15
      }
    }, __jsx("h2", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }
    }, "COMMENT"), postDetails.comments ? postDetails.comments.map(function (comment) {
      return __jsx("div", {
        key: comment.id,
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__item,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 23
        }
      }, __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item__content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }
      }, comment.content), __jsx("p", {
        className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.item__date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 25
        }
      }, comment.createdAt.slice(0, 10)));
    }) : null, __jsx("div", {
      className: _viewpost_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.comments__input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
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
        lineNumber: 262,
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
        lineNumber: 269,
        columnNumber: 19
      }
    }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanMiXSwibmFtZXMiOlsiVmlld1Bvc3QiLCJ1cGxvYWRJbWFnZSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwb3N0RGV0YWlscyIsInNldFBvc3REZXRhaWxzIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiaXNMb2dpbiIsImlzRWRpdGluZyIsInNldEVkaXRTdGF0dXMiLCJpbWdWYWx1ZSIsInNldEltZ1ZhbHVlIiwiY29tbWVudENvbnRlbnQiLCJzZXRDb21tZW50Q29udGVudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0ZW1wVmFsdWVzIiwic2V0VGVtcFZhbHVlcyIsInVzZVF1ZXJ5IiwiRkVUQ0hfUE9TVF9RVUVSWSIsInZhcmlhYmxlcyIsIk51bWJlciIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJoYW5kbGVDb21tZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmFtZSIsInVzZU11dGF0aW9uIiwiQUREX0NPTU1FTlQiLCJ1cGRhdGUiLCJfIiwicmVzdWx0IiwiY29tbWVudEFycmF5IiwiY29tbWVudHMiLCJuZXdDb21tZW50IiwiYWRkQ29tbWVudCIsImNyZWF0ZWRBdCIsInVuc2hpZnQiLCJvbkVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmdDb21tZW50IiwiVVBEQVRFX1BPU1QiLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZVBvc3QiLCJsb2FkaW5nVXBkYXRlIiwiaGFuZGxlRWRpdFBvc3QiLCJ0ZW1wT2JqZWN0IiwicG9zdCIsImNhbmNlbEVkaXRQb3N0IiwicmVzIiwiY29uZmlybSIsInNhdmVFZGl0UG9zdCIsImhhbmRsZUltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwiZmlsZURhdGFVUkwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZUltYWdlIiwiZmlsZXMiLCJ0aGVuIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJzdHlsZXMiLCJ2aWV3cG9zdF9fbG9hZGluZyIsInZpZXdwb3N0X19jb250YWluZXIiLCJuYXZpZ2F0aW9uX19oZWFkZXIiLCJuYXZpZ2F0aW9uX19jb250ZW50IiwiY29udGVudF9fdGV4dCIsIm5hdmlnYXRpb25fX2JvZHkiLCJib2R5X19hY3Rpb24iLCJhY3Rpb25fX2NvbnRhaW5lciIsImFjdGlvbl9fdGV4dCIsImJvZHlfX2RldGFpbHMiLCJkZXRhaWxzX19kYXRlIiwic2xpY2UiLCJkZXRhaWxzX190aXRsZSIsImRldGFpbHNfX3RpdGxlX190ZXh0IiwiZGV0YWlsc19fY29udGFpbmVyIiwiZGV0YWlsc19fIiwiZGV0YWlsc19fdXBsb2FkX2ltYWdlIiwiZGV0YWlsc19faW1hZ2UiLCJkZXRhaWxzX19ib2R5IiwiZGV0YWlsc19fYm9keV9fdGV4dCIsImJvZHlfX2NvbW1lbnRzIiwiY29tbWVudHNfX3RpdGxlIiwibWFwIiwiY29tbWVudCIsImNvbW1lbnRzX19pdGVtIiwiaXRlbV9fY29udGVudCIsIml0ZW1fX2RhdGUiLCJjb21tZW50c19faW5wdXQiLCJpbnB1dF9fdGV4dGFyZWEiLCJpbnB1dF9fc3VibWl0IiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Ms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QUFBQTtBQUFBO0FBQUEsTUE5SEYsQ0FERjtBQWtJRDtBQUNGOztHQTVRUWxILFE7VUFFUUksc0QsRUFja0JxQiw0RCxFQWNRYSwrRCxFQXFCREEsK0Q7OztLQW5EakN0QyxRO0FBa1JULElBQU0wQixnQkFBZ0IsR0FBR3lGLG1EQUFILG1CQUF0QjtBQWVBLElBQU03RCxXQUFXLEdBQUc2RCxtREFBSCxvQkFBakI7QUF5QkEsSUFBTTVFLFdBQVcsR0FBRzRFLG1EQUFILG9CQUFqQjs7QUFnQmVuSCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdElkXS5hNDIzOThhNjAzZmYyNGJmMjQyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyQ29udGV4dCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlld3Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nJ1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBWaWV3UG9zdCgpIHtcclxuICBjb25zdCB1cGxvYWRJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBvc3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwb3N0RGV0YWlscywgc2V0UG9zdERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgaXNMb2dpbiB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0RWRpdFN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltZ1ZhbHVlLCBzZXRJbWdWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnRDb250ZW50LCBzZXRDb21tZW50Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RlbXBWYWx1ZXMsIHNldFRlbXBWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGltYWdlOiAnJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEZFVENIX1BPU1RfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVDb21tZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRDb21tZW50Q29udGVudChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFRlbXBWYWx1ZXMoey4uLnRlbXBWYWx1ZXMsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2FkZENvbW1lbnQsIHsgbG9hZGluZ0NvbW1lbnQgfV0gPSB1c2VNdXRhdGlvbihBRERfQ09NTUVOVCwge1xyXG4gICAgdXBkYXRlKF8scmVzdWx0KSB7XHJcbiAgICAgIGxldCBjb21tZW50QXJyYXkgPSBwb3N0RGV0YWlscy5jb21tZW50cztcclxuICAgICAgbGV0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLmFkZENvbW1lbnQuaWQsXHJcbiAgICAgICAgY29udGVudDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jb250ZW50LFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmRhdGEuYWRkQ29tbWVudC5jcmVhdGVkQXRcclxuICAgICAgfVxyXG4gICAgICBjb21tZW50QXJyYXkudW5zaGlmdChuZXdDb21tZW50KTtcclxuICAgICAgc2V0Q29tbWVudENvbnRlbnQoJycpO1xyXG4gICAgICBzZXRQb3N0RGV0YWlscyh7Li4ucG9zdERldGFpbHMsIFsnY29tbWVudHMnXTogY29tbWVudEFycmF5fSk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgcG9zdElkOiBOdW1iZXIocG9zdElkKSxcclxuICAgICAgY29udGVudDogY29tbWVudENvbnRlbnRcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbdXBkYXRlUG9zdCwgeyBsb2FkaW5nVXBkYXRlIH1dID0gdXNlTXV0YXRpb24oVVBEQVRFX1BPU1QsIHtcclxuICAgIHVwZGF0ZShfLCByZXN1bHQpIHtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZDogdGVtcFZhbHVlcy5pZCxcclxuICAgICAgdGl0bGU6IHRlbXBWYWx1ZXMudGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBWYWx1ZXMuY29udGVudCxcclxuICAgICAgaW1hZ2U6IGltZ1ZhbHVlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdFBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGxldCB0ZW1wT2JqZWN0ID0ge1xyXG4gICAgICBpZDogZGF0YS5wb3N0LmlkLFxyXG4gICAgICB0aXRsZTogZGF0YS5wb3N0LnRpdGxlLFxyXG4gICAgICBjb250ZW50OiBkYXRhLnBvc3QuY29udGVudCxcclxuICAgICAgaW1hZ2U6IGRhdGEucG9zdC5pbWFnZVxyXG4gICAgfVxyXG4gICAgc2V0VGVtcFZhbHVlcyh0ZW1wT2JqZWN0KTtcclxuICAgIHNldEVkaXRTdGF0dXModHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW5jZWxFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIHZhciByZXMgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCBjaGFuZ2VzP1wiKTtcclxuICAgIGlmKHJlcyl7XHJcbiAgICAgIGxldCB0ZW1wT2JqZWN0ID0ge1xyXG4gICAgICAgIGlkOiBkYXRhLnBvc3QuaWQsXHJcbiAgICAgICAgdGl0bGU6IGRhdGEucG9zdC50aXRsZSxcclxuICAgICAgICBjb250ZW50OiBkYXRhLnBvc3QuY29udGVudCxcclxuICAgICAgfVxyXG4gICAgICBzZXRJbWdWYWx1ZShkYXRhLnBvc3QuaW1hZ2UpO1xyXG4gICAgICBzZXRUZW1wVmFsdWVzKHRlbXBPYmplY3QpO1xyXG4gICAgICBzZXRFZGl0U3RhdHVzKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNhdmVFZGl0UG9zdCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVBvc3QoKTtcclxuICAgIHNldEVkaXRTdGF0dXMoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB1cGxvYWRJbWFnZS5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWxlRGF0YVVSTCA9IGZpbGUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoZnIucmVzdWx0KTtcclxuICAgIGZyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICBmci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZihldmVudC50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICBmaWxlRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0SW1nVmFsdWUocmVzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxyXG4gICAgICAgIHNldFBvc3REZXRhaWxzKGRhdGEucG9zdCk7XHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYobG9hZGluZyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19sb2FkaW5nfT5cclxuICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7IHBvc3REZXRhaWxzICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdwb3N0X19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIHsgcG9zdERldGFpbHMudGl0bGUgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9faGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fdGV4dH0+SE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDsmbmJzcDt7JyA+ICd9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4mbmJzcDt7cG9zdERldGFpbHMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX19ib2R5fT5cclxuICAgICAgICAgICAgICB7IGlzTG9naW4gP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5X19hY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICB7IGlzRWRpdGluZyA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZUVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmUgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9fdGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRQb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgID5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX190ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdFBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPkVkaXQgUG9zdDwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2RldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19kYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdERldGFpbHMuY3JlYXRlZEF0ID8gZGF0YS5wb3N0LmNyZWF0ZWRBdC5zbGljZSgwLDEwKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgeyAhaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX190aXRsZX0+e3Bvc3REZXRhaWxzLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kZXRhaWxzX190aXRsZX0gKyAke3N0eWxlcy5kZXRhaWxzX190aXRsZV9fdGV4dH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNFZGl0aW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19ffT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHNfX3VwbG9hZF9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJteWZpbGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt1cGxvYWRJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19faW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdWYWx1ZSA/IGltZ1ZhbHVlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6KHBvc3REZXRhaWxzLmltYWdlID8gcG9zdERldGFpbHMuaW1hZ2UgOiBcIi9pbWFnZXMvZ2lybC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsgIWlzRWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc19fYm9keX0+e3Bvc3REZXRhaWxzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RlbXBWYWx1ZXMuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGV0YWlsc19fYm9keX0gKyAke3N0eWxlcy5kZXRhaWxzX19ib2R5X190ZXh0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlfX2NvbW1lbnRzfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19fdGl0bGV9PkNPTU1FTlQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgeyBwb3N0RGV0YWlscy5jb21tZW50cyA/XHJcbiAgICAgICAgICAgICAgICAgIHBvc3REZXRhaWxzLmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19faXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fX2NvbnRlbnR9Pntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtX19kYXRlfT57Y29tbWVudC5jcmVhdGVkQXQuc2xpY2UoMCwxMCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBjb21tZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvbW1lbnRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X190ZXh0YXJlYX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfX3N1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIHJldHVybiB7cHJvcHM6IHt9fTtcclxufVxyXG5cclxuY29uc3QgRkVUQ0hfUE9TVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBQb3N0KCRwb3N0SWQ6IEludCEpe1xyXG4gICAgcG9zdChpZDogJHBvc3RJZCkge1xyXG4gICAgICBpZCBcclxuICAgICAgdGl0bGUgXHJcbiAgICAgIGNvbnRlbnQgXHJcbiAgICAgIGltYWdlIFxyXG4gICAgICBjcmVhdGVkQXQgXHJcbiAgICAgIGNvbW1lbnRze1xyXG4gICAgICAgIGlkIGNvbnRlbnQgY3JlYXRlZEF0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFVQREFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoXHJcbiAgICAkaWQ6IEludCFcclxuICAgICR0aXRsZTpTdHJpbmchXHJcbiAgICAkY29udGVudDpTdHJpbmdcclxuICAgICRpbWFnZTpTdHJpbmdcclxuICApe1xyXG4gICAgdXBkYXRlUG9zdChcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIGlkOiAkaWQsXHJcbiAgICAgICAgdGl0bGU6ICR0aXRsZSxcclxuICAgICAgICBjb250ZW50OiAkY29udGVudCxcclxuICAgICAgICBpbWFnZTogJGltYWdlXHRcclxuICAgIH0pXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNvbnRlbnQgXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIGNvbW1lbnRze1xyXG4gICAgICAgIGlkIGNvbnRlbnQgY3JlYXRlZEF0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEFERF9DT01NRU5UID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFkZENvbW1lbnQoXHJcbiAgICAkcG9zdElkOiBJbnQhXHJcbiAgICAkY29udGVudDogU3RyaW5nIVxyXG4gICl7XHJcbiAgICBhZGRDb21tZW50KFxyXG4gICAgICBwb3N0SWQ6ICRwb3N0SWQsXHJcbiAgICAgIGNvbnRlbnQ6ICRjb250ZW50XHJcbiAgICApXHJcbiAgICB7XHJcbiAgICAgIGlkIGNyZWF0ZWRBdCBjb250ZW50XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld1Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=