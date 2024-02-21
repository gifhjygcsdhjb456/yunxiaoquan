"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/main.js?{"page":"pages%2Funi-agree%2Funi-agree"} ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/uni-agree/uni-agree.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/uni-agree/uni-agree'\n        _pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_uni_agree_uni_agree_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBc0U7QUFDdEUsUUFBUSxtRkFBRztBQUNYLFFBQVEsbUZBQUc7QUFDWCxRQUFRLG1GQUFHO0FBQ1gsZ0JBQWdCLG1GQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy91bmktYWdyZWUvdW5pLWFncmVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3VuaS1hZ3JlZS91bmktYWdyZWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/笔记/微信小程序/SpamNote/App.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('static/fonts/iconfont.woff2?t=1708265180903') format('woff2'),\r\n\t\turl('static/fonts/iconfont.woff?t=1708265180903') format('woff'),\r\n\t\turl('static/fonts/iconfont.ttf?t=1708265180903') format('truetype')"
    }
  ],
  ".iconfont": {
    "": {
      "fontFamily": [
        "\"iconfont\"",
        1,
        0,
        19
      ],
      "fontSize": [
        "16",
        0,
        0,
        19
      ],
      "fontStyle": [
        "normal",
        0,
        0,
        19
      ],
      "WebkitFontSmoothing": [
        "antialiased",
        0,
        0,
        19
      ],
      "MozOsxFontSmoothing": [
        "grayscale",
        0,
        0,
        19
      ]
    }
  },
  ".icon-jubao-": {
    "": {
      "content:before": [
        "\"\\e638\"",
        0,
        0,
        20
      ]
    }
  },
  ".icon-jichulanjieshezhi": {
    "": {
      "content:before": [
        "\"\\e61f\"",
        0,
        0,
        21
      ]
    }
  },
  ".icon-fankuiyijianfankui-xianxing": {
    "": {
      "content:before": [
        "\"\\e797\"",
        0,
        0,
        22
      ]
    }
  },
  ".icon-baimingdan": {
    "": {
      "content:before": [
        "\"\\e693\"",
        0,
        0,
        23
      ]
    }
  },
  ".icon-kttx": {
    "": {
      "content:before": [
        "\"\\e611\"",
        0,
        0,
        24
      ]
    }
  },
  ".icon-guankongjilu": {
    "": {
      "content:before": [
        "\"\\e61b\"",
        0,
        0,
        25
      ]
    }
  },
  ".icon-lanjiejilu": {
    "": {
      "content:before": [
        "\"\\e67c\"",
        0,
        0,
        26
      ]
    }
  },
  ".u-line-1": {
    "": {
      "lines": [
        1,
        0,
        0,
        27
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        27
      ],
      "overflow": [
        "hidden",
        0,
        0,
        27
      ],
      "flex": [
        1,
        0,
        0,
        27
      ]
    }
  },
  ".u-line-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        28
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        28
      ],
      "overflow": [
        "hidden",
        0,
        0,
        28
      ],
      "flex": [
        1,
        0,
        0,
        28
      ]
    }
  },
  ".u-line-3": {
    "": {
      "lines": [
        3,
        0,
        0,
        29
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        29
      ],
      "overflow": [
        "hidden",
        0,
        0,
        29
      ],
      "flex": [
        1,
        0,
        0,
        29
      ]
    }
  },
  ".u-line-4": {
    "": {
      "lines": [
        4,
        0,
        0,
        30
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        30
      ],
      "overflow": [
        "hidden",
        0,
        0,
        30
      ],
      "flex": [
        1,
        0,
        0,
        30
      ]
    }
  },
  ".u-line-5": {
    "": {
      "lines": [
        5,
        0,
        0,
        31
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        31
      ],
      "overflow": [
        "hidden",
        0,
        0,
        31
      ],
      "flex": [
        1,
        0,
        0,
        31
      ]
    }
  },
  ".u-border": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        32
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        32
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        32
      ]
    }
  },
  ".u-border-top": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        33
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        33
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        33
      ]
    }
  },
  ".u-border-left": {
    "": {
      "borderLeftWidth": [
        "0.5",
        1,
        0,
        34
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        34
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        34
      ]
    }
  },
  ".u-border-right": {
    "": {
      "borderRightWidth": [
        "0.5",
        1,
        0,
        35
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        35
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        35
      ]
    }
  },
  ".u-border-bottom": {
    "": {
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        36
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        36
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        36
      ]
    }
  },
  ".u-border-top-bottom": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        37
      ],
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        37
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        37
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        37
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        37
      ]
    }
  },
  ".u-reset-button": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        38
      ],
      "paddingRight": [
        0,
        0,
        0,
        38
      ],
      "paddingBottom": [
        0,
        0,
        0,
        38
      ],
      "paddingLeft": [
        0,
        0,
        0,
        38
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        38
      ],
      "borderWidth": [
        0,
        0,
        0,
        38
      ]
    }
  },
  ".u-hover-class": {
    "": {
      "opacity": [
        0.7,
        0,
        0,
        39
      ]
    }
  },
  ".u-primary-light": {
    "": {
      "color": [
        "#ecf5ff",
        0,
        0,
        40
      ]
    }
  },
  ".u-warning-light": {
    "": {
      "color": [
        "#fdf6ec",
        0,
        0,
        41
      ]
    }
  },
  ".u-success-light": {
    "": {
      "color": [
        "#f5fff0",
        0,
        0,
        42
      ]
    }
  },
  ".u-error-light": {
    "": {
      "color": [
        "#fef0f0",
        0,
        0,
        43
      ]
    }
  },
  ".u-info-light": {
    "": {
      "color": [
        "#f4f4f5",
        0,
        0,
        44
      ]
    }
  },
  ".u-primary-light-bg": {
    "": {
      "backgroundColor": [
        "#ecf5ff",
        0,
        0,
        45
      ]
    }
  },
  ".u-warning-light-bg": {
    "": {
      "backgroundColor": [
        "#fdf6ec",
        0,
        0,
        46
      ]
    }
  },
  ".u-success-light-bg": {
    "": {
      "backgroundColor": [
        "#f5fff0",
        0,
        0,
        47
      ]
    }
  },
  ".u-error-light-bg": {
    "": {
      "backgroundColor": [
        "#fef0f0",
        0,
        0,
        48
      ]
    }
  },
  ".u-info-light-bg": {
    "": {
      "backgroundColor": [
        "#f4f4f5",
        0,
        0,
        49
      ]
    }
  },
  ".u-primary-dark": {
    "": {
      "color": [
        "#398ade",
        0,
        0,
        50
      ]
    }
  },
  ".u-warning-dark": {
    "": {
      "color": [
        "#f1a532",
        0,
        0,
        51
      ]
    }
  },
  ".u-success-dark": {
    "": {
      "color": [
        "#53c21d",
        0,
        0,
        52
      ]
    }
  },
  ".u-error-dark": {
    "": {
      "color": [
        "#e45656",
        0,
        0,
        53
      ]
    }
  },
  ".u-info-dark": {
    "": {
      "color": [
        "#767a82",
        0,
        0,
        54
      ]
    }
  },
  ".u-primary-dark-bg": {
    "": {
      "backgroundColor": [
        "#398ade",
        0,
        0,
        55
      ]
    }
  },
  ".u-warning-dark-bg": {
    "": {
      "backgroundColor": [
        "#f1a532",
        0,
        0,
        56
      ]
    }
  },
  ".u-success-dark-bg": {
    "": {
      "backgroundColor": [
        "#53c21d",
        0,
        0,
        57
      ]
    }
  },
  ".u-error-dark-bg": {
    "": {
      "backgroundColor": [
        "#e45656",
        0,
        0,
        58
      ]
    }
  },
  ".u-info-dark-bg": {
    "": {
      "backgroundColor": [
        "#767a82",
        0,
        0,
        59
      ]
    }
  },
  ".u-primary-disabled": {
    "": {
      "color": [
        "#9acafc",
        0,
        0,
        60
      ]
    }
  },
  ".u-warning-disabled": {
    "": {
      "color": [
        "#f9d39b",
        0,
        0,
        61
      ]
    }
  },
  ".u-success-disabled": {
    "": {
      "color": [
        "#a9e08f",
        0,
        0,
        62
      ]
    }
  },
  ".u-error-disabled": {
    "": {
      "color": [
        "#f7b2b2",
        0,
        0,
        63
      ]
    }
  },
  ".u-info-disabled": {
    "": {
      "color": [
        "#c4c6c9",
        0,
        0,
        64
      ]
    }
  },
  ".u-primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        65
      ]
    }
  },
  ".u-warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        66
      ]
    }
  },
  ".u-success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        67
      ]
    }
  },
  ".u-error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        68
      ]
    }
  },
  ".u-info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        69
      ]
    }
  },
  ".u-primary-bg": {
    "": {
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        70
      ]
    }
  },
  ".u-warning-bg": {
    "": {
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        71
      ]
    }
  },
  ".u-success-bg": {
    "": {
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        72
      ]
    }
  },
  ".u-error-bg": {
    "": {
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        73
      ]
    }
  },
  ".u-info-bg": {
    "": {
      "backgroundColor": [
        "#909399",
        0,
        0,
        74
      ]
    }
  },
  ".u-main-color": {
    "": {
      "color": [
        "#303133",
        0,
        0,
        75
      ]
    }
  },
  ".u-content-color": {
    "": {
      "color": [
        "#606266",
        0,
        0,
        76
      ]
    }
  },
  ".u-tips-color": {
    "": {
      "color": [
        "#909193",
        0,
        0,
        77
      ]
    }
  },
  ".u-light-color": {
    "": {
      "color": [
        "#c0c4cc",
        0,
        0,
        78
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!***********************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 6);\n/* harmony import */ var _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"b6c83f5e\",\n  false,\n  _uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/uni-agree/uni-agree.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQzBLO0FBQzFLLGdCQUFnQixtTEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktYWdyZWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2NiZjI4OCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1hZ3JlZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcbGxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJiNmM4M2Y1ZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy91bmktYWdyZWUvdW5pLWFncmVlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_template_id_53cbf288_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=template&id=53cbf288&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c("view", { staticClass: ["page"] }, [
        _c("view", [
          _c(
            "u-text",
            {
              staticClass: ["title"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("个人信息保护指引")]
          ),
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("1.在浏览使用时，我们会收集、使用设备标识信息用于推荐。")]
          ),
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [
              _vm._v(
                "2.我们可能会申请位置权限，用于演示 uni-app 的地图、定位能力。"
              ),
            ]
          ),
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("3.你可以查看完整版")]
          ),
        ]),
        _c("view", { staticClass: ["text-item", "flex-r"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openprotocol },
            },
            [_vm._v("《用户协议》")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("和")]
          ),
          _c(
            "u-text",
            {
              staticClass: ["tl", "hl"],
              appendAsTree: true,
              attrs: { append: "tree" },
              on: { click: _vm.openPrivacyPolicy },
            },
            [_vm._v("《隐私政策》")]
          ),
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["tl"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [
              _vm._v(
                "以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。"
              ),
            ]
          ),
        ]),
        _c("view", { staticClass: ["text-item"] }, [
          _c(
            "u-text",
            {
              staticClass: ["service"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("如果你同意请点击下面的按钮以接受我们的服务")]
          ),
        ]),
        _c(
          "view",
          { staticClass: ["text-item", "confirm"] },
          [
            _c(
              "button",
              {
                staticClass: ["btn-privacy"],
                attrs: { type: "primary" },
                on: { click: _vm.agree },
              },
              [_vm._v("同意")]
            ),
            _c(
              "button",
              {
                staticClass: ["btn-privacy", "btn-disagree"],
                on: { click: _vm.disagree },
              },
              [_vm._v("暂不使用")]
            ),
          ],
          1
        ),
        _c("view", { staticClass: ["exit-area"] }),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!***********************************************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtjLENBQWdCLDJlQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcbGxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXGxsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXGxsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktYWdyZWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGxsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxsbGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxsbGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWFncmVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 10);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _uniStarterConfig = _interopRequireDefault(__webpack_require__(/*! @/uni-starter.config.js */ 11));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar about = _uniStarterConfig.default.about;\nvar _default = {\n  data: function data() {\n    return {};\n  },\n  onLoad: function onLoad() {\n    this._canBack = false;\n  },\n  onBackPress: function onBackPress() {\n    return !this._canBack;\n  },\n  methods: {\n    openprotocol: function openprotocol(e) {\n      uni.navigateTo({\n        url: \"/uni_modules/uni-id-pages/pages/common/webview/webview?url=\" + about.agreements[0].url\n      });\n    },\n    openPrivacyPolicy: function openPrivacyPolicy(e) {\n      uni.navigateTo({\n        url: \"/uni_modules/uni-id-pages/pages/common/webview/webview?url=\" + about.agreements[1].url\n      });\n    },\n    agree: function agree(e) {\n      var saveStatus = uni.setStorageSync(\"userprotocol\", 1);\n      this._canBack = true;\n      setTimeout(function () {\n        uni.navigateBack({\n          animationDuration: 0\n        });\n      }, 100);\n    },\n    disagree: function disagree() {\n      plus.runtime.quit();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdW5pLWFncmVlL3VuaS1hZ3JlZS5udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJvbkxvYWQiLCJvbkJhY2tQcmVzcyIsIm1ldGhvZHMiLCJvcGVucHJvdG9jb2wiLCJ1bmkiLCJ1cmwiLCJvcGVuUHJpdmFjeVBvbGljeSIsImFncmVlIiwic2V0VGltZW91dCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiZGlzYWdyZWUiLCJwbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBb0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0EsUUFDQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0FGO1FBQ0FDO01BQ0E7SUFDQTtJQUNBRTtNQUNBO01BQ0E7TUFDQUM7UUFDQUo7VUFDQUs7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFFQUM7SUFlQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7kuKrkurrkv6Hmga/kv53miqTmjIflvJU8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGxcIj4xLuWcqOa1j+iniOS9v+eUqOaXtu+8jOaIkeS7rOS8muaUtumbhuOAgeS9v+eUqOiuvuWkh+agh+ivhuS/oeaBr+eUqOS6juaOqOiNkOOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPjIu5oiR5Lus5Y+v6IO95Lya55Sz6K+35L2N572u5p2D6ZmQ77yM55So5LqO5ryU56S6IHVuaS1hcHAg55qE5Zyw5Zu+44CB5a6a5L2N6IO95Yqb44CCPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+My7kvaDlj6/ku6Xmn6XnnIvlrozmlbTniYg8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1pdGVtIGZsZXgtclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsIGhsXCIgQGNsaWNrPVwib3BlbnByb3RvY29sXCI+44CK55So5oi35Y2P6K6u44CLPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRsXCI+IOWSjCA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGwgaGxcIiBAY2xpY2s9XCJvcGVuUHJpdmFjeVBvbGljeVwiPuOAiumakOengeaUv+etluOAizwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0bFwiPuS7peS+v+S6huino+aIkeS7rOaUtumbhuOAgeS9v+eUqOOAgeWFseS6q+OAgeWtmOWCqOS/oeaBr+eahOaDheWGte+8jOS7peWPiuWvueS/oeaBr+eahOS/neaKpOaOquaWveOAgjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzZXJ2aWNlXCI+5aaC5p6c5L2g5ZCM5oSP6K+354K55Ye75LiL6Z2i55qE5oyJ6ZKu5Lul5o6l5Y+X5oiR5Lus55qE5pyN5YqhPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInRleHQtaXRlbSBjb25maXJtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJpdmFjeVwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWdyZWVcIj7lkIzmhI88L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1wcml2YWN5IGJ0bi1kaXNhZ3JlZVwiIEBjbGljaz1cImRpc2FncmVlXCI+5pqC5LiN5L2/55SoPC9idXR0b24+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZXhpdC1hcmVhXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC91bmktc3RhcnRlci5jb25maWcuanMnO1xuY29uc3QgeyBhYm91dCB9ID0gY29uZmlnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5CYWNrID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJhY2tQcmVzcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9jYW5CYWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVucHJvdG9jb2woZSkge1xyXG4gICAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvdW5pX21vZHVsZXMvdW5pLWlkLXBhZ2VzL3BhZ2VzL2NvbW1vbi93ZWJ2aWV3L3dlYnZpZXc/dXJsPVwiK2Fib3V0LmFncmVlbWVudHNbMF0udXJsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHRcdG9wZW5Qcml2YWN5UG9saWN5KGUpIHtcclxuXHRcdFx0XHRcdCB1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdCAgdXJsOiBcIi91bmlfbW9kdWxlcy91bmktaWQtcGFnZXMvcGFnZXMvY29tbW9uL3dlYnZpZXcvd2Vidmlldz91cmw9XCIrYWJvdXQuYWdyZWVtZW50c1sxXS51cmxcclxuXHRcdFx0XHRcdCB9KVxyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgICAgIGFncmVlKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzYXZlU3RhdHVzID0gdW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlcnByb3RvY29sXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuQmFjayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzYWdyZWUoKSB7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUucXVpdCgpO1xuXHRcdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0Y29udGVudDogJ+ehruWumumAgOWHuuacrOW6lOeUqO+8nycsXG5cdFx0XHRcdFx0XHRjYW5jZWxUZXh0Olwi6YCA5Ye6XCIsXG5cdFx0XHRcdFx0XHRjb25maXJtVGV4dDpcIuWPlua2iFwiLFxuXHRcdFx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYoIWUuY29uZmlybSl7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWY9XCJhYm91dDpibGFua1wiO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLnBhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHggMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGwge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3QUZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29uZmlybSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcml2YWN5IHtcclxuICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kaXNhZ3JlZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/*!**************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/uni-starter.config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//这是应用的配置页面，App.vue挂载到getApp().globalData.config\nvar _default = {\n  \"h5\": {\n    \"url\": \"https://uni-starter.dcloud.net.cn\",\n    //\t前端网页托管的域名\t\n    // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改\t\n    \"openApp\": {//如不需要本功能直接移除本节点即可\t\n      // //点击悬浮下载栏后打开的网页链接\n      // \"openUrl\": '/#/pages/ucenter/invite/invite',\n      // //左侧显示的应用名称\t\n      // \"appname\": 'uni-starter',\n      // //应用的图标\t\n      // \"logo\": './static/logo.png',\n    }\n  },\n  \"mp\": {\n    \"weixin\": {\n      //微信小程序原始id，微信小程序分享时\n      \"id\": \"\"\n    }\n  },\n  //关于应用\n  \"about\": {\n    //应用名称\n    \"appName\": \"uni-starter\",\n    //应用logo\n    \"logo\": \"/static/logo.png\",\n    //公司名称\n    \"company\": \"北京xx网络技术有限公司\",\n    //口号\n    \"slogan\": \"云端一体应用快速开发模版\",\n    //应用的链接，用于分享到第三方平台和生成关于我们页的二维码\n    \"download\": \"https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8\",\n    //version\n    \"version\": \"1.0.0\" //用于非app端显示，app端自动获取\n  },\n\n  \"download\": {\n    //用于生成二合一下载页面\n    \"ios\": \"https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8\",\n    \"android\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-97fca9f2-41f6-449f-a35e-3f135d4c3875/6d754387-a6c3-48ed-8ad2-e8f39b40fc01.apk\"\n  },\n  //用于打开应用市场评分界面\n  \"marketId\": {\n    \"ios\": \"\",\n    \"android\": \"\"\n  },\n  //配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称\n  \"i18n\": {\n    \"enable\": false //默认关闭，国际化。如果你想使用国际化相关功能，请改为true\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLXN0YXJ0ZXIuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUEsZUFDZTtFQUNkLElBQUksRUFBRTtJQUNMLEtBQUssRUFBRSxtQ0FBbUM7SUFBRTtJQUMzQztJQUNELFNBQVMsRUFBRSxDQUFFO01BQ1o7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQUE7RUFFRixDQUFDO0VBQ0QsSUFBSSxFQUFFO0lBQ0wsUUFBUSxFQUFFO01BQ1Q7TUFDQSxJQUFJLEVBQUU7SUFDUDtFQUNELENBQUM7RUFDRDtFQUNBLE9BQU8sRUFBRTtJQUNSO0lBQ0EsU0FBUyxFQUFFLGFBQWE7SUFDeEI7SUFDQSxNQUFNLEVBQUUsa0JBQWtCO0lBQzFCO0lBQ0EsU0FBUyxFQUFFLGNBQWM7SUFDekI7SUFDQSxRQUFRLEVBQUUsY0FBYztJQUN4QjtJQUNBLFVBQVUsRUFBRSxpRUFBaUU7SUFDN0U7SUFDQSxTQUFTLEVBQUMsT0FBTyxDQUFDO0VBQ25CLENBQUM7O0VBQ0QsVUFBVSxFQUFDO0lBQUU7SUFDWixLQUFLLEVBQUMsaUVBQWlFO0lBQ3ZFLFNBQVMsRUFBQztFQUNYLENBQUM7RUFDRDtFQUNBLFVBQVUsRUFBQztJQUNWLEtBQUssRUFBQyxFQUFFO0lBQ1IsU0FBUyxFQUFDO0VBQ1gsQ0FBQztFQUNEO0VBQ0EsTUFBTSxFQUFDO0lBQ04sUUFBUSxFQUFDLEtBQUssQ0FBQztFQUNoQjtBQUNELENBQUM7QUFBQSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6L+Z5piv5bqU55So55qE6YWN572u6aG16Z2i77yMQXBwLnZ1ZeaMgui9veWIsGdldEFwcCgpLmdsb2JhbERhdGEuY29uZmlnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRcImg1XCI6IHtcclxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly91bmktc3RhcnRlci5kY2xvdWQubmV0LmNuXCIsIC8vXHTliY3nq6/nvZHpobXmiZjnrqHnmoTln5/lkI1cdFxyXG5cdFx0IC8vIOWcqGg156uv5YWo5bGA5oKs5rWu5byV5a+855So5oi35LiL6L29YXBw55qE5Yqf6IO9IOabtOWkmuiHquWumuS5ieimgeaxguWcqC9jb21tb24vb3BlbkFwcC5qc+S4reS/ruaUuVx0XHJcblx0XHRcIm9wZW5BcHBcIjogeyAvL+WmguS4jemcgOimgeacrOWKn+iDveebtOaOpeenu+mZpOacrOiKgueCueWNs+WPr1x0XHJcblx0XHRcdC8vIC8v54K55Ye75oKs5rWu5LiL6L295qCP5ZCO5omT5byA55qE572R6aG16ZO+5o6lXHJcblx0XHRcdC8vIFwib3BlblVybFwiOiAnLyMvcGFnZXMvdWNlbnRlci9pbnZpdGUvaW52aXRlJyxcclxuXHRcdFx0Ly8gLy/lt6bkvqfmmL7npLrnmoTlupTnlKjlkI3np7BcdFxyXG5cdFx0XHQvLyBcImFwcG5hbWVcIjogJ3VuaS1zdGFydGVyJyxcclxuXHRcdFx0Ly8gLy/lupTnlKjnmoTlm77moIdcdFxyXG5cdFx0XHQvLyBcImxvZ29cIjogJy4vc3RhdGljL2xvZ28ucG5nJyxcclxuXHRcdH1cclxuXHR9LFxyXG5cdFwibXBcIjoge1xyXG5cdFx0XCJ3ZWl4aW5cIjoge1xyXG5cdFx0XHQvL+W+ruS/oeWwj+eoi+W6j+WOn+Wni2lk77yM5b6u5L+h5bCP56iL5bqP5YiG5Lqr5pe2XHJcblx0XHRcdFwiaWRcIjogXCJcIlxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly/lhbPkuo7lupTnlKhcclxuXHRcImFib3V0XCI6IHtcclxuXHRcdC8v5bqU55So5ZCN56ewXHJcblx0XHRcImFwcE5hbWVcIjogXCJ1bmktc3RhcnRlclwiLFxyXG5cdFx0Ly/lupTnlKhsb2dvXHJcblx0XHRcImxvZ29cIjogXCIvc3RhdGljL2xvZ28ucG5nXCIsXHJcblx0XHQvL+WFrOWPuOWQjeensFxyXG5cdFx0XCJjb21wYW55XCI6IFwi5YyX5LqseHjnvZHnu5zmioDmnK/mnInpmZDlhazlj7hcIixcclxuXHRcdC8v5Y+j5Y+3XHJcblx0XHRcInNsb2dhblwiOiBcIuS6keerr+S4gOS9k+W6lOeUqOW/q+mAn+W8gOWPkeaooeeJiFwiLFxyXG5cdFx0Ly/lupTnlKjnmoTpk77mjqXvvIznlKjkuo7liIbkuqvliLDnrKzkuInmlrnlubPlj7DlkoznlJ/miJDlhbPkuo7miJHku6zpobXnmoTkuoznu7TnoIFcclxuXHRcdFwiZG93bmxvYWRcIjogXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vY24vYXBwL2hlbGxvLXVuaS1hcHAvaWQxNDE3MDc4MjUzP210PThcIixcclxuXHRcdC8vdmVyc2lvblxyXG5cdFx0XCJ2ZXJzaW9uXCI6XCIxLjAuMFwiIC8v55So5LqO6Z2eYXBw56uv5pi+56S677yMYXBw56uv6Ieq5Yqo6I635Y+WXHJcblx0fSxcclxuXHRcImRvd25sb2FkXCI6eyAvL+eUqOS6jueUn+aIkOS6jOWQiOS4gOS4i+i9vemhtemdolxyXG5cdFx0XCJpb3NcIjpcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9jbi9hcHAvaGVsbG8tdW5pLWFwcC9pZDE0MTcwNzgyNTM/bXQ9OFwiLFxyXG5cdFx0XCJhbmRyb2lkXCI6XCJodHRwczovL3ZrY2V5dWd1LmNkbi5ic3BhcHAuY29tL1ZLQ0VZVUdVLTk3ZmNhOWYyLTQxZjYtNDQ5Zi1hMzVlLTNmMTM1ZDRjMzg3NS82ZDc1NDM4Ny1hNmMzLTQ4ZWQtOGFkMi1lOGYzOWI0MGZjMDEuYXBrXCJcclxuXHR9LFxyXG5cdC8v55So5LqO5omT5byA5bqU55So5biC5Zy66K+E5YiG55WM6Z2iXHJcblx0XCJtYXJrZXRJZFwiOntcclxuXHRcdFwiaW9zXCI6XCJcIixcclxuXHRcdFwiYW5kcm9pZFwiOlwiXCJcclxuXHR9LFxyXG5cdC8v6YWN572u5aSa6K+t6KiA5Zu96ZmF5YyW44CCaTE4buS4uuiLseaWh+WNleivjSBpbnRlcm5hdGlvbmFsaXphdGlvbueahOmmluacq+Wtl+espmnlkoxu77yMMTjkuLrkuK3pl7TnmoTlrZfnrKbmlbAg5piv4oCc5Zu96ZmF5YyW4oCd55qE566A56ewXHJcblx0XCJpMThuXCI6e1xyXG5cdFx0XCJlbmFibGVcIjpmYWxzZSAvL+m7mOiupOWFs+mXre+8jOWbvemZheWMluOAguWmguaenOS9oOaDs+S9v+eUqOWbvemZheWMluebuOWFs+WKn+iDve+8jOivt+aUueS4unRydWVcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************************************************************!*\
  !*** E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13);
/* harmony import */ var _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_lll_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_agree_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/笔记/微信小程序/SpamNote/pages/uni-agree/uni-agree.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "paddingTop": [
        "80",
        0,
        0,
        0
      ],
      "paddingRight": [
        "30",
        0,
        0,
        0
      ],
      "paddingBottom": [
        "80",
        0,
        0,
        0
      ],
      "paddingLeft": [
        "30",
        0,
        0,
        0
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "18",
        0,
        0,
        1
      ],
      "lineHeight": [
        "30",
        0,
        0,
        1
      ],
      "marginBottom": [
        "20",
        0,
        0,
        1
      ]
    }
  },
  ".flex-r": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        2
      ]
    }
  },
  ".text-item": {
    "": {
      "marginBottom": [
        "5",
        0,
        0,
        3
      ]
    }
  },
  ".tl": {
    "": {
      "fontSize": [
        "14",
        0,
        0,
        4
      ],
      "lineHeight": [
        "20",
        0,
        0,
        4
      ]
    }
  },
  ".hl": {
    "": {
      "color": [
        "#007AFF",
        0,
        0,
        5
      ]
    }
  },
  ".service": {
    "": {
      "fontSize": [
        "16",
        0,
        0,
        6
      ],
      "lineHeight": [
        "20",
        0,
        0,
        6
      ],
      "marginTop": [
        "20",
        0,
        0,
        6
      ]
    }
  },
  ".confirm": {
    "": {
      "marginTop": [
        "50",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        7
      ]
    }
  },
  ".btn-privacy": {
    "": {
      "flex": [
        1,
        0,
        0,
        8
      ]
    }
  },
  ".btn-disagree": {
    "": {
      "marginLeft": [
        "20",
        0,
        0,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);