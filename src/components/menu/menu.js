import React from 'react'
import { useSelector } from 'react-redux'
import './menu.scss';
import logo from '../../assets/images/OpenWeather.png';
import * as moment from 'moment';

export const Menu = (props) => {
    const weather = useSelector(state => state.weather);
    
    let days =  Object.keys(weather).length > 0 ? weather.list.filter(o => o.dt_txt.includes(moment().format('YYYY-MM-DD'))) : [];
    console.log(days);

    return (
       <div className="panel-weather"> 
            <img className="logo" src={logo} />

           {Object.keys(weather).length === 0 ?
                <p className="countryName">Escribe una ciudad</p>:
                <span>
                    <p className="countryName">{ weather.city.name }, { weather.city.country }</p>
                    <p className="countryName">{moment().format('DD-MM-YYYY')}</p>
                </span>
           }
            <div className="panel-days">
                {
                    days.map(o => (
                        <p className="days" key={o.dt_txt}>{moment(o.dt_txt).format('HH:mm')} {o.weather[0].description }</p>
                    ))
                }
            </div>
       </div>
    )
}



