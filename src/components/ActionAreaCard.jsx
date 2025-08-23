import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import GoogleMap from './GoogleMap';

export default function ActionAreaCard({title, minutes, price, map, phone, reservations}) {
  return (
    <Card sx={{ width: 1 }}>
      <CardActionArea>
         <GoogleMap
          src={map}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            A {minutes} minutos de distancia de Palmerales Beach Club
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Habitaciones desde {price} por noche/persona
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Teléfono: <a href={"tel:" + phone}>{phone}</a>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Web: <a href={reservations} target="_blank">{reservations}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}