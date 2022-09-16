import {useEffect, useState} from 'react'
import './css/App.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SlotBooking = () => {
    const [show, setShow] = useState(-1);
    const timeList = ['10:15 AM','10:30 AM','10:45 AM','11:00 AM',
    '01:45 PM','02:00 PM','02:15 PM','02:30 PM','02:45 PM','03:00 PM',
    '03:15 PM','03:30 PM','05:00 PM','05:15 PM','05:30 PM','05:45 PM'];
    return (
        <div className='stuff'>
            <div className='day'>
                <p>Available Slots</p>
                <h10>Today</h10>
            </div>
            <div className='slots'>
                {timeList.map((time, index) => (
                    <button onClick={() => setShow(index)} id = {`time${index}`} key = {index} className='Button'>{time}</button>
                ))}
            </div>
            {
            (show !== -1) ? null : <button className='Book'><p>Confirm Booking</p><ArrowForwardIcon /></button >
            }
        </div>     
    )
}

export default SlotBooking