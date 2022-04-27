import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "../view/Home";
import Transactions from "../view/Transactions";
import React from "react";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="transactions" element={<Transactions />} />
        </Routes>
    );
}
