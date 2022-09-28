import React, { useContext, useEffect, useState } from 'react';
import './../css/App.css';
import { chooseSlot, getSlots, getUserInfo } from './axios';
import { BookingInfo } from './BookingInfo';
import DatePicker from './Calender';
import { ToastContext } from './GlobalAlert';
import SlotBooking from './SlotBooking';
import { allSlots } from './SlotData';

const areDatesEqual = (d1, d2) => {
	return new Date(d1).getTime() === new Date(d2).getTime();
};

const PageView = () => {
	const { handleSnackOpen } = useContext(ToastContext);
	const [day, setDay] = useState(0);
	const [slot, setSlot] = useState(-1);
	const [slotData, setSlotData] = useState([]);
	const [userData, setUserData] = useState(undefined);
	const [selectedSlot, setSelectedSlot] = useState({
		day: null,
		time: null,
	});
    const [disableButton, setDisableButton] = useState(false);

	const getSelectedSlot = () => {
		if (!userData || !userData.slotBooked)
			return {
				day: null,
				time: null,
			};

		const days = {
			30: 0,
			1: 1,
			2: 2,
		};

		console.log(userData);

		const newDay = userData.slotBooked.startTime
			? days[new Date(userData.slotBooked.startTime).getDate()]
			: null;
		const newTime = userData.slotBooked.startTime
			? new Date(userData.slotBooked.startTime)
					.toTimeString()
					.substring(0, 5)
			: null;

		return {
			day: newDay,
			time: newTime,
		};
	};

	const updateSelectedSlot = () => {
		setSelectedSlot(getSelectedSlot());
	};

	useEffect(() => {
		updateSelectedSlot();
	}, [userData]);

	const handleChangeUserData = (newData) => {
		setUserData(newData);
		updateSelectedSlot();
	};

	const handleSlotBooking = async () => {
        setDisableButton(true);
		const chosenSlotDetails = slotData.find(
			(e) =>
				areDatesEqual(e.startTime, allSlots[day][slot].startTime) &&
				areDatesEqual(e.endTime, allSlots[day][slot].endTime)
		);

		const res = await chooseSlot(chosenSlotDetails._id);
		if (res.success) {
			setUserData(res.data);
			handleSnackOpen({
				message: 'Slot booked successfully',
				variant: 'success',
			});
		} else {
			handleSnackOpen({
				message: `Error ${res.code}: ${res.message}`,
				variant: 'error',
			});
		}
        setDisableButton(false);
	};

	useEffect(() => {
		const getSlotData = async () => {
			const userRes = await getUserInfo();
			if (userRes.success) {
				setUserData(userRes.userInfo);
			} else {
				handleSnackOpen({
					message: `Error ${userRes.code}: ${userRes.message}`,
					variant: 'error',
				});
			}

			const slotRes = await getSlots();
			if (slotRes.success) {
				setSlotData(slotRes.slots);
			} else {
				handleSnackOpen({
					message: `Error ${slotRes.code}: ${slotRes.message}`,
					variant: 'error',
				});
			}
		};
		getSlotData();
	}, []);

	return (
		<div className='bg-dark-black flex flex-col items-center justify-center h-screen w-screen'>
			<div className='w-11/12 sm:w-4/5 h-5/6 sm:h-4/5 flex flex-col md:flex-row bg-gray-modal rounded-3xl overflow-auto border-1 border-stone-700 border-solid px-4 lg:px-10'>
				<div className='md:p-5 border-0 border-b-1 md:border-r-1 border-stone-700 border-solid w-full md:w-1/2 flex flex-col gap-2 pb-5 md:pb-0'>
					<p className='text-white sm:whitespace-nowrap text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-inter my-8 sm:my-4 font-semibold'>
						Laser Tag Slot Booking
					</p>
					<DatePicker
						day={day}
						setDay={setDay}
						selectedSlot={selectedSlot}
					/>
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
						selectedSlot={selectedSlot}
						getSelectedSlot={getSelectedSlot}
					/>
					<p className='hidden md:block text-xs text-center text-stone-600'>
						Hover for the number of seats left.
					</p>
					<div className='text-right'>
						<button
							className='relative py-2.5 px-8 my-3 text-md rounded-lg font-inter border-none cursor-pointer'
							disabled={
								slot === -1 ||
								selectedSlot.day ||
								selectedSlot.time ||
                                disableButton
							}
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
			<BookingInfo
				userData={userData}
				setUserData={handleChangeUserData}
			/>
		</div>
	);
};

export default PageView;
