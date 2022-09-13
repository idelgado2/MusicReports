import React from 'react';
import {useNavigate} from "react-router-dom"
import { MyTable } from './MyTable';

  
const PageTwo = () => {
  const navigate = useNavigate();
  
  return (
  <>
     <h1>Page Two</h1>
     <button onClick={()=>navigate(-1)}>Go To PageOne</button>
     <MyTable/>
  </>
  )
};
  
export default PageTwo;