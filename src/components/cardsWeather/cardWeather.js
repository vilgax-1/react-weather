import React from 'react'
import PropTypes from 'prop-types'
import clouds from '../../assets/icons/clouds.png';
import './cardWeather.scss';
function Cardweather({date, max, min, weather}) {
    return (
        <div class="card">
            <div className="card-header">
                <p class="date">{date}</p>
            </div>
            <div className="card-body">
                <img class="clouds" src={clouds} />
                <p> {min} / {max} </p>
            </div>
            <div className="card-footer">
                <p>{weather}</p>
            </div>
        </div>
    )
}

export default Cardweather
