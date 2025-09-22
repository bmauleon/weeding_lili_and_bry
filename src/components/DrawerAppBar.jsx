import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Countdown from './Countdown';
import ActionAreaCard from './ActionAreaCard';
import ActionAreaCardMap from './ActionAreaCardMap';
import AccordionHotels from './AccordionHotels';
import StandardImageList from './StandardImageList';
import CheckIcon from '@mui/icons-material/Check';
import VerticalLinearStepper from './VerticalLinearStepper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentsCard from './CommentsCard';
import BasicSpeedDial from './BasicSpeedDial';
import Footer from './Footer';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CardGifts from './CardGifts';
import GodPartners from './GodPartners';

const drawerWidth = 240;
const navItems = ['15-03-2026', 'Ubicación', 'Itinerarío', 'Vestimenta', 'Hospedajes', 'Galería', 'Deseos', 'Mesa de regalos'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    // Box of side nav
    <Box
      color="black"
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'white',
        height: 1
      }}
    >
      <Box
        component="img"
        sx={{ width: 1 }}
        alt="byl"
        src="/images/logo_white.png"
        disablePadding
      />
      {/* <Divider /> */}
      <List disablePadding>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding divider>
            <ListItemButton sx={{ textAlign: 'center' }} href={"#" + item} >
              {/* <ListItemIcon><MapRoundedIcon/></ListItemIcon> */}
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} >
            <Button
              variant="contained"
              href='#asistencia'
              endIcon={<CheckIcon />}>
              Confirmar asistencia
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // Box of principal nav
    <Box sx={{
      display: 'flex',
      backgroundImage: `url(/images/fondo_mar.jpeg)`,
      backgroundRepeat: "repeat",
      backgroundSize: "none"
    }}>
      <CssBaseline />
      <AppBar component="nav" color='primary'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            align='center'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box
              component="img"
              sx={{ width: 50, height: 50 }}
              alt="byl"
              src="/images/logo_white.png"
              disablePadding
            />
          </Typography>
          <Typography
            variant="h5"
            component="div"
            align='center'
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
          >
            <Box
              component="img"
              sx={{ width: 60 }}
              alt="byl"
              src="/images/logo_white.png"
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} href={"#" + item}>
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              color='secondary'
              href='#Ubicación'
              endIcon={<CheckIcon />}>
              Confirmar asistencia
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ width: 1 }}>
        <Toolbar />
        <Grid container>
          <Grid size={{ xs: 12 }} sx={{
            display: { xs: 'block', sm: 'none' }
          }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile.jpeg"
            />
          </Grid>
          <Grid size={{ xs: 12 }} sx={{
            display: { xs: 'none', sm: 'block' }
          }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_desktop.jpeg"
            />
          </Grid>
        </Grid>
        <div id='15-03-2026'>
        <Grid container pb={5}>
          <Grid size={{ xs: 12, md: 12 }} sx={{ width: 1 }}>
            <Typography align='center' variant="h3">
              <p>Faltan</p>
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Countdown />
            </Box>
            <Typography align='center' variant="h3">
              <p>para el gran día</p>
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="img"
                sx={{ width: 1, maxHeight: 180, minHeight: 140, maxWidth: 650 }}
                alt="Date"
                src="/images/fecha.jpeg"
              />
            </Box>

            <Box pt={5} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Grid container pb={2}>
                <Grid size="grow">
                </Grid>
                <Grid size={{ xs: 10, md: 5 }}>
                  <Grid container>
                    <Grid size={6} sx={{ borderRight: '2px solid #526534' }}>
                      <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRES DE LA NOVIA</p></Typography>
                      <Typography align='center' variant='h6'>Elvia Aguilar Ríos</Typography>
                      <Typography align='center' variant='h6'>José Tomás González González<Box component="img" sx={{ width: 15 }} src="/images/logo/christian_cross.svg"/></Typography>
                    </Grid>
                    <Grid size={6} sx={{ borderLeft: '2px solid #526534' }}>
                      <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRES DEL NOVIO</p></Typography>
                      <Typography align='center' variant='h6'>Gina Peralta De La Vega</Typography>
                      <Typography align='center' variant='h6'>Jorge Mauleón Barradas<Box component="img" sx={{ width: 15 }} src="/images/logo/christian_cross.svg"/></Typography>
                    </Grid>
                  </Grid>
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
                    <Typography align='center' variant='h6'>Maricruz Villagómez Martínez</Typography>
                    <Typography align='center' variant='h6'>Aldo Mario López Aguilar</Typography>
                  </Grid>
                  <Grid size={12}>
                    <Divider orientation="vertical" flexItem />
                    <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRINOS DE PASTEL</p></Typography>
                    <Typography align='center' variant='h6'>Ileana Romano Godínez</Typography>
                    <Typography align='center' variant='h6'>Alan Yair Luna López</Typography>
                  </Grid>
                </Grid>
                <Grid size="grow">
                </Grid>
              </Grid>
            </Box>

            <Box pt={5} sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Grid container pb={2}>
                <Grid size="grow">
                </Grid>
                <Grid size={10}>
                  <Grid container>
                    <Grid size={6} sx={{ borderRight: '2px solid #526534' }}>
                      <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRES DE LA NOVIA</p></Typography>
                      <Typography align='center' variant='h6'>Elvia Aguilar Ríos</Typography>
                      <Typography align='center' variant='h6'>Tomás González González<Box component="img" sx={{ width: 15 }} src="/images/logo/christian_cross.svg"/></Typography>
                    </Grid>
                    <Grid size={6} sx={{ borderLeft: '2px solid #526534' }}>
                      <Typography align='center' variant='body3' fontWeight='fontWeightBold' fontSize={20} color={'primary.main'}><p>PADRES DEL NOVIO</p></Typography>
                      <Typography align='center' variant='h6'>Gina Peralta De La Vega</Typography>
                      <Typography align='center' variant='h6'>Jorge Mauleón Barradas<Box component="img" sx={{ width: 15 }} src="/images/logo/christian_cross.svg"/></Typography>
                    </Grid>
                  </Grid>
                  <Grid container pt={5}>
                    <Grid size="grow">
                    </Grid>
                    <Grid size={12}>
                      <GodPartners />
                    </Grid>
                    <Grid size="grow">
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size="grow">
                </Grid>
              </Grid>
            </Box>

          </Grid>
        </Grid>
        </div>

        <div id='Ubicación'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Ubicación</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography align='center' variant='body1' m={5}>
                La ceremonia religiosa y la recepción se llevarán a cabo en el mismo lugar:
              </Typography>
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
          <Grid container pb={2}>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, sm: 5 }}>
              <ActionAreaCardMap
                title='Palmerales Beach Club'
                text='Carretera Acapulco-Barra Vieja Km30.5, Ent. Potrero - Lomas, 39936 Acapulco de Juárez, Guerrero.'
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.582935836122!2d-99.66003102480218!3d16.697741122305928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca433f386c7f8f%3A0xd80860b0f5b483d5!2sPALMERALES%20BEACH%20CLUB!5e0!3m2!1ses!2smx!4v1748473576234!5m2!1ses!2smx'
              />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography align='center' variant='body1' m={5}>
                Nuestros pequeños invitados también son muy importantes para nosotros, por lo que deseamos que también estén presentes en un día tan importante. 
                <br></br>Por esta razón pedimos apoyo por parte de los papás con su supervisión en todo momento durante el evento ya que el lugar es a pie de playa.
              </Typography>
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: 'secondary.main' }}>
          <Grid container>
            <Grid size={6} p={5}>
              <Typography align='center' variant='h3' p={5}>Ubicación</Typography>
              <Typography align='center' variant='body1' m={5}>
                La ceremonia religiosa y la recepción se llevarán a cabo en el mismo lugar:
              </Typography>
              <ActionAreaCardMap
                title='Palmerales Beach Club'
                text='Carretera Acapulco-Barra Vieja Km30.5, Ent. Potrero - Lomas, 39936 Acapulco de Juárez, Guerrero.'
                map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.582935836122!2d-99.66003102480218!3d16.697741122305928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca433f386c7f8f%3A0xd80860b0f5b483d5!2sPALMERALES%20BEACH%20CLUB!5e0!3m2!1ses!2smx!4v1748473576234!5m2!1ses!2smx'
              />
            </Grid>
            <Grid size={6} p={5}>
              <Typography align='center' variant='h3' p={5}>Confirmar asistencia</Typography>
              <Typography align='center' variant='body1' ml={5} mr={5}>
                Nos complace enormemente contar contigo para un día tan especial como lo será nuestra boda.
                Para una adecuada organización del evento, te agradeceríamos que confirmaras tu asistencia a más tardar el
                <Box fontWeight='fontWeightBold' display='inline' color={'primary.main'}> 30 de noviembre de 2025.</Box>
                <br></br><br></br>En caso de no recibir tu confirmación antes de esa fecha, lamentablemente entenderemos que no podrás acompañarnos,
                lo cual nos causaría mucha pena, pero respetaremos tu decisión con todo cariño.
                <br></br><br></br>Esperamos contar con tu presencia y compartir juntos este momento tan importante.
                <br></br><br></br>Con afecto,
                Liliana & Bryant.
              </Typography>
              <VerticalLinearStepper />
            </Grid>
          </Grid>
        </Box>
        </div>
        

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile2.jpeg"
            />
          </Grid>
        </Grid>

        <div id='Itinerarío'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} mb={5}>
          <Grid container>
            {/* <Grid size="grow">
            </Grid> */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                sx={{ width: 1 }}
                alt="Itinerarío"
                src="/images/itinerario.jpeg"
              />
            </Grid>
            {/* <Grid size="grow">
            </Grid> */}
          </Grid>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }} id='Itinerarío'>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 5 }}>
              <Box
                component="img"
                sx={{ width: 1 }}
                alt="Itinerarío"
                src="/images/itinerario.jpeg"
              />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile_comodin.jpeg"
            />
          </Grid>
        </Grid>

        <div id='Vestimenta'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }} mb={5}>
          <Grid container>
            {/* <Grid size="grow">
            </Grid> */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                sx={{ width: 1 }}
                alt="Vestimenta"
                src="/images/vestimenta.jpeg"
              />
            </Grid>
            {/* <Grid size="grow">
            </Grid> */}
          </Grid>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }} id='Vestimenta'>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 5 }}>
              <Box
                component="img"
                sx={{ width: 1 }}
                alt="Vestimenta"
                src="/images/vestimenta.jpeg"
              />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile3.jpeg"
            />
          </Grid>
        </Grid>

        <div id='asistencia'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Confirmar asistencia</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography align='center' variant='body1' ml={5} mr={5}>
                Nos complace enormemente contar contigo para un día tan especial como lo será nuestra boda.
                Para una adecuada organización del evento, te agradeceríamos que confirmaras tu asistencia a más tardar el
                <Box fontWeight='fontWeightBold' display='inline' color={'primary.main'}> 30 de noviembre de 2025.</Box>
                <br></br><br></br>En caso de no recibir tu confirmación antes de esa fecha, lamentablemente entenderemos que no podrás acompañarnos,
                lo cual nos causaría mucha pena, pero respetaremos tu decisión con todo cariño.
                <br></br><br></br>Esperamos contar con tu presencia y compartir juntos este momento tan importante.
                <br></br><br></br>Con afecto,
                Liliana & Bryant.
              </Typography>
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
          <Grid container pb={2}>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 5 }}>
              <VerticalLinearStepper />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile4.jpeg"
            />
          </Grid>
        </Grid>

        <div id='Hospedajes'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          {/* Mobile hotels */}
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Hospedajes</Typography>
            </Grid>
            <Grid size={12}>
              <Typography align='center' variant='body1' ml={5} mr={5} mb={5}>
                Estamos muy emocionados de tenerte con nosotros para esta ocasión tan especial. 
                <br></br>Para ayudarte a planear tu estancia, te dejamos algunas opciones de hospedaje cercanas y cómodas:
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 6 }}>
              <AccordionHotels />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: 'secondary.main' }}>
          {/* Desktop Hotels */}
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Hospedajes</Typography>
            </Grid>
            <Grid size={12}>
              <Typography align='center' variant='body1' ml={5} mr={5} mb={5}>
                Estamos muy emocionados de tenerte con nosotros para esta ocasión tan especial. 
                <br></br>Para ayudarte a planear tu estancia, te dejamos algunas opciones de hospedaje cercanas y cómodas:
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }} p={2}>
              <ActionAreaCard 
                  title='Mishol Hotel'
                  minutes='5'
                  price='$700'
                  map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4991031612!2d-99.6704769!3d16.701930600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca426437117ad5%3A0x3ab3939fec3c017b!2sHotel%20Mishol%20Bodas%20%26%20Beach%20Club%20Acapulco%20Diamante!5e0!3m2!1ses-419!2smx!4v1755138851457!5m2!1ses-419!2smx'
                  phone='744-239-9010'
                  reservations='https://www.mishol.com/'
                  extras=''
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} p={2}>
              <ActionAreaCard 
                  title='Muúnek Hotel'
                  minutes='5'
                  price='$1000'
                  map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.62591846972!2d-99.6447251!3d16.6955927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca436a32195051%3A0x41a48100f20f0adc!2sMu%C3%BAnek%20Hotel%20Boutique%20Art%20%26%20Spa!5e0!3m2!1ses-419!2smx!4v1755139413307!5m2!1ses-419!2smx'
                  phone='744-105-6347'
                  reservations='https://muunekhotel.com/'
                  extras='Utiliza el código Liliana&Bryant al realizar tu reservación para obtener un 10% de descuento.'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} p={2}>
              <ActionAreaCard 
                  title='Hotel Quinta Diamante'
                  minutes='7'
                  price='$540'
                  map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.700136318548!2d-99.6363233!3d16.691882399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca43f70eaf09d5%3A0x51b2e4f29fcd335d!2sHotel%20Quinta%20Diamante!5e0!3m2!1ses-419!2smx!4v1755139522552!5m2!1ses-419!2smx'
                  phone='744-253-2335'
                  reservations='https://hotelquintadiamante.com/'
                  extras=''
              />
            </Grid><Grid size={{ xs: 12, md: 3 }} p={2}>
              <ActionAreaCard 
                  title='Mar Paraiso Queen'
                  minutes='15'
                  price='$830'
                  map='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.6323836105967!2d-99.7603878!3d16.7451846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca5ceee3f34e37%3A0x343ddc4c711fe4d4!2sMar%20Para%C3%ADso%20Queen!5e0!3m2!1ses-419!2smx!4v1755139691907!5m2!1ses-419!2smx'
                  phone='744-4444-5040'
                  reservations='https://www.marparaisoqueen.mx/'
                  extras=''
              />
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }} mt={3}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile5.jpeg"
            />
          </Grid>
        </Grid>
        
        <div id='Mesa de regalos'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Mesa de regalos</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 12 }}>
              <Typography align='center' variant='body1' ml={5} mr={5}>
                El mejor regalo es compartir este momento tan especial con ustedes.<br></br>
                Si desean obsequiarnos algo adicional, hemos preparado una mesa de regalos que nos ayudará a comenzar esta nueva etapa juntos.
              </Typography>
              <CardGifts />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>

        <Box p={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid container>
            <Grid size={6} pr={25} pl={25}>
              <Typography align='center' variant='h3' p={2}>Mesa de regalos</Typography>
              <Typography align='center' variant='body1' ml={5} mr={5}>
                El mejor regalo es compartir este momento tan especial con ustedes.<br></br>
                Si desean obsequiarnos algo adicional, hemos preparado una mesa de regalos que nos ayudará a comenzar esta nueva etapa juntos.
              </Typography>
              <CardGifts />
            </Grid>
            <Grid size={6} pr={25} pl={25}>
              <Box
                component="img"
                sx={{height: 700 }}
                alt="Save the date"
                src="/images/principal_mobile2.jpeg"
              />
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ width: 1, display: { xs: 'block', sm: 'none' } }} mt={3}>
            <Box
              component="img"
              sx={{ width: 1 }}
              alt="Save the date"
              src="/images/principal_mobile6.jpeg"
            />
          </Grid>
        </Grid>
        
        <div id='Galería'>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Nuestra historia en fotos</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 12 }}>
              <StandardImageList />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: 'secondary.main' }}>
          <Grid container>
            <Grid size={12}>
              <Typography align='center' variant='h3' p={5}>Nuestra historia en fotos</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size="grow">
            </Grid>
            <Grid size={{ xs: 10, md: 12 }}>
              <StandardImageList />
            </Grid>
            <Grid size="grow">
            </Grid>
          </Grid>
        </Box>
        </div>

        <Grid>
          <Grid size={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ backgroundColor: 'primary.main' }}
            >
              <Typography align='center' variant='h5' m={2} color='white' sx={{ display: { xs: 'block', sm: 'none' } }}>
                "Que amable ha sido la vida por hacerte existir y más aún por hacernos coincidir."
              </Typography>
              <Typography align='center' variant='h3' m={5} color='white' sx={{ display: { xs: 'none', sm: 'block' } }}>
                "Que amable ha sido la vida por hacerte existir y más aún por hacernos coincidir."
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container id='Deseos'>
          <Grid size={12}>
            <Typography align='center' variant='h3' p={5}>Los mejores deseos...</Typography>
          </Grid>
        </Grid>
        <Grid container pb={2}>
          <Grid size="grow">
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <CommentsCard />
          </Grid>
          <Grid size="grow">
          </Grid>
        </Grid>
        <BasicSpeedDial />
        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;