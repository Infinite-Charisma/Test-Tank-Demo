import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Mint from './components/Mint';
import StartPage from './components/StartPage';
import Board from './components/Board';

import "./App.css";

function App() {
	const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);

	return (
		<Routes>
			<Route
				index
				element={
					<Home
						isMetamaskInstalled = { isMetamaskInstalled } setIsMetamaskInstalled = { setIsMetamaskInstalled }
					/>
				}
			/>
			<Route
				path="minting/1"
				element={
					<Mint
						player = {1}
					/>
				}
			/>
			<Route
				path="minting/2"
				element={
					<Mint
						player = {2}
					/>
				}
			/>
			<Route path="start" 
				element={
					<StartPage/>} 
			/>
			<Route path="battle" element={<Board/>} />
		</Routes>
	);
}

export default App;
