"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = require("react");
var contexts_1 = __importDefault(require("../contexts"));
var useActions = function useActions(signalName) {
  for (var _len = arguments.length, actions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    actions[_key - 1] = arguments[_key];
  }
  if (!signalName || typeof signalName !== "string") throw new Error("Provide a signalName as first argument of useActions");
  // Get Global Context
  var _ref = (0, react_1.useContext)(contexts_1.default),
    signals = _ref.signals,
    dispatch = _ref.dispatch;
  // Some handlers
  /**
   * Get actions of a signal
   * @param signalName
   * @returns
   */
  var handleGetActions = function handleGetActions(signalName) {
    var signal = signals.find(function (signal) {
      return signal.name === signalName;
    });
    if (signal) {
      if (!actions || actions.length === 0) return signal.actions;
      var filteredActions = [];
      var _loop = function _loop() {
        var action = _actions[_i];
        var actionName = "".concat(signalName, "/").concat(action);
        var retrievedAction = signal.actions.find(function (act) {
          return act.type === actionName;
        });
        if (retrievedAction) filteredActions.push(retrievedAction);else throw new Error("Action ".concat(actionName, " not found"));
      };
      for (var _i = 0, _actions = actions; _i < _actions.length; _i++) {
        _loop();
      }
      return filteredActions;
    } else throw new Error("Signal ".concat(signalName, " not found"));
  };
  var handleFormatActions = function handleFormatActions() {
    // Get actions
    var nonFormattedActions = handleGetActions(signalName);
    // Formatted actions
    var formattedActions = {};
    var _iterator = _createForOfIteratorHelper(nonFormattedActions),
      _step;
    try {
      var _loop2 = function _loop2() {
        var action = _step.value;
        // Get action name
        var actionName = action.type.split("/")[1];
        formattedActions[actionName] = function (payload) {
          dispatch({
            type: action.type,
            payload: payload
          });
        };
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return formattedActions;
  };
  return handleFormatActions();
};
exports.default = useActions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWFjdF8xIiwicmVxdWlyZSIsImNvbnRleHRzXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJ1c2VBY3Rpb25zIiwic2lnbmFsTmFtZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhY3Rpb25zIiwiQXJyYXkiLCJfa2V5IiwiRXJyb3IiLCJfcmVmIiwidXNlQ29udGV4dCIsImRlZmF1bHQiLCJzaWduYWxzIiwiZGlzcGF0Y2giLCJoYW5kbGVHZXRBY3Rpb25zIiwic2lnbmFsIiwiZmluZCIsIm5hbWUiLCJmaWx0ZXJlZEFjdGlvbnMiLCJfbG9vcCIsImFjdGlvbiIsIl9hY3Rpb25zIiwiX2kiLCJhY3Rpb25OYW1lIiwiY29uY2F0IiwicmV0cmlldmVkQWN0aW9uIiwiYWN0IiwidHlwZSIsInB1c2giLCJoYW5kbGVGb3JtYXRBY3Rpb25zIiwibm9uRm9ybWF0dGVkQWN0aW9ucyIsImZvcm1hdHRlZEFjdGlvbnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AyIiwidmFsdWUiLCJzcGxpdCIsInBheWxvYWQiLCJzIiwibiIsImRvbmUiLCJlcnIiLCJlIiwiZiIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvdXNlQWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUMsZUFBQSxDQUFBRixPQUFBO0FBSUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLFVBQWtCLEVBQTBCO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBckJDLE9BQWlCLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBakJGLE9BQWlC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