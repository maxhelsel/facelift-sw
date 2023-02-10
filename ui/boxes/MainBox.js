import React, { useState } from 'react';
import dayjs from 'dayjs';
import landingStyles from '/styles/landing.module.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import KeyDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaneIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarIcon from '@mui/icons-material/EventAvailable';
import CarIcon from '@mui/icons-material/DirectionsCar';
import PublicIcon from '@mui/icons-material/Public';

import { CustomInputStyled } from '/styled/Inputs.js';
import { PaperGrid } from '/styled/Paper.js';

const MainBox = () => {

  const [ step, setStep ] = useState(0);
  const handleStep = (value) => setStep(value);

  const week = new Date();
    week.setDate(week.getDate() + 10);

  return (
    <Grid container justifyContent='center' style={{ flexFlow: 'row', padding: '16px' }} >
      <Grid container item justifyContent='center' style={{ maxWidth: 1000, position: 'relative' }} >
        <Box style={{ display: 'flex', flexFlow: 'column', maxWidth: 1000, padding: 4, position: 'absolute', margin: '0 auto', top: -24, zIndex: 2 }} >
          <Paper style={{ width: 'auto' }} >
            <Grid container item alignItems='center' style={{ flexFlow: 'row', padding: 0 }} >
              <Grid item style={{ padding: 4 }} >
                <IconButton onClick={() => handleStep(0)} aria-label='flights' style={{ background: step === 0 ? 'rgba(0, 0, 255, .2)' : undefined, borderRadius: 4 }} >
                  <PlaneIcon style={{ color: step === 0 ? 'blue' : undefined }} />
                </IconButton>
              </Grid>
              <Grid item style={{ padding: 4 }} >
                <IconButton onClick={() => handleStep(1)} aria-label='flights' style={{ background: step === 1 ? 'rgba(0, 0, 255, .2)' : undefined, borderRadius: 4 }} >
                  <HotelIcon style={{ color: step === 1 ? 'blue' : undefined }} />
                </IconButton>
              </Grid>
              <Grid item style={{ padding: 4 }} >
                <IconButton onClick={() => handleStep(2)} aria-label='flights' style={{ background: step === 2 ? 'rgba(0, 0, 255, .2)' : undefined, borderRadius: 4 }} >
                  <CarIcon style={{ color: step === 2 ? 'blue' : undefined }} />
                </IconButton>
              </Grid>
              <Grid item style={{ padding: 4 }} >
                <IconButton onClick={() => handleStep(3)} aria-label='flights' style={{ background: step === 3 ? 'rgba(0, 0, 255, .2)' : undefined, borderRadius: 4 }} >
                  <PublicIcon style={{ color: step === 3 ? 'blue' : undefined }} />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <PaperGrid container item style={{ padding: '24px 12px 12px', background: 'none' }} >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{ display: 'flex', width: '100%', maxWidth: 600, margin: '0 auto', flexFlow: 'column', padding: '36px 0px 36px' }}
          >
            <Grid container item alignItems='center' justifyContent='center' style={{ flexFlow: 'row', padding: 8 }} >
              <Grid container item xs={5} style={{ padding: 8 }} >
                <PaperGrid style={{ display: 'flex', width: '100%' }} >
                  <CustomInputStyled
                    fullWidth
                    size='large'
                    label="From"
                    variant="filled"
                    defaultValue='LGA'
                  />
                </PaperGrid>
              </Grid>
              <Grid item style={{ padding: 8, opacity: .3 }} >
                <ForwardIcon />
              </Grid>
              <Grid container item xs={5} style={{ padding: 8 }} >
                <PaperGrid style={{ display: 'flex', width: '100%' }} >
                  <CustomInputStyled
                    fullWidth
                    label="To"
                    variant="filled"
                    defaultValue='LAX'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" style={{ marginTop: 16, marginRight: 8 }} >
                          <IconButton aria-label="search" onClick={undefined} edge="end" >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </PaperGrid>
              </Grid>
            </Grid>
            <Grid container item alignItems='center' justifyContent='center' style={{ flexFlow: 'row', padding: 8 }} >
              <Grid container item xs={5} style={{ padding: 8 }} >
                <PaperGrid style={{ display: 'flex', width: '100%' }} >
                  <CustomInputStyled
                    fullWidth
                    label="Depart"
                    variant="filled"
                    defaultValue={dayjs().format('MMM D')}
                  />
                </PaperGrid>
              </Grid>
              <Grid item style={{ padding: 8, opacity: .3 }} >
                <ForwardIcon />
              </Grid>
              <Grid container item xs={5} style={{ padding: 8 }} >
                <Paper style={{ display: 'flex', width: '100%', padding: 0 }} >
                  <CustomInputStyled
                    fullWidth
                    label="Arrival"
                    variant="filled"
                    defaultValue={dayjs(week).format('MMM D')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" style={{ marginTop: 16, marginRight: 8 }} >
                          <IconButton aria-label="search" onClick={undefined} edge="end" >
                            <CalendarIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Divider />
            <Grid container item alignItems='center' justifyContent='center' style={{ flexFlow: 'row', padding: 8 }} >
              <Grid container item xs={5} style={{ padding: 8 }} >
                <Paper style={{ display: 'flex', width: '100%', flexFlow: 'row', alignItems: 'center', padding: 10 }} >
                  <Grid item style={{ display: 'flex', padding: 4 }} >
                    <GroupIcon />
                  </Grid>
                  <Grid container item style={{ display: 'flex', overflow: 'hidden', padding: 4 }} >
                    <Typography variant='b1' noWrap style={{ fontSize: '1rem' }} >
                      {`2 Tickets`}
                    </Typography>
                  </Grid>
                  <Grid item style={{ display: 'flex', padding: 4 }} >
                    <KeyDownIcon />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item style={{ padding: 8, opacity: 0 }} >
                <ForwardIcon />
              </Grid>
              <Grid container item xs={5} style={{ padding: 8 }} >
                <Button variant='contained' fullWidth style={{ display: 'flex', textTransform: 'none', padding: 12, fontWeight: 600 }} >
                  {`Search Flights`}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </PaperGrid>
      </Grid>
    </Grid>
  );
};

export default MainBox;
