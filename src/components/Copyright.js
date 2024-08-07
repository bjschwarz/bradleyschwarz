
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Copyright() {
  return (

    <Box >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
          Bradley Schwarz
        {' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}