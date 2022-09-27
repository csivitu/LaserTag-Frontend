import axios from 'axios';

const headers = {
	Authorization: localStorage.getItem('token'),
};

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
	withCredentials: true,
	headers: headers,
});

export const getUserInfo = async () => {
	try {
		const { data } = await axiosInstance.get('/v1/app/userInfo');
		return {
            success: true,
            userInfo: data.data.user,
        };
	} catch (e) {
		console.log(e.response);
        return {
            success: false,
            error: e,
        }
	}
};

export const getSlots = async () => {
	try {
		const { data } = await axiosInstance.get('/v1/app/slots');
		return {
            success: true,
            slots: data.data.slots,
        };
	} catch (e) {
		console.log(e.response);
        return {
            success: false,
            error: e,
        }
	}
};

export const chooseSlot = async (slotId) => {
	try {
		const { data } = await axiosInstance.post('/v1/app/slots', {
			slotId: slotId,
		});
		return {
            success: true,
            data: data,
        };
	} catch (e) {
		console.log(e.response);
        return {
            success: false,
            error: e,
        }
	}
};
