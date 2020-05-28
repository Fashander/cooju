import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'calc(100% - 40px)',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(10),
    },
    
    },
    container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyItems: 'space-evenly',
        }
  },
  header:{
    color: '#414141',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.1,
        textAlign: 'left',
        marginBottom: 0,
        marginToo: 0
        
  },
  header2:{
    color: '#414141',
        fontSize: 12,
        lineHeight: 1.1,
        textAlign: 'left',
        marginBottom: 0,
        marginToo: 0
        
  },

  Courseheader:{
    fontWeight: 500,
    color: '#414141',
    fontSize: 24,
    lineHeight: 1.1,
    textAlign:'left'
  }
  
}));

export default function CourseHighlight() {
  const classes = useStyles();

  return (
    
    <div>
     
    <CardHeader className={classes.Courseheader} title={'Course Highlights'}>
    </CardHeader>
    <div className={classes.root}>
      <Paper className={classes.container} elevation={3} >
          <CardContent>
          <Typography className={classes.header}> {'Computer Science'}</Typography>
      <span className={classes.header2}  >{'43 Courses'}</span>
          </CardContent>
     
      </Paper>
      
      <Paper elevation ={3}>
      <CardContent>
          <Typography className={classes.header}> {'Business Administration'}</Typography>
      <span className={classes.header2}  >{'25 Courses'}</span>
          </CardContent>
      </Paper>
      <Paper elevation={3}>
      <CardContent>
          <Typography className={classes.header}> {'Architecture'}</Typography>
      <span className={classes.header2}  >{'53 Courses'}</span>
          </CardContent>
      </Paper>
      <Paper elevation={3} >
      <CardContent>
          <Typography className={classes.header}> {'MBBS'}</Typography>
      <span className={classes.header2}  >{'80 Courses'}</span>
          </CardContent>
      </Paper>
    </div>
       
    </div>
  );
}