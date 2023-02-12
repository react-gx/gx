import createSignal from "../helpers/createSignal";

test("should create a signal", () => {
  const counterSignal = createSignal({
    name: "counter",
    state: 0,
    actions: {
      increment: (state, payload) => {
        return state + payload;
      },

      decrement: (state, payload) => {
        return state + payload;
      },
    },
  });

  // Expectations
  expect(counterSignal).not.toBeNull();
  expect(counterSignal.name).toEqual("counter");
  expect(counterSignal.state).toEqual(0);
  expect(counterSignal.actions.length).toEqual(2);
  expect(counterSignal.actions[0].handler(counterSignal.state, 3)).toEqual(3);
});
