import React from 'react';
import {FiRefreshCw} from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';
const Morning= () => {
    return (    
    <div className='main__container'>
        <header className='header'>
            <div className='header__quote'>
                <p>"The one serious conviction that a man should have is that nothing is to be taken too seriously.The one serious conviction that a man should have is that nothing is to be taken too seriously."</p>
                <button className='header__button'><FiRefreshCw color='rgb(47, 169, 47)'/></button>
            </div>
            <p className='header__author'>Nicholas Butler</p>
        </header>
        <main className='main'>
            <div className='main__clock--container'>
                <div className='main__clock__container__greeting--container'>
                    <BsSun className='main__clock__container--greeting--sun'></BsSun> 
                    <p className='main__clock__container--greeting'>GOOD MORNING, IT'S CURRENTLY</p>
                </div>
                <div className='main__clock__container__time--container'>
                    <p className='main__clock__container--currentTime'>11:37</p>
                    <p className='main__clock__container--timeZone'>BST</p>
                </div>
                <p className='main__clock__container--location'>IN LONDON, UK</p>
            </div>
            <div className='more__container'>
                <div className='more__container--dropdown'>
                    <p className='more__container--text'>MORE</p>
                    <button className='more__container__dropdown--button'><IoIosArrowDropdown/></button>
                </div>
            </div>
        </main>
        <div className='click__more--container'>  
            <div>
                <p>CURRENT TIMEZONE</p>
                <h1>EUROPE/LONDON</h1>
                <p>DAY OF THE WEEK</p>
                <h1>5</h1>
            </div>
            <div>
                <p>DAY OF THE YEAR</p>
                <h1>295</h1>
                <p>DAY OF THE WEEK</p>
                <h1>42</h1>
            </div>
        </div>
    </div>    
    )
}
export default Morning