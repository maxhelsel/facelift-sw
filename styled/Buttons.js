import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const IconHolderStyled = styled(Grid, {
  shouldForwardProp: prop => (prop !== 'padding' || prop !== 'padding')
})(({ theme, iconBg, padding }) => ({
  display: 'flex',
  borderRadius: '6px',
  padding: padding || '6px',
  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .08)' : iconBg ? iconBg : undefined
}));

export const DashboardButtonStyled = styled(Button, {
  shouldForwardProp: prop => (prop !== 'padding')
})(({ theme, padding }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#651fff',
  padding: padding || '12px 16px',
  lineHeight: '1rem',
  borderRadius: 6,
  textTransform: 'none',
  transition: theme.palette.transitions.all300,
  border: theme.palette.content.border,
  '&:hover': {
    border: theme.palette.content.borderHover
  }
}));

export const CustomerButton = props => {

  const {
    icon,
    iconBg,
    label,
    padding,
    onClick,
    ariaLabel
  } = props;

  return (
    <DashboardButtonStyled fullWidth aria-label={ariaLabel || ''} onClick={onClick || undefined} >
      <Grid container item flexWrap='nowrap' alignItems='center' >
        <IconHolderStyled item iconBg={iconBg || undefined} padding={padding || undefined} >
          {icon}
        </IconHolderStyled>
        <Grid container item flex='1' style={{ justifyContent: 'flex-start', overflow: 'hidden', paddingLeft: 12 }} >
          <Typography noWrap variant='b1' >
            {label || ''}
          </Typography>
        </Grid>
      </Grid>
    </DashboardButtonStyled>
  )
};
