import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TextField from '@mui/material/TextField';
import FortIcon from '@mui/icons-material/Fort';
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Mint( props ) {
	const url = `../imgs/mintTanks/mintTank-`;
	const array = [ 1, 2, 3, 4, 5, 6, 7 ];
	const tanks = array.map((i) => {
		return ( url + i + ".jpg" );
	});
	const account = localStorage.getItem( "tank_account" ) ? localStorage.getItem( "tank_account" ) : null;
	const tank1 = "tank1";
	const [ pName, setPName ] = useState( "" )
	const [ curTank, setCurTank ] = useState( tanks[2] );
	const [ health, setHealth ] = useState(0);
	const [ attack, setAttack ] = useState(0);
	const [ shield, setShield ] = useState(0);
	const [ speed, setSpeed ] = useState(0);
	const [ power, setPower ] = useState(0);

	function selectCurTank( e, v ){
		setCurTank( v );
	}

	function setProperties(){
        localStorage.setItem( `${tank1}_health`, getProperty( 0.3, 0.4 ) );
		localStorage.setItem( `${tank1}_attack`, getProperty( 0.1, 0.3 ) );
		localStorage.setItem( `${tank1}_shield`, getProperty( 0, 0.2 ) );
		localStorage.setItem( `${tank1}_speed`, getProperty( 0, 0.1 ) );

		setHealth ( localStorage.getItem( `${tank1}_health` ) );
        setAttack ( localStorage.getItem( `${tank1}_attack` ) );
		setShield ( localStorage.getItem( `${tank1}_shield` ) );
        setSpeed ( localStorage.getItem( `${tank1}_speed` ) );
    }

    function getProperty( sVal, eVal) {
        return Math.floor( ( Math.random() * ( eVal - sVal ) + sVal ) * 100000 ) / 100000;
    }

	function handleSetProperty( e ){
		setProperties();
	}

	useEffect(() => {
		setProperties();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'hidden',
				boxShadow: 1,
				fontWeight: 'bold',
				padding: '10px',
			}}
		>
			{
				account ?
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'space-between',
							alignItems: 'center',
							overflow: 'hidden',
							fontWeight: 'bold',
							padding: '80px',
						}}
					>
						<List
							sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
							component="nav"
							aria-labelledby="nested-list-subheader"
							subheader={
								<ListSubheader component="div" id="nested-list-subheader"
									sx={{
										fontWeight: 'bold',
										color: 'text.primary',
										fontSize: '18px',
									}}
								>
									Tank List
								</ListSubheader>
							}
						>
							{ 
								tanks.map((tank, i) => (
									<ListItemButton key={i} onClick={ (e) => {
										selectCurTank( e, tank )
										handleSetProperty( e );
									}}>
										<ListItemIcon>
											<Avatar alt="Travis Howard" src={tank} />
										</ListItemIcon>
										<ListItemText primary={ `Tank ${ i+1 }` } />
									</ListItemButton>
								))
							}
						</List>
						<Box>
							<Card>
								<CardActionArea>
									<CardMedia
										component="img"
										image={curTank}
										alt="green iguana"
										sx={{
											width: "70%"
										}}
									/>
									<Box 
										sx={{
											marginLeft: '10%',
										}}
									>
										<Typography component="div" variant="h5">
											Property
										</Typography>
										<Typography component="div" variant="h6">
											Health: {health}
										</Typography>
										<Typography component="div" variant="h6">
											Attack: {attack}
										</Typography>
										<Typography component="div" variant="h6">
											Shied: {shield}
										</Typography>
										<Typography component="div" variant="h6">
											Speed: {speed}
										</Typography>
									</Box>
								</CardActionArea>
								<CardActions>
									<Box 
										sx={{
											marginLeft: '10%',
											display: 'flex',
											flexDirection: { xs: 'column', md: 'row' },
											justifyContent: 'center',
											overflow: 'hidden',
											boxShadow: 'none',
											marginRight: '0'
										}}
									>
										<TextField 
											placeholder={`Player${props.player} Name:`} 
											variant="outlined"
											value={pName}
											onInput={(e) => {
												setPName(e.target.value);
												localStorage.setItem( "tank1_name", e.target.value );
											}}
										/>
										<Button variant="extended" sx={{
												width: "10rem",
											}}
											href = {
												pName
													? props.player === 1 ? "/minting/2" : "/start"
													: null
											}
											disabled = { !pName }
										>
											<AutoAwesomeIcon sx={{ mr: 1 }} />
											Mint
										</Button>
									</Box>
								</CardActions>
							</Card>
						</Box>
					</Box>
				: 
					<Button variant="contained" href="/">
						Redirect
					</Button>
			}
		</Box>
	);
}