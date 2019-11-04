export default (state = {dreams: [], loading: false } , action) => {
    switch(action.type) {
        case 'LOADING_DREAMS':
            console.log("loading dreams")
            return {
                ...state, 
                loading: true
            };

        case 'FETCH_DREAMS':
            console.log("complete async -dreams")
            return {
                loading: false,
                dreams: [...action.payload]
                
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
                loading: true
                    // spread the array
            };

        default: 
            return state;
    };
};