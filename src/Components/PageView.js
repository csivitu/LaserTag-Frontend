import './../css/App.css'
import DatePicker from './Calender';
import SlotBooking from './SlotBooking';
import { useState } from 'react';
const PageView = () => {
    return(
        <div className="pageView">
            <div className="pageViewBlur">
                <div className="dateView">
                    <div className="about">
                        <p>Laser Tag Slot Booking</p>
                    </div>
                    <div className="calender">
                        <DatePicker />

                    </div>
                </div>
                <div className="slotView">
                    <div className='topic'>
                        <p>Select Time</p>
                    </div>
                    <div className = 'dateinfo'>
                        <p className='day'>Sunday,</p>
                        <p className='date'>30 September</p>
                    </div>
                    <div className='slots'>
                        <SlotBooking />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageView