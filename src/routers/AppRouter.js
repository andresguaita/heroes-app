import * as React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { LandingScreen } from "../components/Landing/Landing";
import { LoginScreen } from "../components/login/LoginScreen";

import { DasboardRoutes } from "./DasboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={
                
                 <LandingScreen/>
                  
                
                } />
                <Route path="/login" element={
                <PublicRoute>
                    <LoginScreen />
                  
                </PublicRoute>
                } />

                
                
                <Route path="/*" element={
                <PrivateRoute >
                    <DasboardRoutes />
                </PrivateRoute>
                 } />
                
                
            </Routes>
        
        </BrowserRouter>
    )
}
