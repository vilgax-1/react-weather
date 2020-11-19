import React, { useEffect, useState } from 'react';
import './header.scss';
import menu from '../../assets/icons/menu.png';
import chat from '../../assets/icons/chat.png';
import box from '../../assets/icons/empty-box.png';
import notification from '../../assets/icons/notification.png';
import elon from '../../assets/images/elon-musk.jpeg';
import { useForm } from '../../hooks/useForm';
import { fetchWheater } from '../../actions/';
import { useDispatch} from 'react-redux';
import { Menu } from '../menu/menu';

export function Header(props) {
    
    const dispatch = useDispatch();
   
    const [asideMenu, setAsideMenu] = useState(false); 
    const [size] = useState(window.innerWidth);
   
    const [formValues, handleInputChange ] = useForm({city: ''});
    const { city } = formValues;

    useEffect(()=>{
        const navbar = document.getElementsByClassName('aside-menu')[0];
        size <= 600 ? navbar.style.height = `${window.innerHeight}px` : navbar.style.minHeight = `100vh`;
    },[size]);

    const showMenu = () => setAsideMenu(!asideMenu);

    const handleWeather = (e) => {
        e.preventDefault();
        showMenu();
        dispatch(fetchWheater(city));
    }
    
    return (
        <>
            <header>
                {/* BUTTON TO OPEN MENU */}
                <div className="menu-hamburguer" onClick={showMenu}>
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
                    <a><img src={box} /></a>
                    <a><img src={notification} /></a>
                    
                    <div className="perfil">
                        <p>Hi, Alex</p>
                        <img src={elon}/>
                    </div>
                </div>
            </header>
            {/* MENU */}
            <div className={asideMenu ? 'aside-menu active' : 'aside-menu'}>
                <form onSubmit={handleWeather} className="container-search">
                    <input  
                        name="city"  
                        value={city} 
                        onChange={handleInputChange} 
                        className="search" 
                        placeholder="Search for any city..." 
                        autoComplete="off"/>
                </form> 
                <Menu/>
            </div>
       </>
    )
}
