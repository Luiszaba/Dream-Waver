export default (state = {comments: [], loading: false }, action) => {
    //console.log(9)
    switch(action.type) {
        case 'LOADING_COMMENTS':
            console.log("Loading comments")
            return {
                ...state, 
                loading: true
            };

        case 'FETCH_COMMENTS':
            
            console.log("complete async -comments")
            return {
                comments: action.payload,
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
                comments: [...state.comments, action.payload],
                loading: false
                    // spread the array
            };

        default: 
            return state;
    };
};