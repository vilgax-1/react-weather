import React from 'react'
import { useSelector } from 'react-redux'
import './menu.scss';
import * as moment from 'moment';

export const Menu = () => {
    const weather = useSelector(state => state.weather);
    const { date } = useSelector(state => state.date);
    const days =  Object.keys(weather).length > 0 ? weather.list.filter(o => moment(o.dt_txt).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')) : [];
    const weatherSelected = searchDate(days);

    return (
       <div className="panel-weather"> 
            { Object.keys(weather).length === 0 ?
                <p className="country-name">Escribe una ciudad</p>:
                <span>
                    <p className="heaven">{weatherSelected.description }</p>
                    <img className="logo" src={`http://openweathermap.org/img/wn/${weatherSelected.icon}@2x.png`} />
                    <p className="country-date">{ moment(date).format('DD-MM-YYYY')}</p>
                    <p className="country-name">{ weather.city.name }, { weather.city.country }</p>
                </span>
            }
            <div className="panel-days">
                {
                    days.map(o => (
                        <p className="days" key={o.dt_txt}>{moment(o.dt_txt).format('HH:mm')} <span className="clouds-date">{o.weather[0].description }</span></p>
                    ))
                }
            </div>
       </div>
    )
}


export const searchDate = (date) =>{
    if (date.length > 0){
        const aux = date.find(o => moment(o.dt_txt).format('HH:mm:ss') === '15:00:00');
        return aux ? aux.weather[0] : date[0].weather[0];
    }else{
        return [{}];
    }
}