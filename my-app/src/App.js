import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { filterToGo, FilterContext } from './components/MyContext';

function App() {
    // const [filter, setFilterContext] = userState({
    //     filter: "apples",
    //     updateFilter
    // });
    // const updateFilter = () => {
    //     setFilterContext()
    // }
    return (
        <>
            <FilterContext.Provider value={"apples"}>
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<PageOne/>}/>
                        <Route exact path="/pagetwo" element={<PageTwo/>}/>
                    </Routes>
                </BrowserRouter>
            </FilterContext.Provider>
        </>
    );
}

export default App;
