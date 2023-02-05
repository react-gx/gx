const gxReducer = (state, action) => {
    switch (action.type) {
        case 'add/signal': {
            const prev = state.slice();
            prev.push(action.payload);
            return prev;
        }
        default: return state;
    }
};
export default gxReducer;
//# sourceMappingURL=reducer.js.map