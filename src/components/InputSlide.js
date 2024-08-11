'use client'

import React from 'react';
import styled from 'styled-components';
import { useFormControl } from '@mui/material/FormControl';
import FormControl from '@mui/material/FormControl';
import { Box, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import theme from '@/theme';

const InputSide = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);

  return (
    <form
    action="https://formspree.io/f/mgvwyovy"
    method="POST"
  >
    <Box sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          
          gap: 2,
          width: '100%'
        }}>
        <Typography variant="h6" component="h2">
            Fill out this form or send me an email at bradleyschwarz1@gmail.com if you have questions, or are curious about commissioning custom ironwork.
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          width: '100%'
        }}>
            <TextField required name='firstName' fullWidth id="outlined-basic" label="First Name" variant="outlined" />
            <TextField required name="lastName" fullWidth id="outlined-basic" label="Last Name" variant="outlined" />

        </Box>

        <TextField required name="email" id="outlined-basic" label="Email" variant="outlined" />
        <TextField required name="message" id="outlined-basic" label="Message" multiline variant="outlined" />
        
        <Button color="primary" variant="contained" type="submit">Send</Button>
    </Box>
  </form>


  )
};

export default InputSide;