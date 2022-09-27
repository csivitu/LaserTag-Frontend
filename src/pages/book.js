import { useState, useEffect } from 'react';
import PageView from '../Components/PageView';
import Lottie from 'lottie-react'
import lasertagLogo from "../lottie/loading.json"

function Book() {
    const [viewport, setViewPort] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setTimeout(async () => {
            if(!token) {
                window.location.href = "/login";
            } else {
                setViewPort(true);
            }
        }, 1000)
    }, []);

    return (
        <>
            {viewport ? (
                <PageView />
            ) : (
                <div className='flex flex-col items-center justify-center h-screen w-screen'>
                    <Lottie animationData={lasertagLogo} className="w-full sm:w-3/5 md:w-1/4" />
					<p className='text-lg -mt-5'>Loading... Please wait</p>
                </div>
            )}
        </>
    );
}

export default Book;
