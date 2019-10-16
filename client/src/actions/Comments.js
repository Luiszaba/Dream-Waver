export const getComments = () => {
    return(dispatch) => {
        //must be done in two steps because these are async actions - thunk
        dispatch({type: 'LOADING_COMMENTS'})
        return fetch('./api/v1/comments')
        // promise
        .then(resp => resp.json())
        .then(comments => dispatch({ 
            type: "FETCH_COMMENTS", payload: comments}))
    }
    // creating the objects to be sent
};

export const addComment = (comments) => {
    return (dispatch) => {
        dispatch({type: "ADD_COMMENTS"}, comments)
        return fetch('./api/v1/commentss', {
            method: 'POST',
            body: JSON.stringify,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(comments => dispatch({ 
            type: "ADD_COMMENT", 
            payload: comments}))
        // create route
    }
};