import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <>
            <Grid container sx={{backgroundColor: 'primary.main'}}>
                <Grid size="grow">
                </Grid>
                <Grid> 
                    <Typography align='center' variant='h6' m={2} color='white' sx={{ display: { xs: 'block', sm: 'none' } }}>
                        Estamos ansiosos porque llegue el gran día y disfrutar en compañia de todos nuestros seres queridos
                    </Typography>
                    <Typography align='center' variant='h4' m={2} color='white' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Estamos ansiosos porque llegue el gran día y disfrutar en compañia de todos nuestros seres queridos
                    </Typography>
                    <Typography align='center' variant='h6' m={2} color='white' sx={{ display: { xs: 'block', sm: 'none' } }}>
                        #JuntosPorSiempre
                        <br></br>
                        <Box
                            component="img"
                            sx={{ width: 100}}
                            alt="byl"
                            src="./src/assets/logo_white.png"
                            m="auto"
                        />
                    </Typography>
                    <Typography align='center' variant='h6' m={2} color='white' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        #JuntosPorSiempre
                        <br></br>
                        <Box
                            component="img"
                            sx={{ width: 100}}
                            alt="byl"
                            src="./src/assets/logo_white.png"
                            m="auto"
                        />
                    </Typography>
                </Grid>
                <Grid size="grow">
                </Grid>
            </Grid>
      </>
    );
}