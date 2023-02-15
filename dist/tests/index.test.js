import createSignal from '../helpers/createSignal';
import createStore from '../helpers/createStore';
test("should create a store containing signals", () => {
    // Create a signal
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
    // Create a store
    const store = createStore([counterSignal]);
    // render(<GXProvider store={store}/>);
    // Expectations
});
//# sourceMappingURL=index.test.js.map