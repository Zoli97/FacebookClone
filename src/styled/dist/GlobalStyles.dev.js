"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n*,*::after, *::before{\n    box-sizing:border-box;\n    margin:0;\n    padding:0;\n\n}\n\nbody{\n\n   \n    margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n\n}\n\n.app__body{\n\n  background: ", ";\n    color: ", ";\n}\n\n.my__header{\n  background: ", ";\n    color: ", ";\n}\n\n.container{\n  background: ", ";\n    color: ", ";\n}\n\n.header__input{\n  background: ", ";\n    color: ", ";\n}\n\n.meesageSender{\n  background: ", ";\n    color: ", ";\n \n}\n.meesageSender__top > form > input{\n  background: ", ";\n    color: ", ";\n}\n\n.post{\n  background: ", ";\n    color: ", ";\n}\n\n.username{\n  color: ", ";\n \n}\n.time{\n  color: ", ";\n}\n\n\n.text_bottom{\n  color: ", ";\n}\n\n.frame{\n  background: ", " !important;\n    color: ", " !important;\n  \n}\n\n.reels__box:hover{\n\nbackground: ", ";\n  color: ", ";\n}\n.story__box:hover{\nbackground: ", ";\n  color: ", ";\n}\n\n.sidebarItem:hover{\n  background: ", ";\n    color: ", ";\n}\n\n.header__option:hover{\n  background: ", ";\n    color: ", ";\n}\n\n.circle{\n  background: ", ";\n    color: ", ";\n\n}\n\n\n.circle:hover{\n  background: ", ";\n    color: ", ";\n\n}\n\n.iconic >  .MuiSvgIcon-root{\n  color: ", ";\n   \n \n}\n\n.messageSender__option:hover{\n  background: ", ";\n   \n}\n\n.meesageSender__top > form > input:hover{\n  background: ", ";\n  color: ", ";\n}\n\n.story__box > .MuiSvgIcon-root{\n  \n  color: ", ";\n}\n\n.reels__box > .MuiSvgIcon-root{\n  color: ", ";\n}\n\n.chat-box{\n  background: ", ";\n}\n\n.chat__footer{\n  background: ", ";\n}\n.chat__footer > form .formInput > input{\n  background: ", ";\n}\n.iconic2 > .MuiSvgIcon-root {\n  color: ", ";\n}\n\n.name{\n  color: ", ";\n}\n\n.post__option:hover{\n  background: ", ";\n  border-radius: 6px;\n}\n\n.chat_item:hover{\n  background: ", ";\n  border-radius: 8px;\n}\n\n.dropdown-menu-chat{\n  background: ", ";\n}\n.sidebar-chat:hover{\n  background:", ";\n  \n}\n\n._bg_icons_ {\n  color: ", ";\n}\n\n.bg_container_icons_:hover{\n  background: ", ";\n}\n\n.box_shadows_ {\n  box-shadow: ", ";\n}\n\n.border_bottom_ {\n  border-bottom: ", ";\n}\n\n.bg_right_icons_{\n  color: ", ";\n}\n\n.bg_right_icons__ {\n  color: ", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.background1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.header_background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.header_background;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.input_background;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.text;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.messageSender_background;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.text;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.input_background;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.text;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.post_background;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.text;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.text;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.text_time;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.text_bottom;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.header_background;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.text;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.hover_background;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.text;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.hover_background;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.text;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.hover_background;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.text;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.hover_background;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.text;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.dark_background;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.text;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.hover_icon_background;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.text;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.white_background;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.hover_background;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.dark_background;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.text;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.story_reel_background;
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.story_reel_background;
}, function (_ref38) {
  var theme = _ref38.theme;
  return theme.chat_background;
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.chat_background;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.input_background_chatbox;
}, function (_ref41) {
  var theme = _ref41.theme;
  return theme.chatbox_footer_icon_background;
}, function (_ref42) {
  var theme = _ref42.theme;
  return theme.text3;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.background_buttons;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.background_hover_listItems;
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.dropdown_menu_background;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.dropdown_menu_background_hover;
}, function (_ref47) {
  var theme = _ref47.theme;
  return theme.bg_icons;
}, function (_ref48) {
  var theme = _ref48.theme;
  return theme.bg_container_icons;
}, function (_ref49) {
  var theme = _ref49.theme;
  return theme.box_shadows;
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.border_bottom;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.bg_right_icons_dark;
}, function (_ref52) {
  var theme = _ref52.theme;
  return theme.bg_right_icons_light;
});
exports.GlobalStyles = GlobalStyles;