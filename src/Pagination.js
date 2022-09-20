import { useState, useEffect } from 'react';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import './css/App.css';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const Pagination = () => {
    const date = [1,2,3];
    const [dateId, setDateId] = useState(0);
    return(
        <div className='Pagination'>
            <IconButton className ="previousDay"
                onClick = {() => {setDateId((((dateId -1) % 3)+3)%3)}}
            >
                <KeyboardArrowLeftTwoToneIcon />
            </IconButton>
            <Tooltip title = "30th October" arrow placement="top"> 
            <p>Day {date[dateId]}</p> 
            </Tooltip>
            <IconButton className="nextDay"
                onClick = {() => {setDateId((dateId+1)%3)
                        console.log(dateId);
                    }
                }
            >
                <KeyboardArrowRightTwoToneIcon />
            </IconButton> 
            
        </div>
    )
}

export default Pagination