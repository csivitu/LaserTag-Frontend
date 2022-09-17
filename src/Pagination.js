import { useState, useEffect } from 'react';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import './css/App.css';
import { Button } from '@mui/material';

const Pagination = () => {
    const date = [1,2,3];
    const [dateId, setDateId] = useState(0);
    return(
        <div className='Pagination'>
            <Button className ="previousDay"
                onClick = {() => {setDateId((((dateId -1) % 3)+3)%3)}}
            >
                <KeyboardArrowLeftTwoToneIcon />
            </Button>
            <p>Day {date[dateId]}</p>
            <Button className="nextDay"
                onClick = {() => {setDateId((dateId+1)%3)}}
            >
                <KeyboardArrowRightTwoToneIcon />
            </Button> 
        </div>
    )
}

export default Pagination