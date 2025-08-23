import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import GoogleMap from './GoogleMap';

export default function ActionAreaCard({title, text, map}) {
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
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}