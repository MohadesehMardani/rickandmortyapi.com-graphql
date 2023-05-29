import { SET_API, SET_ERROR } from "../actions/types";

const initialState = {
    api: [],
    error: {}
};
export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case SET_API:
            return {
                ...state,
                api: payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload    
            };
        default:
            return state;    
    }
 
}
