import { staticSlots } from '../Components/generateSlotData';

export const processSlotData = (slots) => {
	if (!slots || !slots.length) return { 0: {}, 1: {}, 2: {} };

	let slotsData = { 0: {}, 1: {}, 2: {} };

	slots.sort((a, b) => {
		return new Date(a.startTime) - new Date(b.startTime);
	});

	slots = slots.map((slot) => {
		return {
			...slot,
			startTimeStr: getTime(slot.startTime),
			endTimeStr: getTime(slot.endTime),
		};
	});

	slots.forEach((slot) => {
		// Removes all the slots for Day 2 from 6:00 PM onwards
		if (
			slot.day === 2 &&
			[
				'06:00 PM',
				'06:15 PM',
				'06:30 PM',
				'06:45 PM',
				'07:00 PM',
				'07:15 PM',
				'07:30 PM',
				'07:45 PM',
			].includes(slot.startTimeStr)
		)
			return;
		
		slotsData[slot.day][slot.startTimeStr] = slot;
	});

	return slotsData;
};

export const findSlot = (slotsData, id) => {
	if (!id) return false;

	const allSlots = [
		...Object.values(slotsData[0]),
		...Object.values(slotsData[1]),
		...Object.values(slotsData[2]),
	];

	return allSlots.find((e) => e._id === id);
};

// Temporary function to find slots
export const findStaticSlot = (id) => {
	return staticSlots.find((e) => e._id === id);
};

export const getTimeSlots = (slots) => {
	const keys = Object.keys(slots);
	keys.sort((a, b) => new Date(a + ' 12/12/12') - new Date(b + ' 12/12/12'));
	return keys;
};

export const getTime = (date) => {
	const options = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
		timeZone: 'IST',
	};
	return new Date(date).toLocaleString('en-US', options);
};

export const getDay = (date) => {
	const day = new Date(date).toLocaleDateString('en-US', {
		day: '2-digit',
		timeZone: 'IST',
	});
	return ['30', '01', '02'].indexOf(day);
};
