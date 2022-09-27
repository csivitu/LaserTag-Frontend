// import { useState } from 'react';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function DatePicker({ day, setDay }) {
	return (
		<>
			{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="month"
          day={day}
          onChange={(newday) => {
            setday(newday);
            console.log(newday);
          }}
          renderInput={(params) => <TextField {...params} />}
          views={['month', 'day']}
          showDaysOutsideCurrentMonth
        // InputProps={{sx: {"&. MuiPickerStaticWrapper-content": {color: "#11ffee00"}} 
        // }}
        />
      </LocalizationProvider> */}
			<h3 className='font-bold text-xl mb-4'>September 2022</h3>
			<div className='grid grid-cols-7 justify-items-center align-middle'>
				{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
					(e, index) => {
						return <p key={index}>{e}</p>;
					}
				)}
				{[
					'',
					'',
					'',
					'',
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12,
					13,
					14,
					15,
					16,
					17,
					18,
					19,
					20,
					21,
					22,
					23,
					24,
					25,
					26,
					27,
					28,
					29,
				].map((e, index) => {
					return (
						<div
							key={index + 7}
							className='p-3 text-stone-600 box-border border-1'
						>
							{e}
						</div>
					);
				})}

				{[0, 1, 2].map((e, index) => (
					<div
						className='py-3 cursor-pointer w-5/6 align-middle text-center rounded-lg box-border'
						onClick={() => setDay(e)}
						style={{
							backgroundColor: day === e ? '#4F4F4F' : '#2B2B2B',
							border:
								day === e
									? '1px solid white'
									: '1px solid transparent',
						}}
					>
						{[30, 1, 2][e]}
					</div>
				))}
				
				{[3, 4, 5, 6, 7, 8].map((e, index) => {
					return (
						<div
							key={index + 34}
							className='p-3 text-stone-600 box-border border-1'
						>
							{e}
						</div>
					);
				})}
			</div>
		</>
	);
}
