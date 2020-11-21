import React from 'react';
import { useSelector } from 'react-redux';
import {Cardweather} from '../../components/cardsWeather/cardWeather';
import * as moment from 'moment';
import './dashboard.scss';
import arrow from '../../assets/icons/down-arrow-big.png';

export const Dashboard = () => {
    const state = useSelector(state => state.weather);
    const datesFiltered = Object.keys(state).length > 0 ? state.list.filter(o=> moment(o.dt_txt).format('HH:mm:ss') === '15:00:00') : [];
   
    return ( 
        <div className="container-dashboard">
            <div className="panel-button row row-reverse">
                <button className="btn btn-blue">Start new forecast</button>
            </div>
            <div className="celcius row row-reverse">
                <p>C &deg; <img src={arrow}/></p>
            </div>
            <div className="panel-cards">
            { Object.keys(state).length > 0 ?
                datesFiltered.map(o => (
                    <Cardweather 
                        key={o.dt_txt}
                        max={o.main.temp_max} 
                        min={o.main.temp_min} 
                        date={o.dt_txt} 
                        weather={o.weather[0].description} 
                        icon={o.weather[0].icon} />
                ))
                : ''
            }
            </div>
        </div>
    )
}

