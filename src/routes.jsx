// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Index from './pages/index';
import MainApp from './pages/mainApp';
import NewEvent from './pages/newEvent';
import EventMngt from './pages/eventMngt';
import NewGuest from './pages/newGuest';
import GuestMngt from './pages/guestMngt';

const appRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/app" element={<MainApp />} />
				<Route path="/app/newevent" element={<NewEvent />} />
				<Route path="/app/newevent/:id" element={<NewEvent />} />
				<Route path="/app/event/:id" element={<EventMngt />} />
				<Route path="/app/newguest/:id" element={<NewGuest />} />
				<Route path="/app/guest" element={<GuestMngt />} />
			</Routes>
		</Router>
	);
};

export default appRoutes;
