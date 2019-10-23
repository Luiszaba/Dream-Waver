export default (state = {dreams: [], loading: false } , action) => {
    switch(action.type) {
        case 'LOADING_DREAMS':
            return {
                ...state, 
                loading: true
            };

        case 'FETCH_DREAMS':
            return {
                dreams: action.payload,
                loading: false
            };
            // completes aysnc

        case 'ADD_DREAM':
            console.log("Dream readied")
            return {
                ...state,
                loading: true
            };
        
        case 'DREAM_ADDED':
            console.log("Dream added")
            return {
                dreams: [...state.dreams, action.payload],
                loading: false
                    // spread the array
            };

        default: 
            return state;
    };
};