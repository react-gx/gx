import createStore from "../../../helpers/createStore";
import counterSignal from "../signals/counter";

// Create a store
const store = createStore([counterSignal]);

export default store;
