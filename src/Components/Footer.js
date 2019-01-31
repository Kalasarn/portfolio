import React from 'react'
import { Grid, Typography, Link } from '@material-ui/core'
import './Css/Footer.css'

class Footer extends React.Component
{ 
    render()
    {

      const whiteText={
        color: 'white',
      
      }

    return(
        
                <Grid container> 
                <Grid item xs={12} className="footerDiv">
                <Link underline="none" href="https://www.facebook.com/Nikjoh91"><Typography variant="h6" style={whiteText}>Facebook</Typography></Link>
                <Link underline="none" href="https://www.linkedin.com/in/niklas-johansson-854941179/"><Typography variant="h6" style={whiteText}>LinkedIn</Typography></Link>
                <Typography variant="h6" style={whiteText}>njoh@live.se</Typography>
                <Typography variant="h6" style={whiteText}>+46 076 460 631</Typography>
                
                </Grid>
                </Grid> 
               
    );
  }
}

export default Footer;

