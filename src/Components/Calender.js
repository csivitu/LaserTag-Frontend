import {useState} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function DatePicker(props) {
  const [value, setValue] = useState(dayjs())
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="month"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          views={['month','day']}
          showDaysOutsideCurrentMonth
          // InputProps={{sx: {"&. MuiPickerStaticWrapper-content": {color: "#11ffee00"}} 
          // }}
          />
      </LocalizationProvider>
      </>
    
  );
}