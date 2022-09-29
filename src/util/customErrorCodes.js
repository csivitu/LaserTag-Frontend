export const customErrorCodes = (code) => {
	switch (code) {
		case 400:
			return 'Bad Request. Logout and Login again.';
		case 401:
			return 'Unauthorized. Try Logging out and Logging in.';
		case 403:
			return 'It looks like you haven\'t registered for Laser Tag yet. Logout and re-register with the same email you used for Gravitas Registrations.';
		case 404:
			return '404: Not Found';
		default:
			return false;
	}
};
