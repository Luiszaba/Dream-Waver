export const getDreams = () => {
    console.log("loading")
    return(dispatch) => {
        //must be done in two steps because these are async actions - thunk
        dispatch({type: 'LOADING_DREAMS'})
        return fetch('http://localhost:3000/api/v1/dreams')
        // promise
        .then(resp => resp.json())
        .then(dreams => dispatch({ 
            type: "FETCH_DREAMS", payload: dreams}))
    }
    // creating the objects to be sent
};

export const addDreams = (dreams) => {
    return (dispatch) => {
        dispatch({type: "ADD_DREAM"}, dreams)
        return fetch('http://localhost:3000/api/v1/dreams', {
            method: 'POST',
            body: JSON.stringify({
                dream:dreams
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(dream => dispatch({ 
            type: "ADD_DREAM", 
            payload: dream}))
        // create route
    }
};