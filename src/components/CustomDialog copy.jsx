import React, { Fragment, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {ethers} from '../ethers';
import * as C from '../const';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomDialog = ( props ) => {
	const [state, setState] = React.useState({
		snack: false,
		vertical: 'bottom',
		horizontal: 'right',
		message: 'Wallet Connected',
		color: 'success'
	});

	const { vertical, horizontal, snack, message, color } = state;

	const handleSnackClose = () => {
		setState({ ...state, snack: false });
	};

	const open = props.open;
	const setOpen = props.setOpen;
	const winnerName = props.winnerName;
	
	const handleClose = () => {
		localStorage.clear();
		setOpen(false);
		
		setTimeout(() => {
			location.href="/"
		}, 300);
	};

	const tankMintContractWithSigner = props.tankMintContractWithSigner;
	const [ endFlg, setEndFlg ] = useState( false );
	
	const handleToWinners = ( ) => {
		toWinner();
	}
	
	// Function to send reward to the winner
	const toWinner = async () => {
		const options = {value: ethers.utils.parseEther( C.AMOUNT )}
		console.log(options)
		
		try {
			const tx = await tankMintContractWithSigner.sendRewardToWinner( C.WINNER, options );
			await tx.wait();
			setEndFlg( true );
			console.log('Reward sent to the winner!');

			setTimeout(() => {
				location.href = "battle"
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	}

	
	useEffect(() => {
		handleToWinners();
	}, []);

	return (
		<Fragment>
			<Dialog
				fullWidth={true}
				maxWidth={"sm"}
				open={open}
			>
				<DialogTitle> Result </DialogTitle>
				<Divider/>
				<DialogContent sx={{
					height: '8rem'
				}}>
					<Grid container flex justifyContent="center" alignItems="center">
						<EmojiEventsIcon sx={{
							width: '7rem', height: '7rem',
							boxShadow: '0 0 0.25em 0.25em rgba(0, 0, 0, 0.25)',
							borderRadius: '3vw 4vw 8vw 2vw',
							color: 'gold'
						}}/>
						<Typography variant='h1'>
							{ winnerName } 
						</Typography>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button 
						variant="contained"
						disabled = { endFlg ? false : true }
						onClick={ handleClose }
					>
						Restart
					</Button>
					<Button 
						onClick={ handleClose } 
						variant="contained"
						disabled = { endFlg ? false : true }
					>
						Close
					</Button>
				</DialogActions>
				<Snackbar 
					anchorOrigin={{ vertical, horizontal }}
					open={snack} 
					autoHideDuration={3000} 
					onClose={handleSnackClose}
					key={vertical + horizontal}
				>
					<Alert onClose={handleSnackClose} severity={color} sx={{ width: '100%' }}>
						{ message }
					</Alert>
				</Snackbar>
			</Dialog>
		</Fragment>
	);
}

export default CustomDialog;