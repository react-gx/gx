import createSignal from "../../../helpers/createSignal.js";

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

export default counterSignal;
