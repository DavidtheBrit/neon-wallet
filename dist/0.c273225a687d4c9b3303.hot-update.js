webpackHotUpdate(0,{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  console.log(\"change \" + id);\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  console.log(\"delete \" + id);\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name;\n  return _react2.default.createElement(\n    'div',\n    { className: 'arg_annotation' },\n    _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_name[id] = node;\n      }, value: name }),\n    _react2.default.createElement(\n      'select',\n      { className: 'arg_type', onChange: function onChange() {\n          return onChangeInput(dispatch, id);\n        }, ref: function ref(node) {\n          arg_type[id] = node;\n        } },\n      _react2.default.createElement(\n        'option',\n        null,\n        'Int'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'String'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'Array'\n      )\n    ),\n    _react2.default.createElement('input', { type: 'text', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_string[id] = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return onClickDelete(dispatch, id);\n        } },\n      'Delete'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanM/MzM3NCJdLCJuYW1lcyI6WyJhcmdfbmFtZSIsImFyZ190eXBlIiwiYXJnX3N0cmluZyIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5ld192YWx1ZXMiLCJ2YWx1ZSIsIm9uQ2xpY2tEZWxldGUiLCJBcmd1bWVudEFubm90YXRpb24iLCJuYW1lIiwibm9kZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBR0EsSUFBSUEsV0FBVyxFQUFmO0FBQUEsSUFBbUJDLFdBQVcsRUFBOUI7QUFBQSxJQUFrQ0MsYUFBYSxFQUEvQzs7QUFFQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUN0Q0MsVUFBUUMsR0FBUixDQUFZLFlBQVVGLEVBQXRCO0FBQ0EsTUFBTUcsYUFBYTtBQUNqQlIsY0FBVUEsU0FBU0ssRUFBVCxFQUFhSSxLQUROO0FBRWpCUixjQUFVQSxTQUFTSSxFQUFULEVBQWFJLEtBRk47QUFHakJQLGdCQUFZQSxXQUFXRyxFQUFYLEVBQWVJO0FBSFYsR0FBbkI7QUFLQUwsV0FBUyw2QkFBaUJDLEVBQWpCLEVBQXFCRyxVQUFyQixDQUFUO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNOLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUN0Q0MsVUFBUUMsR0FBUixDQUFZLFlBQVVGLEVBQXRCO0FBQ0FELFdBQVMsNkJBQWlCQyxFQUFqQixDQUFUO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJTSxxQkFBcUI7QUFBQSxNQUFHUCxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxFQUFiLFFBQWFBLEVBQWI7QUFBQSxNQUFpQk8sSUFBakIsUUFBaUJBLElBQWpCO0FBQUEsU0FDckI7QUFBQTtBQUFBLE1BQUssV0FBVSxnQkFBZjtBQUNJLDZDQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLFVBQTdCLEVBQXdDLGFBQVksYUFBcEQsRUFBa0UsVUFBVTtBQUFBLGVBQU1ULGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxPQUE1RSxFQUErRyxLQUFLLG1CQUFRO0FBQUNMLGlCQUFTSyxFQUFULElBQWVRLElBQWY7QUFBcUIsT0FBbEosRUFBb0osT0FBT0QsSUFBM0osR0FESjtBQUVJO0FBQUE7QUFBQSxRQUFRLFdBQVUsVUFBbEIsRUFBNkIsVUFBVTtBQUFBLGlCQUFNVCxjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsU0FBdkMsRUFBMEUsS0FBSyxtQkFBUTtBQUFDSixtQkFBU0ksRUFBVCxJQUFlUSxJQUFmO0FBQXFCLFNBQTdHO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLEtBRko7QUFPSSw2Q0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSwrQ0FBL0IsRUFBK0UsVUFBVTtBQUFBLGVBQU1WLGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxPQUF6RixFQUE0SCxLQUFLLG1CQUFRO0FBQUNILG1CQUFXRyxFQUFYLElBQWlCUSxJQUFqQjtBQUF1QixPQUFqSyxHQVBKO0FBUUk7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNSCxjQUFjTixRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBUkosR0FEcUI7QUFBQSxDQUF6Qjs7QUFZQSxJQUFNUyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZLEVBQVo7QUFBQSxDQUF4Qjs7QUFFQUoscUJBQXFCLHlCQUFRRyxlQUFSLEVBQXlCSCxrQkFBekIsQ0FBckI7O2tCQUVlQSxrQiIsImZpbGUiOiI0MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUNvbW1hbmRBcmcsIGRlbGV0ZUNvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxuXG5sZXQgYXJnX25hbWUgPSB7fSwgYXJnX3R5cGUgPSB7fSwgYXJnX3N0cmluZyA9IHt9O1xuXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoLCBpZCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNoYW5nZSBcIitpZCk7XG4gIGNvbnN0IG5ld192YWx1ZXMgPSB7XG4gICAgYXJnX25hbWU6IGFyZ19uYW1lW2lkXS52YWx1ZSxcbiAgICBhcmdfdHlwZTogYXJnX3R5cGVbaWRdLnZhbHVlLFxuICAgIGFyZ19zdHJpbmc6IGFyZ19zdHJpbmdbaWRdLnZhbHVlXG4gIH07XG4gIGRpc3BhdGNoKHVwZGF0ZUNvbW1hbmRBcmcoaWQsIG5ld192YWx1ZXMpKTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRlIFwiK2lkKTtcbiAgZGlzcGF0Y2goZGVsZXRlQ29tbWFuZEFyZyhpZCkpO1xufTtcblxubGV0IEFyZ3VtZW50QW5ub3RhdGlvbiA9ICh7IGRpc3BhdGNoLCBpZCwgbmFtZSB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJnX2Fubm90YXRpb25cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX25hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgYXJnXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfbmFtZVtpZF0gPSBub2RlO319IHZhbHVlPXtuYW1lfS8+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYXJnX3R5cGVcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ190eXBlW2lkXSA9IG5vZGU7fX0+XG4gICAgICAgICAgPG9wdGlvbj5JbnQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPlN0cmluZzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+QXJyYXk8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0byByZXF1ZXN0IHRoaXMgYXJndW1lbnQgZnJvbSB1c2VyLi4uXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfc3RyaW5nW2lkXSA9IG5vZGU7fX0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XG5cbkFyZ3VtZW50QW5ub3RhdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcmd1bWVudEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudEFubm90YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Bcmd1bWVudEFubm90YXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})