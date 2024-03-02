import counterSignal from './gx/signals/counter.js';
import store from './gx/store/index.js';

test("should create a store containing signals", () => {
  // Expectations
  expect(store.getSignals()).not.toBeNull();
  expect(store.getSignals()).toEqual([counterSignal]);
});