"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var useActions_1 = __importDefault(require("./useActions"));
var useAction = function useAction(signalName, action) {
  if (!signalName || typeof signalName !== "string") throw new Error("Provide a signalName as a first argument of useAction");
  if (!action || typeof action !== "string") throw new Error("Provide an action as second argument of useAction");
  var actions = (0, useActions_1.default)(signalName, action);
  return Object.values(actions)[0];
};
exports.default = useAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VBY3Rpb25zXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJyZXF1aXJlIiwidXNlQWN0aW9uIiwic2lnbmFsTmFtZSIsImFjdGlvbiIsIkVycm9yIiwiYWN0aW9ucyIsImRlZmF1bHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZUFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUFBLFlBQUEsR0FBQUMsZUFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLFVBQWtCLEVBQUVDLE1BQWMsRUFBSTtFQUN2RCxJQUFJLENBQUNELFVBQVUsSUFBSSxPQUFPQSxVQUFVLEtBQUssUUFBUSxFQUMvQyxNQUFNLElBQUlFLEtBQUssQ0FBQyx1REFBdUQsQ0FBQztFQUUxRSxJQUFJLENBQUNELE1BQU0sSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUN2QyxNQUFNLElBQUlDLEtBQUssQ0FBQyxtREFBbUQsQ0FBQztFQUV0RSxJQUFNQyxPQUFPLEdBQUcsSUFBQVAsWUFBQSxDQUFBUSxPQUFVLEVBQUNKLFVBQVUsRUFBRUMsTUFBTSxDQUFDO0VBRTlDLE9BQU9JLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVESSxPQUFBLENBQUFILE9BQUEsR0FBZUwsU0FBUyJ9