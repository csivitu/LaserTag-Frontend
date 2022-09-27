import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Token() {
    const query = useQuery();

    const token = query.get('token');
    localStorage.setItem("token", token);
    localStorage.removeItem('state');

    return <Redirect to='/book' />;
}