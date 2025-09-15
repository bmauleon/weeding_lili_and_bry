import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [lastname, setLastname] = useState("");
  const [familyData, setFamilyData] = useState([]);
  const [familyConfirmedIds, setFamilyConfirmedIds] = useState([]);
  const [familyResponse, setFamilyResponse] = useState(0);
  const [comments, setComments] = useState("");
  const [commentsResponse, setCommentsResponse] = useState(0);

  const searchFamily = async (lastnames) => {

    const response = await fetch('https://wedding-liliandbry-45fd821e9dbd.herokuapp.com/list/'+lastnames.toUpperCase(), {
      method: `GET`,
    })
    setFamilyData(await response.json())
  };

  const confirmFamilyMembers = async (ids) => {
    const response = await fetch('https://wedding-liliandbry-45fd821e9dbd.herokuapp.com/confirm/', {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify(ids),
    })
    setFamilyResponse(await response.json())
  };

  const confirmFamilyComments = async (comments, lastname) => {
    const response = await fetch('https://wedding-liliandbry-45fd821e9dbd.herokuapp.com/comments/', {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({
        "family": lastname,
        "comment": comments
      }),
    })
    setCommentsResponse(await response.json())
  };

  const handleChangeLastname = e => {
    setLastname(e.target.value);
  };

  const handleChangeComments = e => {
    setComments(e.target.value);
  };

  const handleChangeFamilyCheck = e => {
    const deleteValue = e.target.value
    if (familyConfirmedIds.indexOf(deleteValue) > -1){
      const newFamily = familyConfirmedIds.filter(family => family !== deleteValue)
      setFamilyConfirmedIds(newFamily)
    }else{
      familyConfirmedIds.push(e.target.value)
    }
  }

  const handleConfirmFamily = () => {
    if (familyConfirmedIds.length > 0){
      confirmFamilyMembers(familyConfirmedIds)
      handleNext()
    } else {
      handleNext()
    }
  }

  const handleSendComments = () => {
    if (comments){
      confirmFamilyComments(comments, lastname)
      handleReset()
    }
    // }else{
    //   alert("Escribenos tus mejores deseos")
    // }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setLastname('')
    setFamilyData([])
    setFamilyConfirmedIds([])
    setActiveStep(0)
    setComments('')
  };

  const handleSearchLastname = () => {
    setFamilyConfirmedIds([])
    searchFamily(lastname)
    handleNext()
  };

  useEffect(() => {
    searchFamily()
    confirmFamilyMembers()
  }, [])

  return (
    <Box sx={{ width: 1 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step key="Busca tu reservación utilizando los apellidos de tu familia.">
          <StepLabel>
            Busca tu reservación utilizando los apellidos de tu familia.
          </StepLabel>
          <StepContent>
            {commentsResponse.status == 200 &&
              <Alert variant="filled" severity="success">
                Tu confirmación se ha realizado con éxito.
                Te agradecemos por tus buenos deseos.
              </Alert>
            }
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '1' } }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-search" label="Apellidos" required type="search" value={lastname} onChange={handleChangeLastname} />
              <Button
                variant="contained"
                onClick={handleSearchLastname}
                sx={{ mt: 2}}
                fullWidth
                >Buscar</Button>
            </Box>
          </StepContent>
        </Step>
        <Step key="Selecciona los integrantes de la reserva que deseas confirmar.">
          <StepLabel>
            Selecciona los integrantes de la reserva que deseas confirmar.
          </StepLabel>
          <StepContent>
            {familyData.length > 0 ?
              <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '1' } }}
                noValidate
                autoComplete="off"
              >
                <FormGroup>
                  {familyData.map((data) => {
                    if (data.is_confirmed == 0) {
                      return <FormControlLabel control={<Checkbox />} label={data.name} key={data.id} value={data.id} onChange={handleChangeFamilyCheck} />
                    } else {
                      return <FormControlLabel checked disabled control={<Checkbox />} label={data.name+' (CONFIRMADO)'} key={data.id} value={data.id} onChange={handleChangeFamilyCheck} />
                    }
                  })}
                </FormGroup>
                <Button
                  variant="contained"
                  onClick={handleConfirmFamily}
                  sx={{ mt: 2}}
                  >Confirmar</Button>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  sx={{ mt: 2, ml: 1 }}
                  color='secondary'
                  >Atras</Button>
              </Box>
            :
              <Box>
                <Alert variant="outlined" severity="error">
                  No pudimos encontrar tus apellidos, contacta a Bryant o Liliana.
                </Alert>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  sx={{ mt: 2, ml: 1 }}
                  color='secondary'
                  >Atras</Button>
              </Box>
            }
          </StepContent>
        </Step>
        <Step key="Asistencia confirmada.">
          <StepLabel>
            Resultado de confirmación.
          </StepLabel>
          <StepContent>
            {familyConfirmedIds.length == 0 ?
                <Box>
                  <Alert variant="outlined" severity="info">
                    Selecciona al menos un integrante de la familia o valida si todos tus integrates ya aparecen como confirmados.
                  </Alert>
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mt: 2, ml: 1 }}
                    color='secondary'
                    >Atras</Button>
                </Box>
              :
              familyResponse.status == 200 ?
                <Box>
                  <Card sx={{ widrh: 1 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/images/confirmacion.jpeg"
                        alt="byl"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Familia {lastname}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Tu confirmación de <Box fontWeight='fontWeightBold' display='inline' color={'primary.main'}>{familyResponse.count} </Box> boletos ha sido realizada con éxito.
                          Estamos ansiosos por tenerte el día de nuestra boda.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 2}}
                  fullWidth
                  >Escribenos tus mejores deseos</Button>
                </Box>
              :
                <Box>
                  <Alert variant="outlined" severity="error">
                    Ocurrió un error al confirmar a tus familiares.
                  </Alert>
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mt: 2, ml: 1 }}
                    color='secondary'
                    >Atras</Button>
                </Box>
            }
          </StepContent>
        </Step>
        <Step key="Dejanos tus mejores deseos o alguna experiencia juntos.">
          <StepLabel>
            Dejanos tus mejores deseos o alguna experiencia.
          </StepLabel>
          <StepContent>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '1' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                    id="outlined-multiline-static"
                    label="Mis mejores deseos..."
                    multiline
                    rows={4}
                    value={comments} 
                    onChange={handleChangeComments}
                  />
              <Button
                  variant="contained"
                  onClick={handleSendComments}
                  sx={{ mt: 2}}
                  fullWidth
                  >Enviar comentarios</Button>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}