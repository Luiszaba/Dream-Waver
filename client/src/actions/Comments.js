export const getComments = () => {
    return(dispatch) => {
        //must be done in two steps because these are async actions - thunk
        dispatch({type: 'LOADING_COMMENTS'})
        return fetch('http://localhost:3000/api/v1/comments')
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
        return fetch('http://localhost:3000/api/v1/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment:comments
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(comment => dispatch({ 
            type: "ADD_COMMENT", 
            payload: comment}))
        // create route
    }
};