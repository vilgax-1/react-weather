import React from 'react'
import * as moment from 'moment';
import './cardWeather.scss';
import { selectWeather } from '../../actions/index';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

export const Cardweather = ({date, max, min, weather, icon}) =>{
    const activeDate = useSelector(state => state.date);
    const dispatch = useDispatch();   
    console.log(activeDate);
    const handleDate = (e) => {
        dispatch(selectWeather(e));
    }   
    
    return (
        <>
            <div className={`card  ${date === activeDate.date ? 'active': ''}`} onClick={()=>handleDate(date)}>
                <div className="card-header">
                    <p className="date">{moment(date).format('YYYY-MM-DD')}</p>
                </div>
                <div className="card-body">
                    <img className="clouds" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <p> {min} / {max} </p>
                </div>
                <div className="card-footer">
                    <p>{weather}</p>
                </div>
            </div>
        </>
    )
}
