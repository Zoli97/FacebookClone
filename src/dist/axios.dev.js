"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//this is the base url for any req that i made , ex once i deploy it all i need to do si change the url
var instance = _axios["default"].create({
  baseURL: "http://localhost:7000/"
});

var _default = instance;
exports["default"] = _default;