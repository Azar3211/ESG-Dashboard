import React from "react";
import { Routes, Route } from "react-router-dom";
import IndustryCodeSearch from '../components/IndustryCodeSearch';
import IndustryDetail from "../pages/IndustryDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndustryCodeSearch />} />
            <Route path="/industry/:id" element={<IndustryDetail />} />
        </Routes>
    );
};
export default AppRoutes;