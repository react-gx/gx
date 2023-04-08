"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var contexts_1 = __importDefault(require("../contexts"));
var reducer_1 = __importDefault(require("./reducer"));
function GXProvider(_ref) {
  var children = _ref.children,
    store = _ref.store;
  // Global state that manage all signals
  var _ref2 = (0, react_1.useReducer)(reducer_1.default, store.getSignals()),
    _ref3 = _slicedToArray(_ref2, 2),
    signals = _ref3[0],
    dispatch = _ref3[1];
  // Context value
  var contextValue = {
    signals: signals,
    dispatch: dispatch
  };
  return (0, jsx_runtime_1.jsx)(contexts_1.default.Provider, Object.assign({
    value: contextValue
  }, {
    children: children
  }));
}
exports.default = GXProvider;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWFjdF8xIiwicmVxdWlyZSIsImNvbnRleHRzXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJyZWR1Y2VyXzEiLCJHWFByb3ZpZGVyIiwiX3JlZiIsImNoaWxkcmVuIiwic3RvcmUiLCJfcmVmMiIsInVzZVJlZHVjZXIiLCJkZWZhdWx0IiwiZ2V0U2lnbmFscyIsIl9yZWYzIiwiX3NsaWNlZFRvQXJyYXkiLCJzaWduYWxzIiwiZGlzcGF0Y2giLCJjb250ZXh0VmFsdWUiLCJqc3hfcnVudGltZV8xIiwianN4IiwiUHJvdmlkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJ2YWx1ZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvdmlkZXJzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxVQUFBLEdBQUFDLGVBQUEsQ0FBQUYsT0FBQTtBQUVBLElBQUFHLFNBQUEsR0FBQUQsZUFBQSxDQUFBRixPQUFBO0FBRUEsU0FBd0JJLFVBQVVBLENBQUFDLElBQUEsRUFBcUM7RUFBQSxJQUFsQ0MsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFBRUMsS0FBSyxHQUFBRixJQUFBLENBQUxFLEtBQUs7RUFDbEQ7RUFDQSxJQUFBQyxLQUFBLEdBQTRCLElBQUFULE9BQUEsQ0FBQVUsVUFBVSxFQUFDTixTQUFBLENBQUFPLE9BQVMsRUFBRUgsS0FBSyxDQUFDSSxVQUFVLEVBQUUsQ0FBQztJQUFBQyxLQUFBLEdBQUFDLGNBQUEsQ0FBQUwsS0FBQTtJQUE5RE0sT0FBTyxHQUFBRixLQUFBO0lBQUVHLFFBQVEsR0FBQUgsS0FBQTtFQUV4QjtFQUNBLElBQU1JLFlBQVksR0FBRztJQUNuQkYsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLFFBQVEsRUFBUkE7R0FDRDtFQUVELE9BQ0UsSUFBQUUsYUFBQSxDQUFBQyxHQUFBLEVBQUNqQixVQUFBLENBQUFTLE9BQVMsQ0FBQ1MsUUFBUSxFQUFBQyxNQUFBLENBQUFDLE1BQUE7SUFBQ0MsS0FBSyxFQUFFTjtFQUFZO0lBQUFWLFFBQUEsRUFBR0E7RUFBUSxHQUFzQjtBQUU1RTtBQWJBaUIsT0FBQSxDQUFBYixPQUFBLEdBQUFOLFVBQUE7QUFhQyJ9