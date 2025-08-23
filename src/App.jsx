import { Box, Button, Container, Typography, Grid, AppBar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonAppBar from "./components/ButtonAppBar";
import DrawerAppBar from "./components/DrawerAppBar";
//Icons https://v4.mui.com/components/material-icons/

export default function App(){
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 12 }}>
        <DrawerAppBar />
      </Grid>
    </Grid>
  )
}