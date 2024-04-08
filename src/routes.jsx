// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Index from './pages/index';
import MainApp from './pages/mainApp';

const appRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/app" element={<MainApp />} />
			</Routes>
		</Router>
	);
};

export default appRoutes;
