import React, { useState } from 'react';
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
import CheckIcon from '@mui/icons-material/Check';
import UpdateIcon from '@mui/icons-material/Update';
import CloseIcon from '@mui/icons-material/Close';
import CycleIcon from '@mui/icons-material/Autorenew';


import PlaneIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarIcon from '@mui/icons-material/EventAvailable';
import CarIcon from '@mui/icons-material/DirectionsCar';
import PublicIcon from '@mui/icons-material/Public';

import { CustomerButton } from '/styled/Buttons.js';
import { CustomInputStyled } from '/styled/Inputs.js';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs';
import landingStyles from '/styles/landing.module.css';

import { PaperGrid } from '/styled/Paper.js';

const ActionBox = () => {

  const [ step, setStep ] = useState(0);
  const handleStep = (value) => setStep(value);

  const [ from, setFrom ] = useState('LGA');

  const week = new Date();
    week.setDate(week.getDate() + 10);

  return (
    <Grid container item xs={12} sm={6} style={{ padding: 8 }} >
      <PaperGrid container item >
        <Grid container item alignItems='center' style={{ flexFlow: 'column', padding: 24 }} >

          <Grid container item xs={12} style={{ flexFlow: 'column', padding: '16px 8px' }} >
            <Typography variant='b1' component='p' color='primary' >
              {`Travel Command`}
            </Typography>
            <Typography variant='h4' component='p' >
              {`Manage your travel plans`}
            </Typography>
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Check In'
              icon={<CheckIcon style={{ color: 'green' }} />}
              iconBg='#e8f5e9'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Status'
              icon={<UpdateIcon style={{ color: 'blue' }} />}
              iconBg='#e3f2fd'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Change Plans'
              icon={<CycleIcon style={{ color: '#e65100' }} />}
              iconBg='#fff3e0'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Cancel'
              icon={<CloseIcon style={{ color: 'red' }} />}
              iconBg='#ffebee'
            />
          </Grid>
        </Grid>
      </PaperGrid>
    </Grid>
  );
};

export default ActionBox;
