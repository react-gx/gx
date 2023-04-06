"use strict";

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
var useSignal = function useSignal(signalName) {
  var _ref = (0, react_1.useContext)(contexts_1.default),
    signals = _ref.signals;
  var memoizedSignals = (0, react_1.useMemo)(function () {
    return signals;
  }, [signals]);
  /**
   * Get state of a signal base on its name
   * @param signalName
   * @returns
   */
  var handleGetSignalState = function handleGetSignalState(signalName) {
    var signal = memoizedSignals.find(function (signal) {
      return signal.name === signalName;
    });
    if (signal) {
      return signal.state;
    }
    // Throw error if signal not found
    throw new Error("Signal ".concat(signalName, " not found"));
  };
  return handleGetSignalState(signalName);
};
exports.default = useSignal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWFjdF8xIiwicmVxdWlyZSIsImNvbnRleHRzXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJ1c2VTaWduYWwiLCJzaWduYWxOYW1lIiwiX3JlZiIsInVzZUNvbnRleHQiLCJkZWZhdWx0Iiwic2lnbmFscyIsIm1lbW9pemVkU2lnbmFscyIsInVzZU1lbW8iLCJoYW5kbGVHZXRTaWduYWxTdGF0ZSIsInNpZ25hbCIsImZpbmQiLCJuYW1lIiwic3RhdGUiLCJFcnJvciIsImNvbmNhdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvdXNlU2lnbmFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsVUFBQSxHQUFBQyxlQUFBLENBQUFGLE9BQUE7QUFFQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBYUMsVUFBa0IsRUFBSTtFQUNoRCxJQUFBQyxJQUFBLEdBQW9CLElBQUFOLE9BQUEsQ0FBQU8sVUFBVSxFQUFDTCxVQUFBLENBQUFNLE9BQVMsQ0FBQztJQUFqQ0MsT0FBTyxHQUFBSCxJQUFBLENBQVBHLE9BQU87RUFDZixJQUFNQyxlQUFlLEdBQUcsSUFBQVYsT0FBQSxDQUFBVyxPQUFPLEVBQUM7SUFBQSxPQUFNRixPQUFPO0VBQUEsR0FBRSxDQUFDQSxPQUFPLENBQUMsQ0FBQztFQUV6RDs7Ozs7RUFLQSxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJUCxVQUFrQixFQUFPO0lBQ3JELElBQU1RLE1BQU0sR0FBR0gsZUFBZSxDQUFDSSxJQUFJLENBQUMsVUFBQUQsTUFBTTtNQUFBLE9BQUlBLE1BQU0sQ0FBQ0UsSUFBSSxLQUFLVixVQUFVO0lBQUEsRUFBQztJQUV6RSxJQUFJUSxNQUFNLEVBQUU7TUFDVixPQUFPQSxNQUFNLENBQUNHLEtBQUs7O0lBR3JCO0lBQ0EsTUFBTSxJQUFJQyxLQUFLLFdBQUFDLE1BQUEsQ0FBV2IsVUFBVSxnQkFBYTtFQUNuRCxDQUFDO0VBRUQsT0FBT08sb0JBQW9CLENBQUNQLFVBQVUsQ0FBQztBQUN6QyxDQUFDO0FBRURjLE9BQUEsQ0FBQVgsT0FBQSxHQUFlSixTQUFTIn0=