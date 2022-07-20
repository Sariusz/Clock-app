import React from 'react';
import {FiRefreshCw} from 'react-icons/fi';
import {FaMoon} from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import './evening.scss';
const Evening= () => {
    return (    
    <div className='main__container__dark'>
        <header className='header'>
            <div className='header__quote'>
                <p>"The one serious conviction that a man should have is that nothing is to be taken too seriously."</p>
                <button className='header__button'><FiRefreshCw color='white'/></button>
            </div>
            <p className='header__author'>Nicholas Butler</p>
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
                        <button className='more__container__dark__dropdown--button'><IoIosArrowDropdownCircle/></button>
                    </div>
                </div>
            </div>
    </div>    
    )
}
export default Evening