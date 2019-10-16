export const getDreams = () => {
    return(dispatch) => {
        //must be done in two steps because these are async actions - thunk
        dispatch({type: 'LOADING_DREAMS'})
        return fetch('./api/v1/dreams')
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
        return fetch('/api/v1/dreams', {
            method: 'POST',
            body: JSON.stringify,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(dreams => dispatch({ 
            type: "ADD_DREAM", payload: dreams}))
        // create route
    }
};