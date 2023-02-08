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
import CardIcon from '@mui/icons-material/CreditCard';
import UserIcon from '@mui/icons-material/Person';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import RedeemIcon from '@mui/icons-material/Redeem';




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

const ProfileBox = () => {

  return (
    <Grid container item xs={12} sm={6} style={{ padding: 8 }} >
      <PaperGrid container item >
        <Grid container item justifyContent='center' style={{ flexFlow: 'column', padding: 24 }} >

          <Grid container item xs={12} style={{ flexFlow: 'column', padding: '16px 8px' }} >
            <Typography variant='b1' component='p' color='primary' >
              {`My Profile`}
            </Typography>
            <Typography variant='h4' component='p' >
              {`Manage your account, points, and rewards`}
            </Typography>
          </Grid>

          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='My account'
              icon={<UserIcon />}
              iconBg='#e3f2fd'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='My Cards'
              icon={<CardIcon style={{ color: 'green' }} />}
              iconBg='#e8f5e9'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Rewards & Points'
              icon={<LoyaltyIcon />}
              iconBg='#f3e5f5'
            />
          </Grid>
          <Grid container item xs={12} style={{ padding: 4 }} >
            <CustomerButton
              label='Special Offers'
              icon={<RedeemIcon style={{ color: 'red' }} />}
              iconBg='#fce4ec'
            />
          </Grid>
        </Grid>
      </PaperGrid>
    </Grid>
  );
};

export default ProfileBox;
