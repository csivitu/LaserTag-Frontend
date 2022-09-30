import axios from 'axios';
import { generateErrorMessage } from '../util/generateErrorMessage';

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
        console.log(e)
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
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
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
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
            data: data.data.user,
        };
	} catch (e) {
		console.log(e);
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
        }
	}
};

export const cancelSlot = async () => {
	try {
		const { data } = await axiosInstance.post('/v1/app/cancelSlot');
		return {
            success: true,
            data: data.data.user,
        };
	} catch (e) {
		console.log(e);
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
        }
	}
};

export const scanQRCode = async (username) => {
    try {
		const { data } = await axiosInstance.post('/v1/admin/scan/' + username);

		return {
            success: true,
            data: data.data.user,
        };
	} catch (e) {
		console.log(e);
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
        }
	}
}

export const adminGetUserInfo = async (username) => {
	try {
		const { data } = await axiosInstance.get('/v1/admin/userInfo/' + username);

		return {
            success: true,
            userInfo: data.data.user,
        };
        
	} catch (e) {
        console.log(e)
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
        }
	}
};

export const getAllData = async() => {
    try {
        const { data } = await axiosInstance.get('v1/admin/users');
        return {
            success: true,
            data: data.data.users,
        }
    }
    catch (e) {
        return {
            success: false,
            error: e,
            code: e.response.status,
            message: generateErrorMessage(e),
        }
    }
}