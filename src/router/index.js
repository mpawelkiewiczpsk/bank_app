import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { AuthProvider } from "../contexts/Auth";
import Home from "../view/Home";
import Transactions from "../view/Transactions";
import Login from "../view/Login";
import Register from "../view/Register";


export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="transactions" element={<Transactions />} />
            </Routes>
        </AuthProvider>
    );
}
