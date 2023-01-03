import React from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './components/images/nithish.png'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container>
        <AppBar className={classes.appBar}  position="static" color="inherit">
   <Typography className={classes.heading} variant="h2" align="center">memories</Typography>
   <img className={classes.image}  src={memories} alt="icon" height="60"/> 
        </AppBar>
        <Grow in>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
      </Grid>
    </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
