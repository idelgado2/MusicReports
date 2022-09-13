import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<PageOne/>}/>
                    <Route exact path="/pagetwo" element={<PageTwo/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
