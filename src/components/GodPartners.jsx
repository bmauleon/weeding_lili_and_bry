import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

export default function GodPartners() {
  return (
    <div>
      <Accordion sx={{backgroundColor: 'primary.main'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component='span' variant='body3' fontSize={20} color='white'>NUESTROS PADRINOS</Typography>
          {/* <Typography component="span" color='white'>Nuestros Padrinos</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ width: 1 }}>
            <CardActionArea>
              <CardContent>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE VELACIÓN</p></Typography>
                    <Typography align='center' variant='h6'>Guillermina López Aguilar</Typography>
                    <Typography align='center' variant='h6'>Rodrigo Luna Fonseca</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>MADRINA DE ANILLOS</p></Typography>
                    <Typography align='center' variant='h6'>Jaqueline Abigail González Aguilar</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE LAZO</p></Typography>
                    <Typography align='center' variant='h6'>María Idalia Nava Arrollo</Typography>
                    <Typography align='center' variant='h6'>Marco Antonio Peralta De La Vega</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE ARRAS</p></Typography>
                    <Typography align='center' variant='h6'>Julissa Peralta Reyes</Typography>
                    <Typography align='center' variant='h6'>Francisco Alan Peralta Reyes</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE COJÍN</p></Typography>
                    <Typography align='center' variant='h6'>Nereida Margot Peralta Marquez</Typography>
                    <Typography align='center' variant='h6'>José Luis López Aguilar</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE COPAS</p></Typography>
                    <Typography align='center' variant='h6'>Maricruz Villagomez Martínez</Typography>
                    <Typography align='center' variant='h6'>Aldo López Aguilar</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE PASTEL</p></Typography>
                    <Typography align='center' variant='h6'>Ileana Romano Godinez</Typography>
                    <Typography align='center' variant='h6'>Alan Yair Luna López</Typography>
                  </Grid>
                </Grid>
            </CardContent>
            </CardActionArea>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}