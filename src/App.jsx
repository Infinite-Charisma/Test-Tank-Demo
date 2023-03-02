import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Mint from './components/Mint';
import Board from './components/Board';

import "./App.css";

// let's start and enjoy!!!
// Good Luck ~~ !
//init( 50, 50 );x

function App() {
	const [p1Name, setP1Name] = useState("");
	const [p2Name, setP2Name] = useState("");
	const [img1, setImg1] = useState( '' );
	const [img2, setImg2] = useState( '' );
	const [tank1, setTank1] = useState( '' );
	const [tank2, setTank2] = useState( '' );

	const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
	const [ethereumAccount, setEthereumAccount] = useState(null);

	useEffect(() => {
		return () => {
			console.log(p1Name, p2Name);
		};
	}, [p1Name, p2Name]);

	useEffect( () => {
		setImg1( `./imgs/mintTanks/mintTank-${Math.floor(Math.random() * 7) + 1}.jpg` );
		setImg2( `./imgs/mintTanks/mintTank-${Math.floor(Math.random() * 7) + 1}.jpg` );
	}, []);

	return (
		<Routes>
			<Route
				index
				element={
					<Home
						isMetamaskInstalled = {isMetamaskInstalled} setIsMetamaskInstalled = {setIsMetamaskInstalled}
						ethereumAccount = {ethereumAccount} setEthereumAccount = {setEthereumAccount}
					/>
				}
			/>
			<Route
				path="minting"
				element={
					<Mint
						
					/>
				}
			/>
			<Route path="battle" element={<Board tank1 = {tank1} tank2 = {tank2} />} />
		</Routes>
	);
}

export default App;
