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

export const dateReducer = (state = {}, action) => {
    switch(action.type){
        case types.date: 
            return {
                date: action.payload
            }
        default:
            return state;
    }
}