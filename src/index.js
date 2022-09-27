import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

root.render(
	// <React.StrictMode>
	<ThemeProvider theme={darkTheme}>
		<App />
	</ThemeProvider>
	// </React.StrictMode>
);
