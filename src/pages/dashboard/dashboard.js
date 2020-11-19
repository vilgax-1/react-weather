import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Cardweather from '../../components/cardsWeather/cardWeather';
import './dashboard.scss';

export const Dashboard = (props) => {
    const state = useSelector(state => state.weather);
    console.log(state);

    return (
        <div className="panel-cards">
            { Object.keys(state).length > 0 ?
                state.list.map(o => (
                    <Cardweather max={o.main.temp_max} min={o.main.temp_min} date={o.dt_txt} weather={o.weather[0].description} />
                ))
                : ''
            }
        </div>
    )
}

