import React, {useState} from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FortIcon from '@mui/icons-material/Fort';
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';

import TankItem from './TankItem';

import Tank from '../Tank';

export default function StartPage( props ) {
	const pName1 = localStorage.getItem( 'tank1_name' );
	const pName2 = localStorage.getItem( 'tank2_name' );
	const img1 = localStorage.getItem( 'tank1_img' );
	const img2 = localStorage.getItem( 'tank2_img' );
	
	const handleMint = () => {
        if( ( pName1 && pName2 ) && ( pName1 !== pName2 ) ) {
			let tmp1 = new Tank( pName1 );
			let tmp2 = new Tank( pName2 );

			setTank1( tmp1 );
			setTank2( tmp2 );

			localStorage.setItem( 
				window.btoa( window.btoa( "tank player1" ) ), 
				window.btoa( window.btoa( JSON.stringify( tmp1 ) ) ) 
			);
			localStorage.setItem( 
				window.btoa( window.btoa( "tank player2" ) ), 
				window.btoa( window.btoa( JSON.stringify( tmp2 ) ) ) 
			);
		}
    };

	return (
		<Grid container flex direction="column" justifyContent="center" alignItems="center">
			<Grid container item flex justifyContent="flex-end" alignItems="center">
				<Box
					sx={{ 
						bgcolor: '#ffffff', 
						border: 'none', 
						marginTop: '10px',
						marginBottom: '20px',
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
				<Grid container flex direction="column" justifyContent="center" alignItems="center">
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'space-between',
                            alignItems: 'center',
							overflow: 'hidden',
							boxShadow: 1,
							fontWeight: 'bold',
							padding: '60px',
							marginTop: '60px',
						}}
					>
						<TankItem 
							pName = {pName1}
							img = { img1 }
						/>
						<Fab variant="extended" sx={{
								width: "15rem",
								height: "5rem",
								backgroundColor: 'white',
								marginTop: '23vh',
								fontSize: '2.5rem',
							}}

							onClick = { () => {
								setTimeout(() => {
									location.href = "battle";
								}, 200);
							}}
						>
							<FortIcon sx={{ mr: 1, fontSize: '2.5rem' }} />
							V S
						</Fab>
						<TankItem 
							pName = {pName2}
							img = { img2 }
						/>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
}