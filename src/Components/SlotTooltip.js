import { Tooltip } from '@mui/material';
import { allSlots } from './SlotData';
import Zoom from '@mui/material/Zoom';

const areDatesEqual = (d1, d2) => {
	return new Date(d1).getTime() === new Date(d2).getTime();
};

const findSlotDetails = (day, slot, allSlots, slotData) => {
	const chosenSlotDetails = slotData.find(
		(e) =>
			areDatesEqual(e.startTime, allSlots[day][slot].startTime) &&
			areDatesEqual(e.endTime, allSlots[day][slot].endTime)
	);
	return chosenSlotDetails;
};

export const SlotTooltip = ({ day, index, slotData, children }) => {
	const slotDetails = findSlotDetails(day, index, allSlots, slotData);

	return (
		<Tooltip
			title={
				<>
					<p className='text-sm text-center'>
						<b>{10 - slotDetails.slotBookedBy.length}</b> slots
						left.
					</p>
					<p className='font-bold mb-1'>Slot booked by:</p>
					{slotDetails.slotBookedBy.length > 0 ? (
						<ol className='pl-3 m-0 mb-3'>
							{slotDetails.slotBookedBy.map((e) => {
								return (
									<li>
										{e.name} ({e.username})
									</li>
								);
							})}
						</ol>
					) : (
						<p className='m-0 mb-3 italic'>None</p>
					)}
				</>
			}
			componentsProps={{
				tooltip: {
					sx: {
						bgcolor: '#252525',
						border: '1px solid white',
						'& .MuiTooltip-arrow': {
							color: '#252525',
							'&:before': {
								border: '1px solid white',
							},
						},
					},
				},
			}}
			arrow
			disableInteractive
			TransitionComponent={Zoom}
			enterTouchDelay={0}
		>
			{children}
		</Tooltip>
	);
};
