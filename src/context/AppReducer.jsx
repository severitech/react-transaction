// eslint-disable-next-line react-refresh/only-export-components
export default (state, action) => {
    switch(action.type) {
        case "ADD-TRANSACTION":
            return {
                ...state,
                transaction: [...state.transaction, action.payload]};
        case "DELETE-TRANSACTION":
            return {
                ...state,
                transaction: state.transaction.filter((transaction) =>
                    transaction.id !== action.payload
                )
            };
        default:
            return state
    }
};