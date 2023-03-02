// Toggle connection to MetaMask
import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const StyledButton = styled(Button)({
	position: 'absolute',
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: '0 auto',
	width: '120px'
});

export default function Home(props) {
	const isMetamaskInstalled = props.isMetamaskInstalled;
	const setIsMetamaskInstalled = props.setIsMetamaskInstalled;
	const [account, setAccount] = useState(null);
	
	useEffect(() => {
		if(window.ethereum){
			setIsMetamaskInstalled(true);
		}
	},[]);

	//Does the User have an Ethereum wallet/account?
	async function connectWallet(){
		//to get around type checking
		window.ethereum
			.request({
				method: "eth_requestAccounts",
			})
			.then((accounts) => {
				setAccount(accounts[0]);
				localStorage.setItem('tank_account', accounts[0]);
			})
			.catch((error) => {
				console.log(`Something went wrong: ${error}`);
			});
	}

	function disconnectWallet(){
		window.ethereum
            .request({
                method: "eth_requestAccounts",
				params: {}
            })
            .then((accounts) => {
				setAccount(accounts[0]);
				localStorage.setItem('tank_account', "");
            })
            .catch((error) => {
                console.log(`Something went wrong: ${error}`);
            });
	}

	function displayAddress( _val ){
		let tmp = _val;

		if( _val.length ){
			tmp = _val.slice(0,5);
			tmp += "...";
			tmp += _val.slice(-5);

			return tmp;
		}

		return null;
	}
	
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
					<Button variant="contained"
						onClick = { account ? disconnectWallet : connectWallet }
						sx={{
							width: '200px',
							wordWrap: "break-word"
						}}
					>
						{ 
							isMetamaskInstalled 
								? account === null
									? 'Connect'
									: displayAddress( account )
								: 'Install your metamask wallet.'
						}
					</Button>
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
								image={`./imgs/mintTanks/mintTank-3.jpg`}
								alt="green iguana"
							/>
						</CardActionArea>
					</Card>
				</Box>
			</Grid>
			<AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: -30 }}>
				<Toolbar>
					<StyledButton 
						variant="contained" 
						color="secondary" 
						endIcon={<SendIcon />}
						href="/minting/1"
					>
							Next
					</StyledButton>
				</Toolbar>
			</AppBar>
		</Grid>
	);
}