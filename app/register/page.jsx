'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export default function Page() {

/*THE REGISTER PAGE*/

  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */ 
  async function runDBCallAsync(url) {


    const res = await fetch(url);
    const data = await res.json();


    if(data.data== "true"){
      console.log("registered")

      
    } else {

      console.log("not registered  ")
    }
  }


  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
	const handleSubmit = (event) => {
		
		console.log("handling submit");
    event.preventDefault();
  
		const data = new FormData(event.currentTarget);


    let email = data.get('email')
		let pass = data.get('pass')
		let role = data.get('role')

    console.log("Sent email:" + email)
    console.log("Sent pass:" + pass)
    console.log("Sent role:" + role)


    runDBCallAsync(`api/register?email=${email}&pass=${pass}&role=${role}`)




  }; // end handler

  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
  });

//for the select input
  const [role, setRole] = React.useState('');
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  
  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
        Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Password"
            type="password"
            id="pass"
            autoComplete="current-password"
          />

        <Select
            id="role"
            value={role}
            label="Select role"
            name='role'
            fullWidth
            required
            onChange={handleChange} >
              <MenuItem value={'User'}>User</MenuItem>
              <MenuItem value={'Admin'}>Admin</MenuItem>
          </Select>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Register
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                Already have an accout? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>

    </ThemeProvider>

  );
}