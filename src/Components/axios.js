import axios from 'axios';

const headers = {
    Authorization: localStorage.getItem('token'),
};

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    withCredentials: true,
    headers: headers,
});

export const UserInfo = async () => {
    try {
        const { data } = await axiosInstance.get('/v1/app/userInfo');
        console.log(data);
        return data;
    }
    catch (e) {
        console.log(e.response);
    }
}

export const getSlots = async () => {
    try{
        const { data } = await axiosInstance.get('/v1/app/slots');
        console.log(data);
        return data;
    }
    catch(e){
        console.log(e.response);
    }
}

// export const postSlots = async() => {
//     try{
//         const { data } = await axiosInstance.push('v1/app/slots',{headers:{
//             body: {slotId}
//         }});
//         return data
//     }
//     catch(e){
//         console.log(e.response);
//     }
// }

