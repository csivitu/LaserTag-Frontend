import './css/App.css';
import Book from './pages/book';
import Login from './Components/Login';
import Items from './Components/oauth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/book" element={<Book />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/oauth/token" element={<Items />} />
        </Routes>
        {/* <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/book'>
            <Book />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route path = '/oauth'>
            <Items />
          </Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
