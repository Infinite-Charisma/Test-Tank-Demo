import React, { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

// let's start and enjoy!!!
// Good Luck ~~ !
//init( 50, 50 );x

function App() {
	/* const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
	const [ethereumAccount, setEthereumAccount] = useState(null);
	
	useEffect(() => {
		if(window.ethereum){
			setIsMetamaskInstalled(true);
		}
	},[]);
	
	//Does the User have an Ethereum wallet/account?
	async function connectMetamaskWallet(){
		//to get around type checking
		window.ethereum
			.request({
				method: "eth_requestAccounts",
			})
			.then((accounts) => {
				setEthereumAccount(accounts[0]);
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
			});
	}
	
	if (ethereumAccount === null) {
		return (
			<div className="App App-header">
			{
				isMetamaskInstalled ? (
				<div>
					<img src={logo} alt="logo" />
					<button onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
				</div>
				) : (
					<p>Install Your Metamask wallet</p>
				)
			}
		
			</div>
		);
	} */
	
	return (
		<Grid container flex direction="column" justifyContent="center" alignItems="center">
			<Grid container item flex justifyContent="flex-end" alignItems="center">
				<Box
					sx={{ 
						bgcolor: '#ffffff', 
						border: 'none', 
						marginBottom: '10px',
						marginRight: '30px'
					}} 
				>
					<LoadingButton
						loading
						loadingPosition="start"
						startIcon={<SaveIcon />}
						variant="outlined"
					>
						Connecting
					</LoadingButton>
				</Box>
			</Grid>
			<Grid container item flex justifyContent="center" alignItems="center">
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						overflow: 'hidden',
						boxShadow: 1,
						fontWeight: 'bold',
						maxHeight: '90vh',
					}}
				>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								image={`./imgs/mintTanks/mintTank-${Math.floor(Math.random() * 7) + 1}.jpg`}
								alt="green iguana"
							/>
						</CardActionArea>
					</Card>
				</Box>
			</Grid>
		</Grid>
	);
}

export default App;
