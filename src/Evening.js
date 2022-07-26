import React from 'react';
import {FiRefreshCw} from 'react-icons/fi';
import {FaMoon} from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import './evening.scss';
const Evening= (props) => {
    return (    
    <div className='main__container__dark'>
        <header className='header'>
            <div className='header__quote'>
                <p>{props.randomQuote}</p>
                <button className='header__button' onClick={() => props.onRefresh()}><FiRefreshCw color='white'/></button>
            </div>
            <p className='header__author'>{props.author}</p>
        </header>
            <div className='main__clock--container'>
                <div className='main__clock__container__greeting--container'>
                    <FaMoon className='main__clock__container--greeting--sun'></FaMoon> 
                    <p className='main__clock__container--greeting'>GOOD EVENING, IT'S CURRENTLY</p>
                </div>
                <div className='main__clock__container__time--container'>
                    <p className='main__clock__container--currentTime'>11:37</p>
                    <p className='main__clock__container--timeZone'>BST</p>
                </div>
                <div className='more__container'>
                        <p className='more__container--location'>IN LONDON, UK</p>
                    <div className='more__container__dark--dropdown'> 
                        <p className='more__container__dark--text'>MORE</p>
                        <button className='more__container__dark__dropdown--button' onClick={() => props.onPress()}><IoIosArrowDropdownCircle/></button>
                    </div>
                </div>
            </div>


            {
                props.isPressed ? (<div className='more__clock--container'>  
                <div className='more__clock__container--dayinfo'>
                    <p>CURRENT TIMEZONE</p>
                    <h1>EUROPE/LONDON</h1>
                    <p>DAY OF THE YEAR</p>
                    <h1>295</h1>
                </div>
                <div className='more__clock__container--weekinfo'>
                    <p>DAY OF THE WEEK</p>
                    <h1>5</h1>
                    <p>WEEK NUMBER</p>
                    <h1>42</h1>
                </div>
            </div>):null
            }
    </div>    
    )
}
export default Evening