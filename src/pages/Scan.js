import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { scanQRCode } from '../Components/axios';
import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';

const Scan = () => {
	const { username } = useParams();
	const [display, setDisplay] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const sendReq = async () => {
			const res = await scanQRCode(username);
			if (res.success) {
				window.location.href = '/admin/' + username;
			} else {
				res.code === 409 && setMessage('Already scanned!');
				setDisplay(true);
			}
		};

		sendReq();
	});

	return (
		<div className='flex flex-col items-center justify-center h-screen w-screen'>
			{display ? (
				<>
					<p>{message}</p>
					<a className='bg-white m-2 p-2 text-black rounded-md w-40 text-center' href='/'>Home</a>
					<a className='bg-white m-2 p-2 text-black rounded-md w-40 text-center' href={'/admin/' + username}>See User</a>
				</>
			) : (
				<>
					<Lottie
						animationData={lasertagLogo}
						className='w-full sm:w-3/5 md:w-1/4'
					/>
					<p className='text-lg -mt-5'>Loading... Please wait</p>
				</>
			)}
		</div>
	);
};

export default Scan;
