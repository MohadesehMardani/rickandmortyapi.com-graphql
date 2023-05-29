import { SET_API, SET_ERROR } from "./types";

export const setAPI = (API_URL) => async dispatch => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        
        dispatch({
            type: SET_API,
            payload: data.results
        });
         
    } catch (err) {
       dispatch({
           type: SET_ERROR,
           payload: {msg: err.response.statusText, status: err.response.status}
       }); 
    }
};