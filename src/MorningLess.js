import React from 'react';
import { BsSun } from 'react-icons/bs';
const MorningLess = () => {
    return (
        <div className='main__container'>
            <div className='top__half--container'>
                <div className='top__half__clock--container'>
                    <div className='top__half__clock__container__greeting--container'>
                        <BsSun className='top__half__clock__container__greeting--sun'></BsSun> 
                        <p className='top__half__clock__container__greeting--text'>GOOD MORNING, IT'S CURRENTLY</p>
                    </div>
                    <div className='top__half__clock__container__time--container'>
                        <p className='top__half__clock__container--currentTime'>11:37</p>
                        <p className='top__half__clock__container--timeZone'>BST</p>
                    </div>
                    <p className='top__half__clock__container--location'>IN LONDON, UK</p>
                </div>
            </div>
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
export default MorningLess