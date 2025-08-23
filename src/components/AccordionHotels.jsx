import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ActionAreaCard from './ActionAreaCard';

export default function AccordionHotels() {
  return (
    <div>
      <Accordion sx={{backgroundColor: 'primary.main'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" color='white'>Mishol Hotel</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ActionAreaCard 
                title='Mishol Hotel'
                minutes='5'
                price='$700'
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4991031612!2d-99.6704769!3d16.701930600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca426437117ad5%3A0x3ab3939fec3c017b!2sHotel%20Mishol%20Bodas%20%26%20Beach%20Club%20Acapulco%20Diamante!5e0!3m2!1ses-419!2smx!4v1755138851457!5m2!1ses-419!2smx'
                phone='744-239-9010'
                reservations='https://www.mishol.com/'
            />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'primary.main'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" color='white'>Muúnek Hotel</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ActionAreaCard 
                title='Muúnek Hotel'
                minutes='5'
                price='$1000'
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.62591846972!2d-99.6447251!3d16.6955927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca436a32195051%3A0x41a48100f20f0adc!2sMu%C3%BAnek%20Hotel%20Boutique%20Art%20%26%20Spa!5e0!3m2!1ses-419!2smx!4v1755139413307!5m2!1ses-419!2smx'
                phone='744-105-6347'
                reservations='https://muunekhotel.com/'
            />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'primary.main'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" color='white'>Hotel Quinta Diamante</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ActionAreaCard 
                title='Hotel Quinta Diamante'
                minutes='7'
                price='$540'
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.700136318548!2d-99.6363233!3d16.691882399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca43f70eaf09d5%3A0x51b2e4f29fcd335d!2sHotel%20Quinta%20Diamante!5e0!3m2!1ses-419!2smx!4v1755139522552!5m2!1ses-419!2smx'
                phone='744-253-2335'
                reservations='https://hotelquintadiamante.com/'
            />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'primary.main'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" color='white'>Mar Paraiso Queen</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ActionAreaCard 
                title='Mar Paraiso Queen'
                minutes='15'
                price='$830'
                map='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.6323836105967!2d-99.7603878!3d16.7451846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5ceee3f34e37%3A0x343ddc4c711fe4d4!2sMar%20Para%C3%ADso%20Queen!5e0!3m2!1ses-419!2smx!4v1755139691907!5m2!1ses-419!2smx'
                phone='744-4444-5040'
                reservations='https://www.marparaisoqueen.mx/'
            />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}