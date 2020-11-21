import './panel.scss';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { fetchWheater } from '../../actions/';
import { Menu } from '../menu/menu';
import arrow from '../../assets/icons/down-arrow.png';

export const Panel = () => {
    
    const dispatch = useDispatch();   
    const [formValues, handleInputChange ] = useForm({city: ''});
    const [expand, setExpand] = useState(false);
    const { city } = formValues;

    const handleWeather = (e) => {
        e.preventDefault();
        dispatch(fetchWheater(city));
    }    

    const expandPanel = () => setExpand(!expand);

    return (
        <div className="aside-menu">
            <form onSubmit={handleWeather} className="container-search">
                <input  
                    name="city"  
                    value={city} 
                    onChange={handleInputChange} 
                    className="search" 
                    placeholder="Search for any city..." 
                    autoComplete="off"/>
            </form> 
           <div className={expand ? 'menu active' : 'menu'} >
              <Menu/>
           </div>
           <div className="expand-panel" onClick={expandPanel} >
                <img className={`arrow ${expand ? 'active': ''}`}  src={arrow} />
           </div>
        </div>
    )
}
