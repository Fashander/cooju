import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import { CardHeader } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress'

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
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    marginTop:15,
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'dark' ? 700 : 200],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export default function Inprogress() {
  const classes = useStyles();

  return (
    
    <div>
     
    <CardHeader className={classes.Courseheader} title={'In Progress'}>
    </CardHeader>
    <div className={classes.root}>
      <Paper className={classes.container} elevation={3} >
          <CardContent>
          <Typography className={classes.header}> {'Philosophy of Science (GST 101)'}</Typography>
          <BorderLinearProgress variant="determinate" value={50}  spacing={10}/>
          </CardContent>
     
      </Paper>
      
      <Paper elevation ={3}>
      <CardContent>
          <Typography className={classes.header}> {'Introduction to Computer Science'}</Typography>
          <BorderLinearProgress variant="determinate" value={50}  spacing={10}/>
          </CardContent>
      </Paper>
      <Paper elevation={3}>
      <CardContent>
          <Typography className={classes.header}> {'English Language'}</Typography>
          <BorderLinearProgress variant="determinate" value={70}  spacing={10}/>
          </CardContent>
      </Paper>
      <Paper elevation={3} >
      <CardContent>
          <Typography className={classes.header}> {'Linear Algebra'}</Typography>
          <BorderLinearProgress variant="determinate" value={62}  spacing={10}/>
          </CardContent>
      </Paper>
    </div>
       
    </div>
  );
}