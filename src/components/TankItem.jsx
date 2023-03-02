import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function TankItem( props ) {
	return (
		<Card sx={{ 
			maxWidth: '25rem', 
			maxHeight: '35rem',
			margin: '30px'
		}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="180"
					image={props.img}
					alt="green iguana"
				/>
			</CardActionArea>
		</Card>
	);
}