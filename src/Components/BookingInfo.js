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

export const BookingInfo = ({ userData, setUserData }) => {
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
			setUserData(res.data);
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
	};

	return (
		<>
			<div className='fixed top-1 md:top-5 right-1 md:right-5'>
				<Fab
					color='primary'
					aria-label='add'
					onClick={() => setOpen(true)}
				>
					<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 16 16'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'></path>
					</svg>
				</Fab>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					<h2 className='m-0'>Hello there,</h2>
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
											{getDate(
												userData.slotBooked.startTime
											)}
										</p>
										<div>
											{!cancel ? (
												<button
													onClick={() =>
														setCancel(true)
													}
													className='py-1 px-2 cursor-pointer rounded-md mt-2 mb-1 border-2 border-solid border-red-500 bg-red-50'
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
											Note: You can only cancel a slot
											once.
										</p>
									</>
								) : (
									<p className='text-sm m-0'>
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
									Note: You can book a slot only when your
									payment is verified. The payment
									verification is done manually from our end.
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
					{userData && userData.qrCode && <Accordion>
						<AccordionSummary
							aria-controls='panel1a-content'
							id='panel1a-header'
							expandIcon={<ExpandMoreIcon />}
						>
							QR Code
						</AccordionSummary>

						<AccordionDetails>
							<div dangerouslySetInnerHTML={{ __html: userData.qrCode }} />
						</AccordionDetails>
					</Accordion>}
					<Accordion>
						<AccordionSummary
							aria-controls='panel1a-content'
							id='panel1a-header'
							expandIcon={<ExpandMoreIcon />}
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
							expandIcon={<ExpandMoreIcon />}
						>
							Disclaimer
						</AccordionSummary>
						<AccordionDetails>
							<ol className='m-0'>
								<li>
									Once your slot has been confirmed no changes
									will be allowed.
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
					<Button onClick={handleClose} autoFocus>
						DONE
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

const ExpandMoreIcon = () => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			stroke-width='0'
			viewBox='0 0 24 24'
			height='1em'
			width='1em'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
			<path d='M12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414z'></path>
		</svg>
	);
};

const getTime = (date) => {
	return new Date(date).toTimeString().substring(0, 5);
};

const getDate = (date) => {
	return new Date(date).toDateString();
};
