import {types as type} from '../types/types';
const api = '54cea05cce77f8961fb261505ca42a51';
const link = `http://api.openweathermap.org/data/2.5/forecast?appid=${api}`;

export const fetchWheater = (town) => {
    const url = `${link}&q=${town}&units=metric`;
    return (dispatch) => {
        fetch(url)
        .then(data => data.json())
        .then(res=>{
            const {city, list } = res;
            dispatch(weather(list, city));
        })
    }
}


export const weather = (uid, displayName) => ({
    type: type.weather,
    payload: {
        uid,
        displayName
    }
});