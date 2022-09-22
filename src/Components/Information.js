import './../css/App.css';
import SlotBooking from './SlotBooking';
import TeamDetails from './TeamDetails';
import Slideshow from './Slideshow';

const Information = () => {
    return (
        <div className="content">
            <div className="Information">
                <p className='about'>About Laser Tag</p>
                <p className='aboutInfo'> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                    purus sit amet luctus venenatis, lectus magna fringilla urna, 
                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                </p>
                <div className='sortaButtons'>
                    <p>Team Game</p>
                    <p>15 mins</p>
                    <p>point 3</p>
                    <p>point 4</p>
                    <p>point 5</p>
                </div>
                <div className="Rules">
                    <p>Game Rules</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</li>
                    </ul>
                </div>
                <div className="Carousel">
                    <Slideshow />
                </div>
                <div className='randomText'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam</p>
                </div>
            </div>
            <div className='SlotBooking'>
                <div className='TeamDetails'>
                    <TeamDetails />
                </div>
                <SlotBooking />
            </div>
        </div>

    )
}

export default Information