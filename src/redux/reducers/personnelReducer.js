const INITIAL_STATE = {
    personnel: []
}

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'GET_PERSONNEL':
            // console.log('getUser Reducer: ', action.payload)
            return {
                ...state,
                personnel: action.payload
            };

        default:
            return state;
    }
}