import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ListComments from './ListComments';

export default function CommentsCard() {
  return (
    <Card sx={{ width: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/images/principal_comments_mobile.jpeg"
          alt="Sus mejores deseos"
          sx={{ width: 1, height: { xs: 350, md: 450 }, display: { xs: 'block', sm: 'none' }}}
        />
        <CardMedia
          component="img"
          image="/images/principal_comments_desktop.jpeg"
          alt="Sus mejores deseos"
          sx={{ width: 1, height: { xs: 350, md: 450 }, display: { xs: 'none', sm: 'block' }}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Para los futuros esposos
          </Typography>
          <ListComments />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}