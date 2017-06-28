webpackHotUpdate(0,{

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(500);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(499);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(292);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar editCode = function editCode(dispatch, ms) {\n  dispatch((0, _index.setCodeEdit)({ code_edit: !ms.code_edit }));\n  dispatch((0, _index.resetCommand)());\n};\n\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var sizeP = void 0;\n  if (minimizeState.docs === true) {\n    sizeP = \"100%\";\n  } else {\n    sizeP = \"30%\";\n  }\n  return _react2.default.createElement(\n    _reactSplitPane2.default,\n    { split: 'horizontal', size: '5%', allowResize: false },\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement('img', { className: 'minButton', width: '20px', src: 'http://0.0.0.0:8000/static/noun_974819.svg', onClick: function onClick() {\n          return dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n        } }),\n      _react2.default.createElement('img', { className: 'settingsButton', width: '26px', src: 'http://0.0.0.0:8000/static/noun_879834.svg' }),\n      _react2.default.createElement('img', { className: 'newCodeButton', width: '21px', src: 'http://0.0.0.0:8000/static/noun_993053.svg', onClick: function onClick() {\n          return editCode(dispatch, minimizeState);\n        } })\n    ),\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '30%' },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _reactSplitPane2.default,\n        { className: 'secondSplit', split: 'horizontal', allowResize: true },\n        _react2.default.createElement(_FunctionSearch2.default, null),\n        _react2.default.createElement(_FunctionInfo2.default, null)\n      )\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any),\n  doc: _react.PropTypes.any,\n  minimizeState: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiZWRpdENvZGUiLCJkaXNwYXRjaCIsIm1zIiwiY29kZV9lZGl0IiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWluaW1pemVTdGF0ZSIsInNpemVQIiwiZG9jcyIsIm1hcCIsInNvcnRCeSIsInYiLCJvcmRlciIsIngiLCJuYW1lIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLEVBQVgsRUFBa0I7QUFDakNELFdBQVMsd0JBQVksRUFBQ0UsV0FBVSxDQUFDRCxHQUFHQyxTQUFmLEVBQVosQ0FBVDtBQUNBRixXQUFTLDBCQUFUO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJRyxZQUFZLHlCQUFpRDtBQUFBLE1BQTlDSCxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0ksU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLEdBQXlCLFFBQXpCQSxHQUF5QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQy9ELE1BQUlDLGNBQUo7QUFDQSxNQUFJRCxjQUFjRSxJQUFkLEtBQXVCLElBQTNCLEVBQWdDO0FBQzlCRCxZQUFRLE1BQVI7QUFDRCxHQUZELE1BR0k7QUFDRkEsWUFBUSxLQUFSO0FBQ0Q7QUFDRCxTQUFRO0FBQUE7QUFBQSxNQUFXLE9BQU0sWUFBakIsRUFBOEIsTUFBSyxJQUFuQyxFQUF3QyxhQUFhLEtBQXJEO0FBQ1I7QUFBQTtBQUFBO0FBQ0UsNkNBQUssV0FBVSxXQUFmLEVBQTJCLE9BQU0sTUFBakMsRUFBd0MsS0FBSSw0Q0FBNUMsRUFBeUYsU0FBUztBQUFBLGlCQUFNUCxTQUFTLG9CQUFRLEVBQUNRLE1BQUssQ0FBQ0YsY0FBY0UsSUFBckIsRUFBUixDQUFULENBQU47QUFBQSxTQUFsRyxHQURGO0FBRUUsNkNBQUssV0FBVSxnQkFBZixFQUFnQyxPQUFNLE1BQXRDLEVBQTZDLEtBQUksNENBQWpELEdBRkY7QUFHRSw2Q0FBSyxXQUFVLGVBQWYsRUFBK0IsT0FBTSxNQUFyQyxFQUE0QyxLQUFJLDRDQUFoRCxFQUE2RixTQUFTO0FBQUEsaUJBQU1ULFNBQVNDLFFBQVQsRUFBbUJNLGFBQW5CLENBQU47QUFBQSxTQUF0RztBQUhGLEtBRFE7QUFNUjtBQUFBO0FBQUEsUUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFDSVIsWUFBRVcsR0FBRixDQUFNWCxFQUFFWSxNQUFGLENBQVNOLFNBQVQsRUFBb0IsVUFBQ08sQ0FBRCxFQUFPO0FBQy9CLG1CQUFPQSxFQUFFQyxLQUFUO0FBQ0gsV0FGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSxrQkFBRUM7QUFBekMsZUFBSjtBQUEwRDtBQUFBO0FBQUEsa0JBQU0sV0FBVSxTQUFoQjtBQUE0QkQsa0JBQUVFO0FBQTlCO0FBQTFELGFBQVA7QUFDSCxXQUxEO0FBREo7QUFGSixPQURGO0FBWUU7QUFBQTtBQUFBLFVBQVcsV0FBVSxhQUFyQixFQUFtQyxPQUFNLFlBQXpDLEVBQXNELGFBQWEsSUFBbkU7QUFDRSxxRUFERjtBQUVFO0FBRkY7QUFaRjtBQU5RLEdBQVI7QUF3QkQsQ0FoQ0Q7O0FBbUNBWixVQUFVYSxTQUFWLEdBQXNCO0FBQ2xCWixhQUFXLGlCQUFVYSxPQUFWLENBQWtCLGlCQUFVQyxHQUE1QixDQURPO0FBRWxCYixPQUFLLGlCQUFVYSxHQUZHO0FBR2xCWixpQkFBZSxpQkFBVVk7QUFIUCxDQUF0Qjs7QUFNQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDaEIsZUFBV2dCLE1BQU1oQixTQURlO0FBRWhDQyxTQUFLZSxNQUFNWixJQUZxQjtBQUdoQ0YsbUJBQWVjLE1BQU1kO0FBSFcsR0FBWjtBQUFBLENBQXhCOztBQU1BSCxZQUFZLHlCQUFRZ0IsZUFBUixFQUF5QmhCLFNBQXpCLENBQVo7O2tCQUVlQSxTIiwiZmlsZSI6IjUwNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEZ1bmN0aW9uU2VhcmNoIGZyb20gJy4vRnVuY3Rpb25TZWFyY2gnO1xuaW1wb3J0IEZ1bmN0aW9uSW5mbyBmcm9tICcuL0Z1bmN0aW9uSW5mbyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuaW1wb3J0IHsgc2V0RG9jcywgc2V0Q29kZUVkaXQsIHJlc2V0Q29tbWFuZCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbmNvbnN0IGVkaXRDb2RlID0gKGRpc3BhdGNoLCBtcykgPT4ge1xuICBkaXNwYXRjaChzZXRDb2RlRWRpdCh7Y29kZV9lZGl0OiFtcy5jb2RlX2VkaXR9KSk7XG4gIGRpc3BhdGNoKHJlc2V0Q29tbWFuZCgpKTtcbn1cblxubGV0IFJpZ2h0UGFuZSA9ICh7IGRpc3BhdGNoLCB2YXJpYWJsZXMsIGRvYywgbWluaW1pemVTdGF0ZSB9KSA9PiB7XG4gIGxldCBzaXplUDtcbiAgaWYgKG1pbmltaXplU3RhdGUuZG9jcyA9PT0gdHJ1ZSl7XG4gICAgc2l6ZVAgPSBcIjEwMCVcIjtcbiAgfVxuICBlbHNle1xuICAgIHNpemVQID0gXCIzMCVcIjtcbiAgfVxuICByZXR1cm4gKDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgc2l6ZT1cIjUlXCIgYWxsb3dSZXNpemU9e2ZhbHNlfT5cbiAgPGRpdj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1pbkJ1dHRvblwiIHdpZHRoPVwiMjBweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fOTc0ODE5LnN2Z1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldERvY3Moe2RvY3M6IW1pbmltaXplU3RhdGUuZG9jc30pKX0+PC9pbWc+XG4gICAgPGltZyBjbGFzc05hbWU9XCJzZXR0aW5nc0J1dHRvblwiIHdpZHRoPVwiMjZweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fODc5ODM0LnN2Z1wiPjwvaW1nPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwibmV3Q29kZUJ1dHRvblwiIHdpZHRoPVwiMjFweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fOTkzMDUzLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGVkaXRDb2RlKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlKX0+PC9pbWc+XG4gIDwvZGl2PlxuICA8U3BsaXRQYW5lIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiMzAlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYWJsZVRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXJyZW50IFZhcmlhYmxlczwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgeyBfLm1hcChfLnNvcnRCeSh2YXJpYWJsZXMsICh2KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2Lm9yZGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzcGFuIGNsYXNzTmFtZT1cInRocmVlX3F1YXJ0ZXIgbmFtZVwiPnsgeC5uYW1lIH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicXVhcnRlclwiPnsgeC52YWx1ZSB9PC9zcGFuPjwvbGk+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJzZWNvbmRTcGxpdFwiIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGFsbG93UmVzaXplPXt0cnVlfT5cbiAgICAgIDxGdW5jdGlvblNlYXJjaCAvPlxuICAgICAgPEZ1bmN0aW9uSW5mbyAvPlxuICAgIDwvU3BsaXRQYW5lPlxuICA8L1NwbGl0UGFuZT5cbiAgPC9TcGxpdFBhbmU+KTtcbn07XG5cblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGRvYzogUHJvcFR5cGVzLmFueSxcbiAgICBtaW5pbWl6ZVN0YXRlOiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFyaWFibGVzOiBzdGF0ZS52YXJpYWJsZXMsXG4gICAgZG9jOiBzdGF0ZS5kb2NzLFxuICAgIG1pbmltaXplU3RhdGU6IHN0YXRlLm1pbmltaXplU3RhdGVcbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})