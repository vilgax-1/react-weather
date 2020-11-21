import React from 'react';
import './header.scss';
import menu from '../../assets/icons/menu.png';
import chat from '../../assets/icons/chat.png';
import box from '../../assets/icons/empty-box.png';
import notification from '../../assets/icons/notification.png';
import elon from '../../assets/images/elon-musk.jpeg';
import { useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { fetchWheater } from '../../actions/index';

export function Header(props) {
    
    const dispatch = useDispatch();   
    const [formValues, handleInputChange ] = useForm({city: ''});
    const { city } = formValues;

    const handleWeather = (e) => {
        e.preventDefault();
        dispatch(fetchWheater(city));
    }
    
    return (
        <>
            <header>
                <div className="menu-hamburguer">
                    <img src={menu} alt="cloud"/>                  
                </div>
                <form onSubmit={handleWeather} className="container-search">
                    <input  
                        name="city"  
                        value={city} 
                        onChange={handleInputChange} 
                        className="search" 
                        placeholder="Search for any city..." autoComplete="off" />
                </form> 
                {/* DIV NOTIFICATIONS */}
                <div className="box-notifications">                
                    <a><img src={chat} /></a>
                    <a><img src={notification} /></a>
                    <a><img src={box} /></a>
                    <div className="perfil">
                        <p>Hi, Alex</p>
                        <img src={elon}/>
                    </div>
                </div>
            </header>
       </>
    )
}
