import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import PageView from '../Components/PageView';

function Book() {
    const [viewport, setViewPort] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
            window.location.href = "/login";
        } else {
            setViewPort(true);
        }
    }, []);

    return (
        <>
            {viewport ? (
                <PageView />
            ) : (
                <div className='flex flex-col items-center justify-center h-screen w-screen'>
                    <CircularProgress />
                    <p className='text-lg'>Loading...</p>
                </div>
            )}
        </>
    );
}

export default Book;
