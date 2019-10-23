export default (state = {comments: [], loading: false } , action) => {
    switch(action.type) {
        case 'LOADING_COMMENT':
            return {
                ...state, 
                loading: true
            };

        case 'FETCH_COMMENT':
            return {
                dreams: action.payload,
                loading: false
            };
            // completes aysnc

        case 'ADD_COMMENT':
            console.log("comment readied")
            return {
                ...state,
                loading: true
            };
        
        case 'COMMENT_ADDED':
            console.log("comment added")
            return {
                dreams: [...state.comments, action.payload],
                loading: false
                    // spread the array
            };

        default: 
            return state;
    };
};