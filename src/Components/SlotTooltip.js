import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

export const SlotTooltip = ({ slotDetails, children, ...props }) => {
	return (
		<Tooltip
			title={
				<>
					<p className='text-sm text-center'>
						<b>{10 - slotDetails.slotBookedBy.length}</b> seats
						left.
					</p>
					<p className='font-bold mb-1'>Slot booked by:</p>
					{slotDetails.slotBookedBy.length > 0 ? (
						<ol className='pl-3 m-0 mb-3'>
							{slotDetails.slotBookedBy.map((e, index) => {
								return (
									<li key={index}>
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
			{...props}
		>
			{children}
		</Tooltip>
	);
};
