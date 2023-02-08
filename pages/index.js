import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LandingNavbar from '/ui/navigation/LandingNavbar.js';

import PlaneContainer from '/ui/plane/PlaneContainer.js';
import MainBox from '/ui/boxes/MainBox.js';
import ActionBox from '/ui/boxes/ActionBox.js';
import ProfileBox from '/ui/boxes/ProfileBox.js';
import FooterBox from '/ui/boxes/FooterBox.js';

function Index() {
  return (
    <>
      <Head>
        <title>SW Demo</title>
        <meta name="description" content="Description of whatever" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/smiley.png" />
      </Head>
      <LandingNavbar />
      <main className='main' >
        <PlaneContainer />
        <MainBox />
        <Grid container justifyContent='center' style={{ flexFlow: 'row', padding: '0px' }} >
          <Grid container item justifyContent='center' style={{ maxWidth: 1016, position: 'relative' }} >
            <ActionBox />
            <ProfileBox />
          </Grid>
        </Grid>
        <Typography component='p' variant='h4' textAlign='center' style={{ padding: '64px 24px 0px' }} >
          {`DEMO PURPOSES ONLY`}
        </Typography>
        <Typography component='p' variant='h4' textAlign='center' style={{ padding: '0px 24px 64px' }} >
          {`NOT AFFILIATED WITH COMPANY`}
        </Typography>
        <FooterBox />
      </main>
    </>
  )
}

export default Index;
