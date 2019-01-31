import React from 'react'
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core'
import './Css/Header.css'


const appStyle = {
  color: 'white',
  background: 'transparent',
  boxShadow: 'none',
  marginTop: 0,
  position: 'fixed'
}

const aboutStyles ={
 marginLeft: 25
}


function Header()
{
    return(
        <AppBar position="static" style={appStyle}>
        <Toolbar variant="regular">
        <Typography variant="h5" color="inherit" style={{flexGrow: 1}}>
            Portfolio
          </Typography>

          <Typography variant="h5" color="inherit" style={aboutStyles} >
          <Link color="inherit" underline="none">
            Om
            </Link>
          </Typography>
                   
          <Typography variant="h5" color="inherit" style={aboutStyles} >
          <Link color="inherit" underline="none">
           Kontakt
          </Link>
          </Typography>         

        </Toolbar>
      </AppBar>
    )
}

export default Header;

