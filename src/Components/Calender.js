import { useContext } from 'react';
import { findSlot } from '../util/processSlotData';
import { ToastContext } from './GlobalAlert';

export default function DatePicker({
	day,
	setDay,
	slotsDataPro,
	selectedSlot,
}) {
	const selectedSlotDetails = findSlot(slotsDataPro, selectedSlot);
	const { handleSnackOpen } = useContext(ToastContext);
	
	return (
		<>
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
						onClick={() => {
							e !== 0 && e !== 1 ? handleSnackOpen({
								message: `Warning: At present, slot booking is available for Day 1 only.`,
								variant: 'warning',
							}) : 
							setDay(e);
						}}
						key={index}
						style={{
							backgroundColor:
								selectedSlotDetails &&
								selectedSlotDetails.day === e
									? '#1b5e20'
									: day === e
									? '#4F4F4F'
									: '#2B2B2B',
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
