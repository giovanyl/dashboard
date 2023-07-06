import {Routes,Route} from "react-router-dom";
import React from 'react';
import TemplateDashboard from './pages/template_dashboard'
import ReactDOM from 'react-dom/client';
import './CSS/main.css';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path = "/Templates/Dashboard" element = {<TemplateDashboard />} />
            </Routes>
        </div>
    )
};