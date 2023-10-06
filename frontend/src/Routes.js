import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/navbar3" element={<NavbarProPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes
