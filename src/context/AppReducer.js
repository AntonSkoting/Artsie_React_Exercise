

function AppReducer(state, action) {
    switch(action.type) {
        case 'SET_ARTWORKS':
            return {
                ...state, 
                artworks: action.payload
            };
        default: return state;
    }
}

export default AppReducer;
