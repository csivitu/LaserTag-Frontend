import axios from 'axios';

const headers = {
        Authorization: localStorage.getItem('token'),
};

export const axiosAuthInstance = axios.create({
    baseURL: process.env.REACT_APP_ACCOUNTS_URL,
    withCredentials: true,
    headers: headers
});

export const axiosDataInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    withCredentials: true,
    headers: headers
});


export const UserInfo = async() => {
    try{
        console.log(headers)
        const res = await axiosDataInstance.get('/v1/app/userInfo');
        console.log(res)
    }
    catch(e){
        console.log(e.response);
    }
}




export const getSlots = async() => {
    // try{
    //     const { data } = await axiosInstance.get('/v1/app/slots');
    //     return data;
        
    // }
    // catch(e){
    //     console.log(e.response);
    // }
    setTimeout(() => {
        return {
            "data": {
                "slots": [
                    {
                        "_id": "632b787883cb98f4fd0b870d",
                        "startTime": "2022-09-21T20:47:52.843Z",
                        "endTime": "2022-09-21T20:47:52.843Z",
                        "slotBookedBy": [],
                        "__v": 1
                    },
                    {
                        "_id": "632cb510975cdc35bfc7b622",
                        "startTime": "2022-09-21T20:47:52.843Z",
                        "endTime": "2022-09-21T20:47:52.843Z",
                        "slotBookedBy": [],
                        "__v": 1
                    },
                    {
                        "_id": "632cb517975cdc35bfc7b623",
                        "startTime": "2022-09-21T20:47:52.843Z",
                        "endTime": "2022-09-21T20:47:52.843Z",
                        "slotBookedBy": [],
                        "__v": 1
                    }
                ]
            },
            "error": null
        }
    },1000)
    
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

