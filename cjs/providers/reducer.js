"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var gxReducer = function gxReducer(signals, action) {
  // Prev signals
  var prevSignals = _toConsumableArray(signals);
  // Get the signal name
  var signalName = action.type.split("/")[0];
  // Get the signal
  var signal = prevSignals.find(function (signal) {
    return signal.name === signalName;
  });
  if (!signal) throw new Error("Signal \"".concat(signalName, "\" not found"));
  var actionToDispatch = null;
  // Get the action
  var _iterator = _createForOfIteratorHelper(signal.actions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var act = _step.value;
      if (act.type === action.type) {
        actionToDispatch = act;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (actionToDispatch) {
    // Dispatch the action
    signal.state = actionToDispatch.handler(signal.state, action.payload);
  } else throw new Error("Action \"".concat(action.type, "\" not found"));
  return prevSignals;
};
exports.default = gxReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJneFJlZHVjZXIiLCJzaWduYWxzIiwiYWN0aW9uIiwicHJldlNpZ25hbHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzaWduYWxOYW1lIiwidHlwZSIsInNwbGl0Iiwic2lnbmFsIiwiZmluZCIsIm5hbWUiLCJFcnJvciIsImNvbmNhdCIsImFjdGlvblRvRGlzcGF0Y2giLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImFjdGlvbnMiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImFjdCIsInZhbHVlIiwiZXJyIiwiZSIsImYiLCJzdGF0ZSIsImhhbmRsZXIiLCJwYXlsb2FkIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvdmlkZXJzL3JlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxPQUF1QixFQUFFQyxNQUFnQixFQUFJO0VBQzlEO0VBQ0EsSUFBTUMsV0FBVyxHQUFBQyxrQkFBQSxDQUFPSCxPQUFPLENBQUM7RUFFaEM7RUFDQSxJQUFNSSxVQUFVLEdBQUdILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRTVDO0VBQ0EsSUFBTUMsTUFBTSxHQUFHTCxXQUFXLENBQUNNLElBQUksQ0FBQyxVQUFDRCxNQUFNO0lBQUEsT0FBS0EsTUFBTSxDQUFDRSxJQUFJLEtBQUtMLFVBQVU7RUFBQSxFQUFDO0VBRXZFLElBQUksQ0FBQ0csTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxhQUFBQyxNQUFBLENBQVlQLFVBQVUsa0JBQWM7RUFFaEUsSUFBSVEsZ0JBQWdCLEdBQUcsSUFBSTtFQUUzQjtFQUFBLElBQUFDLFNBQUEsR0FBQUMsMEJBQUEsQ0FDZ0JQLE1BQU0sQ0FBQ1EsT0FBTztJQUFBQyxLQUFBO0VBQUE7SUFBOUIsS0FBQUgsU0FBQSxDQUFBSSxDQUFBLE1BQUFELEtBQUEsR0FBQUgsU0FBQSxDQUFBSyxDQUFBLElBQUFDLElBQUEsR0FBZ0M7TUFBQSxJQUF2QkMsR0FBRyxHQUFBSixLQUFBLENBQUFLLEtBQUE7TUFDVixJQUFJRCxHQUFHLENBQUNmLElBQUksS0FBS0osTUFBTSxDQUFDSSxJQUFJLEVBQUU7UUFDNUJPLGdCQUFnQixHQUFHUSxHQUFHO1FBRXRCOzs7RUFFSCxTQUFBRSxHQUFBO0lBQUFULFNBQUEsQ0FBQVUsQ0FBQSxDQUFBRCxHQUFBO0VBQUE7SUFBQVQsU0FBQSxDQUFBVyxDQUFBO0VBQUE7RUFFRCxJQUFJWixnQkFBZ0IsRUFBRTtJQUNwQjtJQUNBTCxNQUFNLENBQUNrQixLQUFLLEdBQUdiLGdCQUFnQixDQUFDYyxPQUFPLENBQUNuQixNQUFNLENBQUNrQixLQUFLLEVBQUV4QixNQUFNLENBQUMwQixPQUFPLENBQUM7R0FDdEUsTUFBTSxNQUFNLElBQUlqQixLQUFLLGFBQUFDLE1BQUEsQ0FBWVYsTUFBTSxDQUFDSSxJQUFJLGtCQUFjO0VBRTNELE9BQU9ILFdBQVc7QUFDcEIsQ0FBQztBQUVEMEIsT0FBQSxDQUFBQyxPQUFBLEdBQWU5QixTQUFTIn0=