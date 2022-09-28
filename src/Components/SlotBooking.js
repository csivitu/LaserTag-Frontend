import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';
import { findSlot } from '../util/processSlotData';
import { SlotTooltip } from './SlotTooltip';

const SlotBooking = ({ slot, setSlot, day, slotsDataPro, selectedSlot }) => {
	const selectedSlotDetails = findSlot(slotsDataPro, selectedSlot);

	return (
		<div className='overflow-y-auto grow'>
			{Object.keys(slotsDataPro[day]).length === 0 ? (
				<div className='flex flex-col items-center justify-center h-full'>
					<Lottie animationData={lasertagLogo} className='w-1/2' />
					<p className='text-base md:text-lg -mt-3 md:-mt-5'>
						Loading Slots...
					</p>
				</div>
			) : (
				<div className='slots grid grid-cols-4 align-middle justify-items-center'>
					{Object.keys(slotsDataPro[day]).map((time, index) => (
						<SlotTooltip
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
