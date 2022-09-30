import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getAllData } from "../Components/axios";
import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';

const Admin = () => {
    const [view,setView] = useState(false);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState([]);
    const style1 = {
        display: "flex",
        gap: "20%",
        width: "900px",
        marginLeft:"15%",
    }
    useEffect(()=> {
        const getRequest = async() => {
            const res = await getAllData();
            if (res.success){
                setView(true);
                setInfo(res.data);
                console.log(res);
            }   
            else{
                setError(true);
                setView(false);
            }
        };
        getRequest();
    });
    return(
        <div className="Details">
            {
                view? (
                <div>
                    <div
                    style={style1}
                    >
                        <p>Name</p>
                        <p>Username</p>
                        <p>Email</p>
                    </div>
                    <div>
                        {
                            info.map((data) => (
                                <>
                                    <p>{data.name}</p>
                                    <p>{data.username}</p>
                                    <p>{data.email}</p>

                                </>
                            ))
                        }
                    </div>
                </div>):(
                <>
                    <Lottie
						animationData={lasertagLogo}
						className='w-full sm:w-3/5 md:w-1/4'
					/>
					<p className='text-lg -mt-5'>Loading... Please wait</p>
                </>
                )
            }
            {
                error?(
                    <div>
                        <Lottie
						animationData={lasertagLogo}
						className='w-full sm:w-3/5 md:w-1/4'
					    />
					    <p className='text-lg -mt-5'>Error in fetching data.../p>
                    </div>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default Admin;