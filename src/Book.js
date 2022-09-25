import Information from './Components/Wireframe/Information';
import { useState,useEffect } from 'react';
import {CircularProgress} from '@mui/material';
import { UserInfo } from './Components/axios';
import PageView from './Components/PageView';

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
  <>{viewport ? <PageView /> : <div>
      <CircularProgress />
      </div>}</>
  );
}

export default App;
