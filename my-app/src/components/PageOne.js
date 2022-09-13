import React from 'react';
import {useNavigate} from "react-router-dom"
import { BasicTable } from './MyTable';

const PageOne = () => {
    const navigate = useNavigate();
    return (
        <>
          <h1>Page One</h1>
          <button onClick={()=>navigate("/pagetwo")}>PageTwo</button>
          <BasicTable/>
        </>
    )
};

export default PageOne;