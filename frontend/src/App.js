import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents'; 

// Import AddEmployeeComponent
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<ListEmployeeComponent />} />
                        <Route path="/employees" element={<ListEmployeeComponent />} />
                        <Route path="/add-employee" element={<AddEmployeeComponent />} /> 
                        <Route path="/update-employee/:id" element={<AddEmployeeComponent />} />
                    </Routes>
                </div>
                <FooterComponents /> {/* Corrected component name */}
            </Router>
        </div>
    );
}

export default App;
