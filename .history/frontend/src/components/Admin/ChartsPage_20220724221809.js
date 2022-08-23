import React from 'react'
import axios from 'axios'
import "./ChartsPage.css";
import {Box,Paper,Grid,Typography} from '@mui/material';
import { Button } from '@material-ui/core'
import { Col,Row,Container} from "react-bootstrap";
import {AdminNavigation} from './AdminNavigation';
function ChartsPage() {
  const handleClick = () => {
    axios
    .get("https://us-central1-csci5410-group23.cloudfunctions.net/data_viz_f")
    .then((res) => {
        console.log("done")
    });
    axios
    .get("https://us-central1-csci5410-group23.cloudfunctions.net/data-viz-food")
    .then((res) => {
        console.log("done")
    });
    axios
    .get("https://us-central1-csci5410-group23.cloudfunctions.net/data-viz-cust")
    .then((res) => {
        console.log("done")
    });
  }

  return (
<<<<<<< HEAD
    <div className='container p-4'>
      
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                <h2 className="card-title">Charts</h2>
                </div>

                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <iframe width="900" height="450" src="https://datastudio.google.com/embed/reporting/dc1a436a-aaa3-4b81-b4f0-3e5e13ea5507/page/NyVyC" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>

                </div>

                <div className='d-flex flex-row justify-content-center align-items-center'>
                <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/dee26b46-311b-434a-a9df-2287aef14ac9/page/iEXyC" frameborder="0" style={{border: 0}} allowfullscreen></iframe>

                </div>
                <div className='d-flex flex-row justify-content-center align-items-center'>

                <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/185a9945-108f-43fb-a2d4-c17a99468d6d/page/uyVyC" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                </div>
                <Button variant="contained" onCLick onClick={handleClick}>Refresh</Button>

            </div>
   
    </div>
=======
    <>
    <AdminNavigation />
    <Container className="f-main-container" style={{marginTop: '4rem!important'}}> 
            <Row className="p-3">
                <div className="f-container">
                    <div className="f-card">
                      <div>
                          <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4  }}>
                                  <div style={{display:'flex'}}>
                                    <div className='col-md-6 upgridcard' >
                                      <Grid item  direction="column"  spacing={1} style={{padding:'0px'}} >
                                        <iframe width="700" height="450" src="https://datastudio.google.com/embed/reporting/dc1a436a-aaa3-4b81-b4f0-3e5e13ea5507/page/NyVyC" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>    
                                      </Grid>
                                      </div>
                                      <div className='col-md-6 upgridcard' >
                                        <Grid item  direction="column"  spacing={1} style={{padding:'0px'}} >
                                        <iframe width="700" height="450" src="https://datastudio.google.com/embed/reporting/185a9945-108f-43fb-a2d4-c17a99468d6d/page/uyVyC" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                                      </Grid>
                                      
                                      </div>
                                    </div>
                                </Grid>
                            </Box>
                      </div><center>
                        <div  className="p-3">
                          <Button variant="contained" onCLick onClick={handleClick}>Refresh</Button>
                        </div></center>
                    </div>
                </div>
            </Row>
        </Container>
    </>
>>>>>>> 059056727b6013a638e6092babbbfcd0ac897d68
  )
}

export default ChartsPage