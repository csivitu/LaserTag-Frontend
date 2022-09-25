import './css/app.css';
import Calender from './Calender';
import SlotBooking from './Components/SlotBooking';
const PageView = () => {
    return(
        <div className="pageView">
            <div className="dateView">
                <div className="about">
                    <h>Laser Tag Slot Booking</h>
                </div>
                <div className="calender">
                    {/* <Calender /> */}
                </div>
            </div>
            <div className="slotView">
                <div className='topic'>
                    <h>Select Time</h>
                </div>
                <div className='slots'>
                    <SlotBooking />
                </div>
            </div>
        </div>
    )
}

export default PageView