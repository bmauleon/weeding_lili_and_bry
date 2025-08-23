import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function CardGifts() {
  return (
    <>
        <Box m={5}>
            <Card sx={{ maxWidth: 1 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="120"
                width={1}
                image="./src/assets/logo/liverpool.png"
                alt="liverpool"
                />
            </CardActionArea>
            <CardActions>
                <Button href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51713096" target="_blank" size="large" color="secondary" variant="contained" sx={{width: 1}}>
                IR A LA MESA DE REGALOS
                </Button>
            </CardActions>
            </Card>
        </Box>
        <Box m={5}>
            <Card sx={{ maxWidth: 1 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="120"
                width={1}
                image="./src/assets/logo/amazon.png"
                alt="amazon"
                />
            </CardActionArea>
            <CardActions>
                <Button href="https://www.amazon.com.mx/wedding/registry/2LVUCDNNK7W0Y" target="_blank" size="large" color="secondary" variant="contained" sx={{width: 1}}>
                IR A LA MESA DE REGALOS
                </Button>
            </CardActions>
            </Card>
        </Box>
    </>
  );
}
