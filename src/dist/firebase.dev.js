"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.provider = exports.authentication = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/firestore");

require("firebase/compat/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

var firebaseApp = _app["default"].initializeApp(firebaseConfig); //access the db


var db = firebaseApp.firestore();

var authentication = _app["default"].auth();

exports.authentication = authentication;
var provider = new _app["default"].auth.GoogleAuthProvider(); //explicit

exports.provider = provider;
var _default = db;
exports["default"] = _default;