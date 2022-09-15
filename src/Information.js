import './css/App.css';

const Information = () => {
    return (
        <div className="content">
            <div className="Information">
                <h1 className='about'>About Laser Tag</h1>
                <p className='aboutInfo'> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                    purus sit amet luctus venenatis, lectus magna fringilla urna, 
                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                </p>
                <div className='sortaButtons'>
                    <div className='box'>

                    </div>
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
            </div>
            <div className="Carousel"></div>
        </div>
    )
}

export default Information