import * as React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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



export default function Mint( props ) {
	const url = `./imgs/mintTanks/mintTank-`;
	const array = [ 1, 2, 3, 4, 5, 6, 7 ];
	const tanks = array.map((i) => {
		return ( url + i + ".jpg" );
	})

	return (
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
							<ListItemButton key={i}>
								<ListItemIcon>
									<Avatar alt="Travis Howard" src={tank} />
								</ListItemIcon>
								<ListItemText primary={ `Tank ${ i+1 }` }/>
							</ListItemButton>
						))
					}
				</List>
				<Box>
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
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						justifyContent: 'space-between',
						alignItems: 'center',
						overflow: 'hidden',
						boxShadow: 1,
						fontWeight: 'bold',
						padding: '80px',
					}}
				>
					asdklfjlaskdj
				</Box>
			</Box>
		</Grid>
	);
}