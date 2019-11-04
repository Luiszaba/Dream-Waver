export const getComments = () => {
    console.log("fetching comments")
    return(dispatch) => {
        //must be done in two steps because these are async actions - thunk
        dispatch({type: 'LOADING_COMMENTS'})
        return fetch('http://localhost:3000/api/v1/comments')
        //promise
        .then(resp => resp.json())
        .then(comments => dispatch({ 
            type: "FETCH_COMMENTS", 
            payload: comments
        }))
    }

    //creating the objects to be sent
};

export const addComment = (comments) => {
    console.log(5)
    return (dispatch) => {
        dispatch({type: "ADD_COMMENTS"}, comments)
        console.log(6)
        return fetch('http://localhost:3000/api/v1/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment:comments
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(comment => {
            console.log(7)
            dispatch({ 
            type: "ADD_COMMENT", 
            payload: comment
        })
        })
        //create route
    }
};