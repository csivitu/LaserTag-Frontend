import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';
import { findSlot, getTimeSlots } from '../util/processSlotData';
import { SlotTooltip } from './SlotTooltip';

const SlotBooking = ({ slot, setSlot, day, slotsDataPro, selectedSlot }) => {
	const selectedSlotDetails = findSlot(slotsDataPro, selectedSlot);
	const slotsForTheDay = getTimeSlots(slotsDataPro[day]);

	return (
		<div className='overflow-y-auto grow'>
			{slotsForTheDay.length === 0 ? (
				<div className='flex flex-col items-center justify-center h-full'>
					<Lottie animationData={lasertagLogo} className='w-1/2' />
					<p className='text-base md:text-lg -mt-3 md:-mt-5'>
						Loading Slots...
					</p>
				</div>
			) : (
				<div className='slots grid grid-cols-4 align-middle justify-items-center'>
					{slotsForTheDay.map((time, index) => (
						!(day === 2 &&
						[
							'06:00 PM',
							'06:15 PM',
							'06:30 PM',
							'06:45 PM',
							'07:00 PM',
							'07:15 PM',
							'07:30 PM',
							'07:45 PM',
						].includes(time)) && <SlotTooltip
							day={day}
							slotDetails={slotsDataPro[day][time]}
							key={index}
						>
							<input
								className='text-center'
								style={
									selectedSlotDetails &&
									selectedSlotDetails._id ===
										slotsDataPro[day][time]._id
										? {
												backgroundColor: '#1b5e20',
										  }
										: {}
								}
								label={time}
								type='radio'
								checked={slotsDataPro[day][time]._id === slot}
								onChange={() => null}
								onClick={() =>
									setSlot(slotsDataPro[day][time]._id)
								}
							/>
						</SlotTooltip>
					))}
				</div>
			)}
		</div>
	);
};

export default SlotBooking;
