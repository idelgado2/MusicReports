import React from 'react';
import {useNavigate} from "react-router-dom"

const PageOne = () => {
    const navigate = useNavigate();
    return (
        <>
          <h1>Page One</h1>
          <button onClick={()=>navigate("/pagetwo")}>PageTwo</button>
        </>
    )
};

export default PageOne;