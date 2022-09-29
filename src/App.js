import './css/newApp.css';
import Book from './pages/book';
import Login from './Components/Login';
import Items from './Components/oauth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Scan from './pages/Scan';
import Admin from './pages/admin';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/book' element={<Book />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/oauth/token' element={<Items />} />
					<Route exact path='/scan/:username' element={<Scan />} />
					<Route exact path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
