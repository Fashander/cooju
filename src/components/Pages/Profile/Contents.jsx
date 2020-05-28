import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import CourseHighlight from './CourseHighlight';
import Reports from './Reports'
import Inprogress from './Inprogress';
import Completed from './Completed';
import Assessment from './Assessment'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'stretch',
        
        [theme.breakpoints.down('md')]: {
            justifyItems: 'space-evenly',
        },
        
        width:  '100%',
        display: 'flex',
        flexWrap: 'wrap',
       
        marginLeft: 'auto',
        marginRight: 'auto',
        
}
})
);

export default function Contents() {
  const classes = useStyles();

  return (
        <Paper className={classes.container} elevation={2} >
            <Grid container spacing={1}>
                <Assessment/>
                <Grid item xs={12} sm={4}>
                    <Reports/> 
                </Grid  >
                
                <Grid item xs={12} sm={8} >
                    <CourseHighlight/>
                    <Inprogress/>
                    <Completed/>
                </Grid>
                
                
                
            </Grid>
        </Paper>

   
  
  );
}