// import { useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
// import Book from './../Book';

export default function Items() {
    const [searchParams,setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    console.log({token});
    window.location.href = '/book';
    localStorage.setItem('token',token);
    return <></>;
}

