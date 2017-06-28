webpackHotUpdate(0,{

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Message = __webpack_require__(441);\n\nvar _Message2 = _interopRequireDefault(_Message);\n\nvar _VisualMessage = __webpack_require__(450);\n\nvar _VisualMessage2 = _interopRequireDefault(_VisualMessage);\n\nvar _DataMessage = __webpack_require__(434);\n\nvar _DataMessage2 = _interopRequireDefault(_DataMessage);\n\nvar _CodeMessage = __webpack_require__(430);\n\nvar _CodeMessage2 = _interopRequireDefault(_CodeMessage);\n\nvar _ExplainMessage = __webpack_require__(436);\n\nvar _ExplainMessage2 = _interopRequireDefault(_ExplainMessage);\n\nvar _FilePickMessage = __webpack_require__(437);\n\nvar _FilePickMessage2 = _interopRequireDefault(_FilePickMessage);\n\nvar _CollectionMessage = __webpack_require__(431);\n\nvar _CollectionMessage2 = _interopRequireDefault(_CollectionMessage);\n\nvar _TableSelectMessage = __webpack_require__(447);\n\nvar _TableSelectMessage2 = _interopRequireDefault(_TableSelectMessage);\n\nvar _VegaMessage = __webpack_require__(1419);\n\nvar _VegaMessage2 = _interopRequireDefault(_VegaMessage);\n\nvar _Title = __webpack_require__(448);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _types = __webpack_require__(59);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import SemanticView from '../components/SemanticView';\n\nvar Conversation = function (_Component) {\n    _inherits(Conversation, _Component);\n\n    function Conversation() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Conversation);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n            return _react2.default.createElement(\n                'div',\n                { className: 'innerConversation' },\n                _react2.default.createElement(_Title2.default, { text: _this.props.title, args: _this.props.args, id: _this.props.id }),\n                _this.props.messages.map(function (message) {\n                    var content = void 0;\n                    console.log('INCOMING', message.text);\n                    var firstActiveSelection = _this.props.active;\n                    if (_typeof(message.text) === 'object' && message.text.type === 'image') {\n                        content = _react2.default.createElement(_VisualMessage2.default, { key: message.id, origin: message.origin, content: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'data') {\n                        content = _react2.default.createElement(_DataMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'explain') {\n                        content = _react2.default.createElement(_ExplainMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'file_pick') {\n                        content = _react2.default.createElement(_FilePickMessage2.default, { key: message.id, active: _this.props.active, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'code') {\n                        content = _react2.default.createElement(_CodeMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection') {\n                        content = _react2.default.createElement(_CollectionMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select') {\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: false, active: firstActiveSelection, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select_one') {\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: true, active: firstActiveSelection, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'vega') {\n                        console.log(\"vega\", message.text);\n                        content = _react2.default.createElement(_VegaMessage2.default, { key: message.id, origin: message.origin, spec: message.text.spec, data: message.text.data, hidden: _this.props.hidden });\n                    } else {\n                        content = _react2.default.createElement(_Message2.default, { key: message.id, origin: message.origin, text: message.text, hidden: _this.props.hidden });\n                    }\n                    return content;\n                })\n            );\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return Conversation;\n}(_react.Component);\n\nConversation.propTypes = {\n    messages: proptypes.messagesType,\n    title: _react.PropTypes.any,\n    args: _react.PropTypes.any,\n    id: _react.PropTypes.int,\n    hidden: _react.PropTypes.bool,\n    active: _react.PropTypes.bool\n};\n\nexports.default = Conversation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb24uanM/Yjg5NiJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJDb252ZXJzYXRpb24iLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiYXJncyIsImlkIiwibWVzc2FnZXMiLCJtYXAiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0ZXh0IiwiZmlyc3RBY3RpdmVTZWxlY3Rpb24iLCJhY3RpdmUiLCJ0eXBlIiwib3JpZ2luIiwidmFsdWUiLCJoaWRkZW4iLCJzcGVjIiwiZGF0YSIsInByb3BUeXBlcyIsIm1lc3NhZ2VzVHlwZSIsImFueSIsImludCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7QUFFWjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7c01BRUZDLE0sR0FBUztBQUFBLG1CQUNMO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmO0FBQ0ksaUVBQU8sTUFBTSxNQUFLQyxLQUFMLENBQVdDLEtBQXhCLEVBQStCLE1BQU0sTUFBS0QsS0FBTCxDQUFXRSxJQUFoRCxFQUFzRCxJQUFJLE1BQUtGLEtBQUwsQ0FBV0csRUFBckUsR0FESjtBQUVLLHNCQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLG1CQUFXO0FBQ2hDLHdCQUFJQyxnQkFBSjtBQUNBQyw0QkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JDLFFBQVFDLElBQWhDO0FBQ0Esd0JBQUlDLHVCQUF1QixNQUFLWCxLQUFMLENBQVdZLE1BQXRDO0FBQ0Esd0JBQUcsUUFBT0gsUUFBUUMsSUFBZixNQUF3QixRQUF4QixJQUFvQ0QsUUFBUUMsSUFBUixDQUFhRyxJQUFiLEtBQXNCLE9BQTdE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UUFBUUssTUFBbEcsRUFBMEcsTUFBTUwsUUFBUUMsSUFBUixDQUFhSyxLQUE3SCxFQUFvSSxRQUFRLE1BQUtmLEtBQUwsQ0FBV2dCLE1BQXZKLEdBQVY7QUFDUCxxQkFGTSxNQUVBLElBQUksUUFBT1AsUUFBUUMsSUFBZixNQUF3QixRQUF4QixJQUFvQ0QsUUFBUUMsSUFBUixDQUFhRyxJQUFiLEtBQXNCLE1BQTlELEVBQXNFO0FBQ3JFTixnQ0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JDLFFBQVFDLElBQTVCO0FBQ0FKLGtDQUFVLHVEQUFhLEtBQUtHLFFBQVFOLEVBQTFCLEVBQThCLFFBQVFNLFFBQVFLLE1BQTlDLEVBQXNELE1BQU1MLFFBQVFDLElBQVIsQ0FBYU8sSUFBekUsRUFBK0UsTUFBTVIsUUFBUUMsSUFBUixDQUFhUSxJQUFsRyxFQUF3RyxRQUFRLE1BQUtsQixLQUFMLENBQVdnQixNQUEzSCxHQUFWO0FBQ1AscUJBSE0sTUFHQTtBQUNIVixrQ0FBVSxtREFBUyxLQUFLRyxRQUFRTixFQUF0QixFQUEwQixRQUFRTSxRQUFRSyxNQUExQyxFQUFrRCxNQUFNTCxRQUFRQyxJQUFoRSxFQUFzRSxRQUFRLE1BQUtWLEtBQUwsQ0FBV2dCLE1BQXpGLEdBQVY7QUFDSDtBQUNELDJCQUFPVixPQUFQO0FBQ0gsaUJBM0JBO0FBRkwsYUFESztBQUFBLFM7Ozs7OztBQWtDYlIsYUFBYXFCLFNBQWIsR0FBeUI7QUFDckJmLGNBQVVQLFVBQVV1QixZQURDO0FBRXJCbkIsV0FBTyxpQkFBVW9CLEdBRkk7QUFHckJuQixVQUFNLGlCQUFVbUIsR0FISztBQUlyQmxCLFFBQUksaUJBQVVtQixHQUpPO0FBS3JCTixZQUFRLGlCQUFVTyxJQUxHO0FBTXJCWCxZQUFRLGlCQUFVVztBQU5HLENBQXpCOztrQkFTZXpCLFkiLCJmaWxlIjoiNDMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCBWaXN1YWxNZXNzYWdlIGZyb20gJy4vVmlzdWFsTWVzc2FnZSc7XG5pbXBvcnQgRGF0YU1lc3NhZ2UgZnJvbSAnLi9EYXRhTWVzc2FnZSc7XG5pbXBvcnQgQ29kZU1lc3NhZ2UgZnJvbSAnLi9Db2RlTWVzc2FnZSc7XG5pbXBvcnQgRXhwbGFpbk1lc3NhZ2UgZnJvbSAnLi9FeHBsYWluTWVzc2FnZSc7XG5pbXBvcnQgRmlsZVBpY2tNZXNzYWdlIGZyb20gJy4vRmlsZVBpY2tNZXNzYWdlJztcbmltcG9ydCBDb2xsZWN0aW9uTWVzc2FnZSBmcm9tICcuL0NvbGxlY3Rpb25NZXNzYWdlJztcbmltcG9ydCBUYWJsZVNlbGVjdE1lc3NhZ2UgZnJvbSAnLi9UYWJsZVNlbGVjdE1lc3NhZ2UnO1xuaW1wb3J0IFZlZ2FNZXNzYWdlIGZyb20gJy4vVmVnYU1lc3NhZ2UnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xuaW1wb3J0ICogYXMgcHJvcHR5cGVzIGZyb20gJy4uL3Byb3B0eXBlcy90eXBlcyc7XG5cbi8vIGltcG9ydCBTZW1hbnRpY1ZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9TZW1hbnRpY1ZpZXcnO1xuXG5jbGFzcyBDb252ZXJzYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNvbnZlcnNhdGlvblwiPlxuICAgICAgICAgICAgPFRpdGxlIHRleHQ9e3RoaXMucHJvcHMudGl0bGV9IGFyZ3M9e3RoaXMucHJvcHMuYXJnc30gaWQ9e3RoaXMucHJvcHMuaWR9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSU5DT01JTkcnLCBtZXNzYWdlLnRleHQpO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdEFjdGl2ZVNlbGVjdGlvbiA9IHRoaXMucHJvcHMuYWN0aXZlO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8VmlzdWFsTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IGNvbnRlbnQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxEYXRhTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZXhwbGFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxFeHBsYWluTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnZmlsZV9waWNrJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPEZpbGVQaWNrTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxDb2RlTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8Q29sbGVjdGlvbk1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHQudmFsdWV9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWVzc2FnZS50ZXh0ID09PSAnb2JqZWN0JyAmJiBtZXNzYWdlLnRleHQudHlwZSA9PT0gJ2NvbGxlY3Rpb25fc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxUYWJsZVNlbGVjdE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvbmx5T25lPXtmYWxzZX0gYWN0aXZlPXtmaXJzdEFjdGl2ZVNlbGVjdGlvbn0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdjb2xsZWN0aW9uX3NlbGVjdF9vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPFRhYmxlU2VsZWN0TWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9ubHlPbmU9e3RydWV9IGFjdGl2ZT17Zmlyc3RBY3RpdmVTZWxlY3Rpb259IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAndmVnYScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmVnYVwiLCBtZXNzYWdlLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxWZWdhTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHNwZWM9e21lc3NhZ2UudGV4dC5zcGVjfSBkYXRhPXttZXNzYWdlLnRleHQuZGF0YX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHR9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2Pjtcbn1cblxuQ29udmVyc2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBtZXNzYWdlczogcHJvcHR5cGVzLm1lc3NhZ2VzVHlwZSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgICBhcmdzOiBQcm9wVHlwZXMuYW55LFxuICAgIGlkOiBQcm9wVHlwZXMuaW50LFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})