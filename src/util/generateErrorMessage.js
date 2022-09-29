export const generateErrorMessage = (e) => {
	const code = e.response.status;

	if (code === 429) {
		return 'Too many requests. Try after 15 minutes!';
	} else if (code >= 500) {
		return 'Unkown server error.';
	} else if (e.response.data) {
		return e.response.data.error.message;
	} else {
		return e.message;
	}
};
