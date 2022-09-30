import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adminGetUserInfo, scanQRCode } from '../Components/axios';
import { findStaticSlot, getTime } from '../util/processSlotData';
import Lottie from 'lottie-react';
import qrCodeScan from '../lottie/scan-qr-code.json';
import { ToastContext } from '../Components/GlobalAlert';

const Scan = () => {
	const { handleSnackOpen } = useContext(ToastContext);
	const { username } = useParams();
	const [display, setDisplay] = useState(false);
	const [message, setMessage] = useState('');
	const [code, setCode] = useState(0);
	const [userData, setUserData] = useState({});

	const getUserData = async () => {
		const userRes = await adminGetUserInfo(username);
		if (userRes.success) {
			setUserData(userRes.userInfo);
		} else {
			setMessage('Already scanned. Error fetching User data.');
			setCode(userRes.code);
			handleSnackOpen({
				message: `Error ${userRes.code}: ${userRes.message}`,
				variant: 'error',
			});
		}
	};

	useEffect(() => {
		const sendReq = async () => {
			setUserData({});
			const res = await scanQRCode(username);
			if (res.success) {
				setMessage('Scan successful!');
				getUserData();
				setCode(null);
			} else {
				setCode(res.code);
				if (res.code === 409) {
					setMessage(`Already scanned - ${username}`);
					getUserData();
				} else if (res.code === 403) setMessage('Not Authorized!');
				else setMessage(res.message);
			}
			setDisplay(true);
		};

		sendReq();
	}, []);

	return (
		<div className='flex flex-col items-center justify-center h-screen w-screen p-3'>
			{display ? (
				<>
					<h1 className='my-2'>{code}</h1>
					<p className='my-2 text-center max-w-xl'>{message}</p>
					{code === 409 && (
						<a
							className='bg-white m-2 p-2 text-black rounded-md w-40 text-center'
							href={`/admin/${username}`}
						>
							User Details
						</a>
					)}
					<a
						className='bg-white m-2 p-2 text-black rounded-md w-40 text-center'
						href='/'
					>
						Home
					</a>

					{Object.keys(userData).length !== 0 && (
						<div className='p-2 bg-gray-modal rounded-md w-90 max-w-full m-2 border-1 border-solid border-white flex flex-col justify-center items-center'>
							<img
								src={`https://avatars.dicebear.com/api/bottts/${userData.username}.svg`}
								alt='Avatar'
								className='w-28'
							/>
							<p className='my-1 break-all'>{userData.name}</p>
							<p className='my-1 break-all'>{userData.email}</p>
							<p className='my-1 break-all'>
								{userData.username}
							</p>
							<p className='my-1 break-all'>
								{userData.isPaid? 'Paid' : 'Not Paid'}
							</p>
							<p className='my-1 break-all'>
								{userData.isScanned? 'Scanned' : 'Not Scanned'}
							</p>
							<h3 className='my-2'>Slot Details:</h3>
							{userData.slotBooked ? (
								<>
									<p className='text-sm m-0'>
										{getTime(
											findStaticSlot(userData.slotBooked)
												.startTime
										)}
										{' - '}
										{getTime(
											findStaticSlot(userData.slotBooked)
												.endTime
										)}
									</p>
									<p className='text-sm m-0'>
										{new Date(
											findStaticSlot(
												userData.slotBooked
											).startTime
										).toDateString()}
									</p>
									<p className='text-sm m-0'>SJT 308</p>
								</>
							) : (
								<p className='text-sm m-0 text-stone-500'>
									<i>Not booked yet!</i>
								</p>
							)}
						</div>
					)}
				</>
			) : (
				<>
					<Lottie
						animationData={qrCodeScan}
						className='bg-white w-1/2 sm:w-2/5 md:w-1/6'
					/>
					<p className='my-2'>Scanning...</p>
				</>
			)}
		</div>
	);
};

export default Scan;
