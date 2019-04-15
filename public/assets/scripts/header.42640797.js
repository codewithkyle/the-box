(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModule_1 = __webpack_require__(21);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(el, uuid, manager) {
        var _this = _super.call(this, el, uuid, manager) || this;
        if (_this.isDebug) {
            console.log("Creating a new " + Header.MODULE_NAME + " module");
        }
        return _this;
    }
    Header.prototype.init = function () {
    };
    Header.prototype.destroy = function () {
        _super.prototype.destroy.call(this, Header.MODULE_NAME);
    };
    Header.MODULE_NAME = 'Header';
    return Header;
}(BaseModule_1.BaseModule));
exports.Header = Header;
modules[Header.MODULE_NAME] = Header;


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Env_1 = __webpack_require__(1);
var BaseModule = (function () {
    function BaseModule(el, uuid, manager) {
        this.el = el;
        this.uuid = uuid;
        this.manager = manager;
        this.isDebug = Env_1.Env.isDebug;
        this.el.dataset.uuid = this.uuid;
    }
    BaseModule.prototype.init = function () { };
    BaseModule.prototype.destroy = function (MODULE_NAME) {
        this.el.removeAttribute('data-uuid');
    };
    return BaseModule;
}());
exports.BaseModule = BaseModule;


/***/ })

},[[20,0,2]]]);