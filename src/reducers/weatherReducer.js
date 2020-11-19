import { types } from '../types/types';

export const weatherReducer = (state = {}, action ) => {
    switch(action.type){
        case types.weather: 
            return {
                city: action.payload.displayName,
                list: action.payload.uid
            }   
        default:
            return state;
    }
}

