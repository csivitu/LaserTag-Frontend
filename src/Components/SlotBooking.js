import { timeList } from './SlotData';
import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';
import { SlotTooltip } from './SlotTooltip';

const SlotBooking = ({ slot, setSlot, day, slotData }) => {
	return (
		<div className='overflow-y-auto grow'>
			{/* <Pagination /> */}
			{slotData.length === 0 ? (
				<div className='flex flex-col items-center justify-center h-full'>
					<Lottie animationData={lasertagLogo} className='w-1/2' />
					<p className='text-base md:text-lg -mt-3 md:-mt-5'>
						Loading Slots...
					</p>
				</div>
			) : (
				<div className='slots grid grid-cols-4 align-middle justify-items-center'>
					{timeList.map((time, index) => (
						<SlotTooltip day={day} index={index} slotData={slotData}>
							<input
								className='text-center'
								key={index}
								label={time}
								type='radio'
								checked={index === slot}
								onChange={() => null}
								onClick={() => {
									setSlot(index);
								}}
							/>
						</SlotTooltip>
					))}
				</div>
			)}
		</div>
	);
};

export default SlotBooking;
