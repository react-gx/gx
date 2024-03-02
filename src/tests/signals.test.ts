import counterSignal from "./gx/signals/counter.js";

test("should create a signal", () => {
  // Expectations
  expect(counterSignal).not.toBeNull();
  expect(counterSignal.name).toEqual("counter");
  expect(counterSignal.state).toEqual(0);
  expect(counterSignal.actions.length).toEqual(2);
  expect(counterSignal.actions[0].handler(counterSignal.state, 3)).toEqual(3);
});
