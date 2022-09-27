import React, { useEffect, useState } from 'react';
import './../css/App.css';
import { getSlots } from './axios';
import DatePicker from './Calender';
import SlotBooking from './SlotBooking';
import { allSlots } from './SlotData';

const areDatesEqual = (d1, d2) => {
	return (new Date(d1)).getTime() === (new Date(d2)).getTime();
};

const PageView = () => {
	const [day, setDay] = useState(0);
	const [slot, setSlot] = useState(-1);
	const [slotData, setSlotData] = useState([]);

	const handleSlotBooking = () => {
		console.log(day, slot);
		console.log(allSlots[day][slot]);
		const chosenSlotDetails = slotData.find(
			(e) =>
				areDatesEqual(e.startTime, allSlots[day][slot].startTime) &&
				areDatesEqual(e.endTime, allSlots[day][slot].startTime)
		);
		console.log(chosenSlotDetails);
	};

	useEffect(() => {
		const getSlotData = async () => {
			const data = await getSlots();
			setSlotData(data.data.slots);
		};
		getSlotData();
	}, []);

	return (
		<div className='bg-dark-black flex items-center justify-center h-screen w-screen'>
			<div className='w-11/12 sm:w-4/5 h-5/6 sm:h-4/5 flex flex-col md:flex-row bg-gray-modal rounded-3xl overflow-auto border-1 border-stone-700 border-solid px-4 lg:px-10'>
				<div className='md:p-5 border-0 border-b-1 md:border-r-1 border-stone-700 border-solid w-full md:w-1/2 flex flex-col gap-2 pb-5 md:pb-0'>
					<p className='text-white sm:whitespace-nowrap text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-inter my-8 sm:my-4 font-semibold'>
						Laser Tag Slot Booking
					</p>
					<DatePicker day={day} setDay={setDay} />
				</div>
				<div className='md:p-5 w-full md:w-1/2 flex flex-col gap-2'>
					<p className='text-white sm:whitespace-nowrap text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-inter my-8 sm:my-4 font-semibold'>
						Select Time
					</p>
					<div className='dateinfo'>
						<p className='day mb-4 font-inter font-semibold'>
							{['Friday', 'Saturday', 'Sunday'][day]},
						</p>
						<p className='date mb-4 font-inter font-normal'>
							{['30 September', '1 October', '2 October'][day]}
						</p>
					</div>
					<SlotBooking
						slot={slot}
						setSlot={setSlot}
						day={day}
						slotData={slotData}
					/>
					<p className='hidden md:block text-xs text-center text-stone-600'>
						Scroll for more slots.
					</p>
					<div className='text-right'>
						<button
							className='relative py-2.5 px-8 my-3 text-md rounded-lg font-inter border-none cursor-pointer'
							disabled={slot === -1}
							title={
								slot === -1 ? 'Select a Slot to enable' : null
							}
							onClick={handleSlotBooking}
						>
							Confirm Booking
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageView;
