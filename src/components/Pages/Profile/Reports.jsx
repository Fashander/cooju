import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography  from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'calc(100% - 40px)',
    justifyContent:"center",
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(40),
    },
    
    container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyItems: 'space-evenly',
        },
        align:'center',
    }

  },
  header:{
    color: '#414141',
        fontSize: 20,
        fontWeight: 900,
        lineHeight: 1.5,
        textAlign: 'left',
        marginBottom: 8,
        marginTop: 75
        
  },
  header2:{
    color: '#414141',
        fontSize: 14,
        lineHeight: 1.1,
        textAlign: 'left',
        marginBottom: 0,
        marginTop: 10,
        
  },

  Courseheader:{
    fontWeight: 500,
    color: '#414141',
    fontSize: 24,
    lineHeight: 1.1,
    textAlign:'left',
    marginLeft: 32,
  }
  
}));

export default function Reports() {
  const classes = useStyles();

  return (
    <div>
     
    <CardHeader className={classes.Courseheader} title={'Explore COOJU'}>
    </CardHeader>
    <div className={classes.root}>
      <Card className={classes.container} elevation={3} >
          <CardContent>
          <Typography className={classes.header}> {'Application for 2020/2021'}</Typography>
      <span className={classes.header2}  >{'Earn a degree by studying at College of Education, OJu.'}</span>
          </CardContent>
      </Card>
      
      <Paper elevation ={3}>
      <CardContent>
          <Typography className={classes.header}> {'E-learning Portal'}</Typography>
      <span className={classes.header2}  >{'COOJU begins E-learning and Distance education'}</span>
          </CardContent>
      </Paper>     
    </div>
       
    </div>
  );
}