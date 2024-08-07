'use client'

import React from 'react';
import styled from 'styled-components';
import { useFormControl } from '@mui/material/FormControl';
import FormControl from '@mui/material/FormControl';
import { Box, OutlinedInput } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const InputSideWrapper = styled.form`
  height: auto;
  padding-bottom: 100px;
  width: 100%;
  position: relative;
  padding: 10px 10px 100px 10px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const SubMitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px 12px 24px;
  cursor: pointer;
`;

const LoadingButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px 12px 24px;
  cursor: pointer;
`;

const InputSide = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const response = await fetch('https://formspree.io/f/bradleyschwarz1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
        //todo popup
      setButtonLoading(false);
    } else {
      alert('Failed to submit form');
    }
  };

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
         Please reach out with questions!
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
        
        <Button variant="solid" type="submit">Send</Button>
    </Box>
  </form>


  )
};

export default InputSide;