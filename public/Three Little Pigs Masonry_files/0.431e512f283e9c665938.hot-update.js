webpackHotUpdate(0,{

/***/ 1542:
/* exports provided: default */
/* exports used: default */
/*!*******************************************************!*\
  !*** ./src/components/FrontEnd/SortableImageList.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_anything_sortable_sortable_css__ = __webpack_require__(/*! react-anything-sortable/sortable.css */ 1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_anything_sortable_sortable_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_anything_sortable_sortable_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SortableItem__ = __webpack_require__(/*! ./SortableItem */ 1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_anything_sortable__ = __webpack_require__(/*! react-anything-sortable */ 1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_anything_sortable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_anything_sortable__);
var _jsxFileName = '/Users/johnfritz/Documents/prod/tlpreact/src/components/FrontEnd/SortableImageList.jsx',
    _this = this;





var images = [1, 2, 3, 4, 5];

var SortableImage = function SortableImage(_ref) {
  var photos = _ref.photos;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_anything_sortable___default.a,
      { onSort: function onSort(item) {
          return console.log(item);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: _this
      },
      photos.map(function (item, index) {
        console.log(item);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SortableItem__["a" /* default */], { src: item.original, sortData: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: _this
        });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SortableImage);

/***/ })

})
//# sourceMappingURL=0.431e512f283e9c665938.hot-update.js.map