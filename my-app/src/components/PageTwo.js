import React from 'react';
import {useNavigate} from "react-router-dom"
  
const PageTwo = () => {
  const navigate = useNavigate();
  
  return (
  <>
     <h1>PageTwo</h1>
     <button onClick={()=>navigate(-1)}>Go To PageOne</button>
  </>
  )
};
  
export default PageTwo;