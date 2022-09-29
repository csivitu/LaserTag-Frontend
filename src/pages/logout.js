import React, { useContext } from 'react';
import { ToastContext } from '../Components/GlobalAlert';

const Logout = () => {
	const { handleSnackOpen } = useContext(ToastContext);

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

	handleLogout();

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			Logging out...
		</div>
	);
};

export default Logout;
