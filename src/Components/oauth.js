// import { useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Book from './../Book';

export default function Items() {
    const [searchParams,setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    console.log({token});
    // const {search} = useLocation().search;
    // const token = new URLSearchParams(search).get('token');
    // console.log({token});
    window.location.href = 'http://localhost:3000/Book';
    <Book token = {token}></Book>
    return <></>
}

