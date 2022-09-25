// import { useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
// import Book from './../Book';

export default function Items() {
    const [searchParams,setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    console.log({token});
    window.location.href = 'http://localhost:3000/Book';
    localStorage.setItem('token',token);
    return <></>;
}

