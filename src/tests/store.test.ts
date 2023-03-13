import counterSignal from './gx/signals/counter';
import store from './gx/store';

test("should create a store containing signals", () => {
  // Expectations
  expect(store.getSignals()).not.toBeNull();
  expect(store.getSignals()).toEqual([counterSignal]);
});