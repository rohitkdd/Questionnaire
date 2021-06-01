function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-questions-and-answers></app-questions-and-answers>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/questions-and-answers/questions-and-answers.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions-and-answers/questions-and-answers.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuestionsAndAnswersQuestionsAndAnswersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Questionnaire</h2>\n\n    <form [formGroup]=\"questionnaireForm\">\n        <div formArrayName=\"questions\">\n            <div *ngFor=\"let question of questionItems.controls; let questionIndex=index;\"\n                [formGroupName]=\"questionIndex\">\n                <div class=\"questions-wrapper\">\n                    <span class=\"question-number\">Q{{questionIndex+1}}</span> <input formControlName=\"question\"\n                        placeholder=\"Type your question here\" />\n                    <button type=\"button\" (click)=\"removeQuestion(questionIndex)\">remove <strong>x</strong></button>\n                </div>\n                <div *ngIf=\"isFormSubmitted && question.controls.question.errors\">\n                    <div *ngIf=\"isFormSubmitted && question.controls.question.errors.required\" class=\"error\">\n                        Please enter a question.\n                    </div>\n                </div>\n                <div formArrayName=\"answers\" class=\"answers-wrapper\">\n                    <div class=\"answer\"\n                        *ngFor=\"let answer of question.controls.answers.controls; let answerIndex=index;\"\n                        [formGroupName]=\"answerIndex\">\n                        <span>{{answerIndex+1}}</span>\n                        <input formControlName=\"answer\" placeholder=\"Answer {{answerIndex + 1}}\" />\n\n                        <button type=\"button\" class=\"remove-btn\" (click)=\"removeAnswer(questionIndex, answerIndex)\"\n                            [disabled]=\"answerIndex === 0\"><strong>x</strong></button>\n                        <button type=\"button\" class=\"add-answer-btn\" (click)=\"addAnswer(questionIndex)\"\n                            *ngIf=\"answerIndex == question.controls.answers.controls.length-1\">Add\n                            +</button>\n                        <div *ngIf=\"isFormSubmitted && answer.controls.answer.errors\">\n                            <div *ngIf=\"isFormSubmitted && answer.controls.answer.errors.required\" class=\"error\">\n                                Please enter an answer.\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"add-answer-btn\" (click)=\"addAnswer(questionIndex)\"\n                        *ngIf=\"question.controls.answers.controls.length === 0\">Add Answer\n                        +</button>\n                </div>\n            </div>\n            <div class=\"add-question\"><button type=\"button\" (click)=\"addQuestion()\">Add Question + </button></div>\n        </div>\n\n        <footer>\n            <button type=\"submit\" (click)=\"submitQuestionnaire()\"\n                *ngIf=\"questionnaireForm.controls.questions.controls.length\">Submit</button>\n        </footer>\n\n    </form>\n\n    <div class=\"success-banner\" *ngIf=\"isFormValidated\">\n        <strong>Thanks for your response!</strong>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'questions-and-answers';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./questions-and-answers/questions-and-answers.component */
    "./src/app/questions-and-answers/questions-and-answers.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsAndAnswersComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/questions-and-answers/questions-and-answers.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/questions-and-answers/questions-and-answers.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuestionsAndAnswersQuestionsAndAnswersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button:disabled {\n  cursor: not-allowed;\n}\n\n.container {\n  margin: 0 50px;\n  color: gray;\n}\n\n.container .success-banner {\n  margin-top: 15px;\n  color: green;\n  background: lightgreen;\n  padding: 25px;\n  border-radius: 5px;\n}\n\n.container .error {\n  color: red;\n  font-weight: 500;\n  height: 20px;\n}\n\n.container .questions-wrapper {\n  display: flex;\n  width: 75%;\n  border: 2px solid darkgray;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.container .questions-wrapper .question-number {\n  color: #fff;\n  background-color: #cc0909;\n  padding: 10px;\n  height: auto;\n}\n\n.container .questions-wrapper input {\n  flex-grow: 1;\n  border: none;\n}\n\n.container .questions-wrapper button {\n  color: gray;\n  border: none;\n  background: transparent;\n}\n\n.container input {\n  padding-left: 15px;\n  font-family: inherit;\n  border: 2px solid lightgray;\n}\n\n.container input::-webkit-input-placeholder {\n  font-weight: 500;\n  color: lightgray;\n}\n\n.container input::-moz-placeholder {\n  font-weight: 500;\n  color: lightgray;\n}\n\n.container input::-ms-input-placeholder {\n  font-weight: 500;\n  color: lightgray;\n}\n\n.container input::placeholder {\n  font-weight: 500;\n  color: lightgray;\n}\n\n.container button {\n  font-family: inherit;\n}\n\n.container .answers-wrapper span {\n  padding-left: 15px;\n  padding-right: 12px;\n  display: inline-block;\n  width: 15px;\n  font-weight: 500;\n}\n\n.container .answers-wrapper .remove-btn {\n  border: none;\n  background: transparent;\n  color: gray;\n}\n\n.container .answers-wrapper .answer {\n  margin-top: 10px;\n}\n\n.container .answers-wrapper .answer .error {\n  margin-left: 40px;\n}\n\n.container .answers-wrapper .add-answer-btn {\n  border: none;\n  background-color: transparent;\n  color: gray;\n  font-size: 16px;\n  font-weight: 500;\n  margin-left: 10%;\n}\n\n.container .answers-wrapper .flex-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container .answers-wrapper input {\n  height: 35px;\n  width: 50%;\n}\n\n.container .add-question {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.container .add-question button {\n  width: 325px;\n  padding: 10px;\n  background: #cc0909;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.container footer {\n  text-align: right;\n  margin-top: 10px;\n}\n\n.container footer button {\n  width: 325px;\n  text-transform: uppercase;\n  padding: 10px;\n  background: #db920d;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zLWFuZC1hbnN3ZXJzL0Q6XFxST0hJVFxcUHJvamVjdHNcXHF1ZXN0aW9ucy1hbmQtYW5zd2Vycy9zcmNcXGFwcFxccXVlc3Rpb25zLWFuZC1hbnN3ZXJzXFxxdWVzdGlvbnMtYW5kLWFuc3dlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZXN0aW9ucy1hbmQtYW5zd2Vycy9xdWVzdGlvbnMtYW5kLWFuc3dlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNFSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQ0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURDUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ1o7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NaOztBREVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0FaOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDRlI7O0FESUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FESUk7RUFDSSxvQkFBQTtBQ0ZSOztBREtRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSFo7O0FETVE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDSlo7O0FET1E7RUFDSSxnQkFBQTtBQ0xaOztBRE9ZO0VBQ0ksaUJBQUE7QUNMaEI7O0FEU1E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNSWjs7QURXUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ1RaOztBRFlRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNWWjs7QURjSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNaUjs7QURhUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFo7O0FEZUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDYlI7O0FEZVE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiWiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy1hbmQtYW5zd2Vycy9xdWVzdGlvbnMtYW5kLWFuc3dlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcblxyXG4gICAgLnN1Y2Nlc3MtYmFubmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnF1ZXN0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBkYXJrZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC5xdWVzdGlvbi1udW1iZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDkwOTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAuYW5zd2Vycy13cmFwcGVyIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5yZW1vdmUtYnRuIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbnN3ZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5hZGQtYW5zd2VyLWJ0biB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hZGQtcXVlc3Rpb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjMDkwOTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RiOTIwZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgNTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5zdWNjZXNzLWJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5xdWVzdGlvbnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5xdWVzdGlvbnMtd3JhcHBlciAucXVlc3Rpb24tbnVtYmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzA5MDk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jb250YWluZXIgLnF1ZXN0aW9ucy13cmFwcGVyIGlucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udGFpbmVyIC5xdWVzdGlvbnMtd3JhcHBlciBidXR0b24ge1xuICBjb2xvcjogZ3JheTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jb250YWluZXIgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuLmNvbnRhaW5lciAuYW5zd2Vycy13cmFwcGVyIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29udGFpbmVyIC5hbnN3ZXJzLXdyYXBwZXIgLnJlbW92ZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmFuc3dlcnMtd3JhcHBlciAuYW5zd2VyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmFuc3dlcnMtd3JhcHBlciAuYW5zd2VyIC5lcnJvciB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmNvbnRhaW5lciAuYW5zd2Vycy13cmFwcGVyIC5hZGQtYW5zd2VyLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uY29udGFpbmVyIC5hbnN3ZXJzLXdyYXBwZXIgLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmFuc3dlcnMtd3JhcHBlciBpbnB1dCB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb250YWluZXIgLmFkZC1xdWVzdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmFkZC1xdWVzdGlvbiBidXR0b24ge1xuICB3aWR0aDogMzI1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNjYzA5MDk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29udGFpbmVyIGZvb3RlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciBmb290ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDMyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGI5MjBkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/questions-and-answers/questions-and-answers.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/questions-and-answers/questions-and-answers.component.ts ***!
    \**************************************************************************/

  /*! exports provided: QuestionsAndAnswersComponent */

  /***/
  function srcAppQuestionsAndAnswersQuestionsAndAnswersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsAndAnswersComponent", function () {
      return QuestionsAndAnswersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var QuestionsAndAnswersComponent = /*#__PURE__*/function () {
      function QuestionsAndAnswersComponent(formBuilder) {
        _classCallCheck(this, QuestionsAndAnswersComponent);

        this.formBuilder = formBuilder;
        this.isFormSubmitted = false;
        this.isFormValidated = false;
      }

      _createClass(QuestionsAndAnswersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeQuestionnaireForm();
        }
      }, {
        key: "initializeQuestionnaireForm",
        value: function initializeQuestionnaireForm() {
          this.questionnaireForm = this.formBuilder.group({
            questions: this.formBuilder.array([this.formBuilder.group({
              question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              answers: this.formBuilder.array([this.formBuilder.group({
                answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              })])
            })])
          });
        }
      }, {
        key: "questionItems",
        get: function get() {
          return this.questionnaireForm.get('questions');
        }
      }, {
        key: "addAnswer",
        value: function addAnswer(questionIndex) {
          this.questionItems.controls[questionIndex].get('answers').push(this.formBuilder.group({
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }));

          if (this.isFormSubmitted) {
            this.isFormSubmitted = false;
          }
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          this.questionItems.push(this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            answers: this.formBuilder.array([this.formBuilder.group({
              answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })])
          }));

          if (this.isFormSubmitted) {
            this.isFormSubmitted = false;
          }
        }
      }, {
        key: "removeQuestion",
        value: function removeQuestion(index) {
          this.questionItems.removeAt(index);

          if (this.isFormSubmitted) {
            this.isFormSubmitted = false;
          }
        }
      }, {
        key: "removeAnswer",
        value: function removeAnswer(questionIndex, answerIndex) {
          this.questionItems.controls[questionIndex].get('answers').removeAt(answerIndex);

          if (this.isFormSubmitted) {
            this.isFormSubmitted = false;
          }
        }
      }, {
        key: "submitQuestionnaire",
        value: function submitQuestionnaire() {
          var _this = this;

          this.isFormSubmitted = true;

          if (this.questionnaireForm.valid) {
            this.isFormValidated = true;
            this.initializeQuestionnaireForm();
            this.isFormSubmitted = false;
            setTimeout(function () {
              _this.isFormValidated = false;
            }, 3500);
          }
        }
      }]);

      return QuestionsAndAnswersComponent;
    }();

    QuestionsAndAnswersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    QuestionsAndAnswersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questions-and-answers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./questions-and-answers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/questions-and-answers/questions-and-answers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./questions-and-answers.component.scss */
      "./src/app/questions-and-answers/questions-and-answers.component.scss"))["default"]]
    })], QuestionsAndAnswersComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ROHIT\Projects\questions-and-answers\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map