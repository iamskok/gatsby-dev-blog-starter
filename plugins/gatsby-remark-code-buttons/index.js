"use strict";

var _unistUtilVisit = _interopRequireDefault(require("unist-util-visit"));

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function gatsbyRemarkCodeButtons(_ref, _ref2) {
  var markdownAST = _ref.markdownAST;
  var customClassName = _ref2.className,
      customButtonClassName = _ref2.buttonClassName,
      customText = _ref2.text,
      customIcon = _ref2.icon,
      customIconClassName = _ref2.iconClassName,
      customTooltip = _ref2.tooltip,
      customToasterClassName = _ref2.toaster,
      customToasterText = _ref2.toasterText,
      customToasterDuration = _ref2.toasterDuration;
  (0, _unistUtilVisit["default"])(markdownAST, 'code', function (node, index) {
    var _split = (node.lang || '').split(':'),
        _split2 = _slicedToArray(_split, 2),
        language = _split2[0],
        params = _split2[1];

    var actions = _queryString["default"].parse(params);

    var clipboard = actions.clipboard;

    if (!language) {
      return;
    }

    if (clipboard === 'false') {
      delete actions['clipboard'];
    } else {
      var className = ['gatsby-code-button-container'].concat(customClassName || '').join(' ').trim();
      var buttonClassName = ['gatsby-code-button'].concat(customButtonClassName || '').join(' ').trim();
      var text = customText || '';
      var iconClassName = ['gatsby-code-button-icon'].concat(customIconClassName || '').join(' ').trim();
      var icon = customIcon || "<svg class=\"".concat(iconClassName, "\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z\"/></svg>");
      var tooltip = customTooltip || '';
      var toaster = ['gatsby-code-button-toaster'].concat(customToasterClassName || '').join(' ').trim();
      var toasterText = (customToasterText ? customToasterText : '').trim();
      var toasterId = toasterText ? Math.random() * Math.pow(100, 10) : '';
      var toasterDuration = toasterText ? customToasterDuration : 3500;
      var code = markdownAST.children[index].value;
      code = code.replace(/"/gm, '&quot;').replace(/`/gm, '\\`');
      var buttonNode = {
        type: 'html',
        value: "\n            <div\n              class=\"".concat(className, "\"\n              onClick=\"copyToClipboard(`").concat(code, "`, `").concat(toasterId, "`)\"\n              data-toaster-text=\"").concat(toasterText, "\"\n              data-toaster-id=\"").concat(toasterId, "\"\n              data-toaster-duration=\"").concat(toasterDuration, "\"\n            >\n              <div\n                class=\"").concat(buttonClassName, "\"\n                data-tooltip=\"").concat(tooltip, "\"\n              >\n                ").concat(text).concat(icon, "\n              </div>\n            </div>\n            ").trim()
      };
      markdownAST.children.splice(index, 0, buttonNode);
      actions['clipboard'] = 'false';
    }

    var newQuery = '';

    if (Object.keys(actions).length) {
      newQuery = ":" + Object.keys(actions).map(function (key) {
        return "".concat(key, "=").concat(actions[key]);
      }).join('&');
    }

    node.lang = language + newQuery;
  });
};