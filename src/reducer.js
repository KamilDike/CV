export const initialState = {
    access: 'business',
};

export const actionTypes = {
    SET_ACCESS: "SET_ACCESS",
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_ACCESS:
            return {
                ...state,
                access: action.access,
            };

            default:
                return state;
    }
};

export default reducer;