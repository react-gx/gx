"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Create a signal with a state and actions for managing this state
 * @param options
 * @returns
 */
var createSignal = function createSignal(options) {
  var actions = [];
  // Convert the actions object to an array
  var actionsTable = Object.entries(options.actions);
  for (var _i = 0, _actionsTable = actionsTable; _i < _actionsTable.length; _i++) {
    var action = _actionsTable[_i];
    actions.push({
      type: "".concat(options.name, "/").concat(action[0]),
      handler: action[1]
    });
  }
  // Create a signal
  var signal = {
    name: options.name,
    state: options.state,
    actions: actions
  };
  return signal;
};
exports.default = createSignal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVTaWduYWwiLCJvcHRpb25zIiwiYWN0aW9ucyIsImFjdGlvbnNUYWJsZSIsIk9iamVjdCIsImVudHJpZXMiLCJfaSIsIl9hY3Rpb25zVGFibGUiLCJsZW5ndGgiLCJhY3Rpb24iLCJwdXNoIiwidHlwZSIsImNvbmNhdCIsIm5hbWUiLCJoYW5kbGVyIiwic2lnbmFsIiwic3RhdGUiLCJleHBvcnRzIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2NyZWF0ZVNpZ25hbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTs7Ozs7QUFLQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBT0MsT0FBa0MsRUFBSTtFQUM3RCxJQUFNQyxPQUFPLEdBQTJCLEVBQUU7RUFFMUM7RUFDQSxJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSixPQUFPLENBQUNDLE9BQU8sQ0FBQztFQUVwRCxTQUFBSSxFQUFBLE1BQUFDLGFBQUEsR0FBbUJKLFlBQVksRUFBQUcsRUFBQSxHQUFBQyxhQUFBLENBQUFDLE1BQUEsRUFBQUYsRUFBQSxJQUFFO0lBQTVCLElBQUlHLE1BQU0sR0FBQUYsYUFBQSxDQUFBRCxFQUFBO0lBQ2JKLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDO01BQ1hDLElBQUksS0FBQUMsTUFBQSxDQUFLWCxPQUFPLENBQUNZLElBQUksT0FBQUQsTUFBQSxDQUFJSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDcENLLE9BQU8sRUFBRUwsTUFBTSxDQUFDLENBQUM7S0FDbEIsQ0FBQzs7RUFHSjtFQUNBLElBQU1NLE1BQU0sR0FBRztJQUNiRixJQUFJLEVBQUVaLE9BQU8sQ0FBQ1ksSUFBSTtJQUNsQkcsS0FBSyxFQUFFZixPQUFPLENBQUNlLEtBQUs7SUFDcEJkLE9BQU8sRUFBUEE7R0FDRDtFQUVELE9BQU9hLE1BQU07QUFDZixDQUFDO0FBRURFLE9BQUEsQ0FBQUMsT0FBQSxHQUFlbEIsWUFBWSJ9