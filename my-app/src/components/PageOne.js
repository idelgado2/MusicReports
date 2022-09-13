import React from 'react';
import {useNavigate} from "react-router-dom"
import { MyTable } from './MyTable';

const PageOne = () => {
    const navigate = useNavigate();

    return (
        <>
          <h1>Page One</h1>
          <button onClick={()=>{navigate("/pagetwo");}}>PageTwo</button>
          <MyTable/>
        </>
    )
};

export default PageOne;