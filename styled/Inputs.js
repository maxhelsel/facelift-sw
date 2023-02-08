import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const CustomInputStyled = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiFilledInput-root': {
    fontFamily: theme.typography.fontFamily,
    background: 'white',
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: '2rem',
    borderColor: 'blue',
    borderRadius: 6,
    '&:before': {
      borderColor: 'transparent'
    },
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
  '& .MuiFilledInput-input': {
    height: 'auto'
  },
}));
