import './css/App.css';
import Information from './Components/Information';
import { useState,useEffect } from 'react';
import {CircularProgress} from '@mui/material';
import { UserInfo } from './Components/axios';
import PageView from './PageView';

function App() {
  const [viewport,setViewPort] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      UserInfo();
      setViewPort(true);
    },1000)
  });


  return (
  // <>{viewport ? <Information /> : <div>
  //     <CircularProgress />
  //     </div>}</>
  <>{viewport ? <Information /> : <div>
      <CircularProgress />
      </div>}</>
  );
}

export default App;
