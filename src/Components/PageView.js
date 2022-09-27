import './../css/App.css'
import DatePicker from './Calender';
import SlotBooking from './SlotBooking';

const PageView = () => {
    return (
        <div className="bg-dark-black flex items-center justify-center h-screen w-screen">
            <div className="w-4/5 h-4/5 flex bg-gray-modal rounded-3xl overflow-hidden border-2 border-gray-400 px-4 md:px-10">
                <div className="p-5 border-r-2 w-1/2 border-white flex flex-col">
                    <p className='text-white text-3xl'>Laser Tag Slot Booking</p>
                    <DatePicker />
                </div>
                <div className="p-5 w-1/2 flex flex-col">
                    <p className='text-white text-3xl'>Select Time</p>
                    <div className='dateinfo'>
                        <p className='day'>Sunday,</p>
                        <p className='date'>30 September</p>
                    </div>
                    <SlotBooking />
                </div>
            </div>
        </div>
    )
}

export default PageView