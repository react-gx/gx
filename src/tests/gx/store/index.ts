import createStore from "../../../helpers/createStore.js";
import counterSignal from "../signals/counter.js";

// Create a store
const store = createStore([counterSignal]);

export default store;
