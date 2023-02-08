import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import landingStyles from '/styles/landing.module.css';

const LandingNavbar = props => {
  return (
    <AppBar className={landingStyles.navAppbarNaked} elevation={props.trigger ? 1 : 0} style={{ background: props.trigger ? 'white' : 'unset' }} >
      <Toolbar>
        <Grid container style={{ flexFlow: 'row', maxWidth: 1000, padding: '8px 8px', margin: '0 auto' }} >
          <Grid container item style={{ maxWidth: 245, position: 'relative' }} >
            <Link href='/' style={{ display: 'flex', flex:1 }} >
              <Grid container item style={{ maxWidth: 200, position: 'relative' }} >
                <Image src="/swLogo.png" alt="bc" fill style={{ objectFit: 'contain' }} />
              </Grid>
            </Link>
          </Grid>
          <Grid container item style={{ flex: 1, flexFlow: 'row', alignItems: 'center', justifyContent: 'flex-end' }} >
            <div className='flex' style={{ padding: '16px 0px', color: '#678' }} >
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="settings" color="inherit">
                <SettingsIcon />
              </IconButton>
              <IconButton aria-label="profile" color="inherit" style={{ padding: 4 }}>
                <Avatar style={{ background: 'transparent', color: '#678', height: 32, width: 32 }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
};


const Navbar = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 360
  });

  return (
    <LandingNavbar trigger={trigger} />
  )
};

export default Navbar;
