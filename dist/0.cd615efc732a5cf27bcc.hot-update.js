webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables;\n    return _react2.default.createElement(\n        'div',\n        { className: 'right_pane' },\n        _react2.default.createElement(\n            'div',\n            { className: 'subtitle' },\n            'Iris'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'snippet' },\n            'Built with React and Redux. More will appear here soon.'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'variableTable' },\n            _react2.default.createElement(\n                'div',\n                { className: 'title' },\n                'Current Variables'\n            ),\n            _react2.default.createElement(\n                'ul',\n                null,\n                _.map(_.sortBy(variables, function (v) {\n                    return v.order;\n                }), function (x) {\n                    return _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'func_info' },\n            _react2.default.createElement(\n                'div',\n                { className: 'func_title' },\n                'add two numbers: x and y'\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'func_description' },\n                'This function takes two numbers as input and produces their sum.'\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'examples' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'head' },\n                    'EXAMPLES:'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'example' },\n                    '\"add 2 3\"'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'example' },\n                    '\"add 45 and 43\"'\n                )\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'func_code' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'head' },\n                    'CODE:'\n                ),\n                _react2.default.createElement(\n                    'pre',\n                    null,\n                    'def add_two_numbers(x,y): return x + y'\n                )\n            )\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvYyIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7Ozs7OztBQUVaLElBQUlDLFlBQVk7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxXQUNaO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUFBO0FBQUEsU0FGSjtBQUdJO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUYsa0JBQUVHLEdBQUYsQ0FBTUgsRUFBRUksTUFBRixDQUFTRixTQUFULEVBQW9CLFVBQUNHLENBQUQsRUFBTztBQUMvQiwyQkFBT0EsRUFBRUMsS0FBVDtBQUNILGlCQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCwyQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLDhCQUFFQztBQUF6Qyx5QkFBSjtBQUEwRDtBQUFBO0FBQUEsOEJBQU0sV0FBVSxTQUFoQjtBQUE0QkQsOEJBQUVFO0FBQTlCO0FBQTFELHFCQUFQO0FBQ0gsaUJBTEQ7QUFESjtBQUZKLFNBSEo7QUFjSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxZQUFmO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsa0JBQWY7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxTQUFmO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFNBQWY7QUFBQTtBQUFBO0FBSEYsYUFIRjtBQVFFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxNQUFmO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQVJGO0FBZEosS0FEWTtBQUFBLENBQWhCOztBQWdDQVIsVUFBVVMsU0FBVixHQUFzQjtBQUNsQlIsZUFBVyxpQkFBVVMsT0FBVixDQUFrQixpQkFBVUMsR0FBNUI7QUFETyxDQUF0Qjs7QUFJQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDWixtQkFBV1ksTUFBTVosU0FEZTtBQUVoQ2EsYUFBS0QsTUFBTUU7QUFGcUIsS0FBWjtBQUFBLENBQXhCOztBQUtBZixZQUFZLHlCQUFRWSxlQUFSLEVBQXlCWixTQUF6QixDQUFaOztrQkFFZUEsUyIsImZpbGUiOiI0MjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxubGV0IFJpZ2h0UGFuZSA9ICh7IHZhcmlhYmxlcyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfcGFuZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+SXJpczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuaXBwZXRcIj5CdWlsdCB3aXRoIFJlYWN0IGFuZCBSZWR1eC4gTW9yZSB3aWxsIGFwcGVhciBoZXJlIHNvb24uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cnJlbnQgVmFyaWFibGVzPC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHYub3JkZXI7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJxdWFydGVyXCI+eyB4LnZhbHVlIH08L3NwYW4+PC9saT47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2luZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfdGl0bGVcIj5hZGQgdHdvIG51bWJlcnM6IHggYW5kIHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfZGVzY3JpcHRpb25cIj5UaGlzIGZ1bmN0aW9uIHRha2VzIHR3byBudW1iZXJzIGFzIGlucHV0IGFuZCBwcm9kdWNlcyB0aGVpciBzdW0uPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+RVhBTVBMRVM6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cImFkZCAyIDNcIjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XCJhZGQgNDUgYW5kIDQzXCI8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfY29kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+Q09ERTo8L2Rpdj5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICBkZWYgYWRkX3R3b19udW1iZXJzKHgseSk6IHJldHVybiB4ICsgeVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhcmlhYmxlczogc3RhdGUudmFyaWFibGVzLFxuICAgIGRvYzogc3RhdGUuZG9jc1xufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})