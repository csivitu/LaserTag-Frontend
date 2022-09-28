import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import DialogTitle from '@mui/material/DialogTitle';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Fab,
} from '@mui/material';
import { cancelSlot } from './axios';
import { ToastContext } from './GlobalAlert';
import Lottie from 'lottie-react';
import lasertagLogo from '../lottie/loading.json';
import { FaChevronDown } from 'react-icons/fa';
import { StormTrooperIcon } from './Icons';
import { getTime } from '../util/processSlotData';

export const BookingInfo = ({ userData, getAllData }) => {
	const [open, setOpen] = useState(true);
	const [cancel, setCancel] = useState(false);
	const { handleSnackOpen } = useContext(ToastContext);

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogout = () => {
		handleSnackOpen({
			message: 'Logged out successfully',
			variant: 'success',
		});

		setTimeout(() => {
			localStorage.removeItem('token');
			window.location.href = '/';
		}, 1000);
	};

	const handleSlotCancel = async () => {
		const res = await cancelSlot();
		if (res.success) {
			getAllData();
			handleSnackOpen({
				message: 'Slot cancelled successfully',
				variant: 'success',
			});
		} else {
			handleSnackOpen({
				message: `Error ${res.code}: ${res.message}`,
				variant: 'error',
			});
		}
		setCancel(false);
	};

	return (
		<>
			<div className='fixed top-1 md:top-5 right-1 md:right-5'>
				<Fab
					color='primary'
					aria-label='add'
					onClick={() => setOpen(true)}
					sx={{
						backgroundColor: '#1C1C1C',
						border: '1.5px solid rgb(68 64 60)',
						color: 'white',
						':hover': {
							backgroundColor: '#FFE81F',
							color: 'black',
							transition: 'all 0.3s ease-in-out',
							borderColor: 'black',
						},
					}}
				>
					<StormTrooperIcon className='h-8 w-8' />
				</Fab>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					<div className='flex items-end'>
					<img
						src='/images/hello-there.svg'
						alt='Hello There'
						className='h-6 mr-2 mb-3'
					/>
					<h2 className='m-0'>Hello there.</h2>
					</div>
				</DialogTitle>
				<DialogContent>
					{userData ? (
						<div
							className='flex flex-col gap-3 mb-5'
							id='alert-dialog-description'
						>
							<div className='flex flex-col md:flex-row justify-center gap-2 items-start md:items-center'>
								<img
									src={`https://avatars.dicebear.com/api/bottts/${userData.username}.svg`}
									alt='Avatar'
									className='w-28'
								/>
								<div className='w-full'>
									<p className='m-0 text-lg font-bold text-white'>
										{userData.name}
									</p>
									<p className='m-0 text-sm'>
										{userData.username}
									</p>
									<p className='mt-0 mb-1 text-sm'>
										{userData.email}
									</p>
									<button
										className='border-none py-0.5 px-2 cursor-pointer rounded-sm'
										onClick={handleLogout}
									>
										Logout
									</button>
								</div>
							</div>
							<div>
								<p className='text-lg font-bold m-0 text-white'>
									Slot Details:
								</p>
								{userData.slotBooked ? (
									<>
										<p className='text-sm m-0'>
											{getTime(
												userData.slotBooked.startTime
											)}
											{' - '}
											{getTime(
												userData.slotBooked.endTime
											)}
										</p>
										<p className='text-sm m-0'>
											{new Date(
												userData.slotBooked.startTime
											).toDateString()}
										</p>
										<div>
											{!cancel ? (
												<button
													onClick={() =>
														setCancel(true)
													}
													className='py-1 px-2 cursor-pointer rounded-md mt-2 mb-1 border-1 border-solid border-red-500 bg-red-50'
													disabled={
														userData.isChangedSlot
													}
												>
													Cancel Slot
												</button>
											) : (
												<div className='p-2 border-2 border-solid border-white w-fit rounded-lg'>
													<p className='m-0'>
														Are you sure you want to
														cancel?
													</p>
													<button
														className='mr-2 w-16 bg-green-700 my-2 text-white cursor-pointer border-none rounded-md py-1'
														onClick={() =>
															handleSlotCancel()
														}
													>
														Yes
													</button>
													<button
														className='mr-2 w-16 bg-red-700 my-2 text-white cursor-pointer border-none rounded-md py-1'
														onClick={() =>
															setCancel(false)
														}
													>
														No
													</button>
												</div>
											)}
										</div>
										<p className='text-xs m-0 text-stone-500'>
											Note: You can cancel a slot only
											once.
										</p>
									</>
								) : (
									<p className='text-sm m-0 text-stone-500'>
										<i>Not booked yet!</i>
									</p>
								)}
							</div>
							<div>
								<p className='m-0 align-middle'>
									<b className='text-white'>
										Slot cancellation allowed:
									</b>{' '}
									{!userData.isChangedSlot ? (
										<BsFillCheckCircleFill className='text-green-600 -mb-0.5' />
									) : (
										<BsFillXCircleFill className='text-red-500 -mb-0.5' />
									)}
								</p>
								<p className='text-xs m-0 text-stone-500'>
									Note: A maximum of one slot cancellation is
									allowed up to 12 hours before the start of
									the slot.
								</p>
							</div>
							<div>
								<p className='m-0 align-middle'>
									<b className='text-white'>
										Payment verified:
									</b>{' '}
									{userData.isPaid ? (
										<BsFillCheckCircleFill className='text-green-600 -mb-0.5' />
									) : (
										<BsFillXCircleFill className='text-red-500 -mb-0.5' />
									)}
								</p>
								<p className='text-xs m-0 text-stone-500'>
									Note: The payment verification is done
									manually from our end.
								</p>
							</div>
							<div>
								<p className='m-0 align-middle'>
									<b className='text-white'>
										QR Code Scanned:
									</b>{' '}
									{userData.isScanned ? (
										<BsFillCheckCircleFill className='text-green-600 -mb-0.5' />
									) : (
										<BsFillXCircleFill className='text-red-500 -mb-0.5' />
									)}
								</p>
								<p className='text-xs m-0 text-stone-500'>
									Note: Just before you play LaserTag, your QR
									Code will be scanned.
								</p>
							</div>
						</div>
					) : (
						<div className='flex flex-col items-center justify-center h-full'>
							<Lottie
								animationData={lasertagLogo}
								className='w-1/2'
							/>
							<p className='text-base md:text-lg -mt-3 md:-mt-5'>
								Loading User Data...
							</p>
						</div>
					)}
					{userData && userData.qrCode && (
						<Accordion>
							<AccordionSummary
								aria-controls='panel1a-content'
								id='panel1a-header'
								expandIcon={<FaChevronDown />}
							>
								QR Code
							</AccordionSummary>

							<AccordionDetails>
								<div
									dangerouslySetInnerHTML={{
										__html: userData.qrCode,
									}}
								/>
							</AccordionDetails>
						</Accordion>
					)}
					<Accordion>
						<AccordionSummary
							aria-controls='panel1a-content'
							id='panel1a-header'
							expandIcon={<FaChevronDown />}
						>
							Instructions for slot booking
						</AccordionSummary>

						<AccordionDetails>
							<ol className='m-0'>
								<li>
									Click on the link provided above and login
									using your CSI account.
								</li>
								<li>
									If you don’t have a CSI account already,
									create one using the email used for event
									registration.
								</li>
								<li>
									Available slots will be shown on your
									screen.
								</li>
								<li>Choose your preferred date and time.</li>
								<li>
									Click on ‘Confirm’ to confirm your slot.
								</li>
								<li>
									Report 5 minutes prior to the starting of
									your slot.
								</li>
							</ol>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							aria-controls='panel1a-content'
							id='panel1a-header'
							expandIcon={<FaChevronDown />}
						>
							Disclaimer
						</AccordionSummary>
						<AccordionDetails>
							<ol className='m-0'>
								<li>
									A maximum of one slot cancellation is
									allowed up to 12 hours before the start of
									the slot.
								</li>
								<li>
									You won’t be allowed to play if your slot
									hasn’t been booked.
								</li>
								<li>Latecomers won’t be allowed to play.</li>
								<li>
									The registration fee won’t be refunded under
									any circumstances
								</li>
							</ol>
						</AccordionDetails>
					</Accordion>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>DONE</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
