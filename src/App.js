import './css/newApp.css';
import Book from './pages/book';
import Login from './Components/Login';
import Items from './Components/oauth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Scan from './pages/Scan';
import Admin from './pages/admin';
import Logout from './pages/logout';
import PageNotFound from './pages/404';
import AdminBook from './pages/adminBook'

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
					<Route exact path='/logout' element={<Logout />} />
					<Route exact path='/admin/book/:username' element={<AdminBook />}/>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
