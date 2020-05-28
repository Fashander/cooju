import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Image from "./edu.jpg";

const useStyles = makeStyles(theme=>({
    img: {
        
        objectfit: "cover",
        position: "absolute",
        margin: "auto",
        top: 70,
        right: 0,
        left: 0,
        width: 250,
        height: 250,
        borderradius: '50%',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        overflow: "hidden",
        animation: 'mvTop 1.5s'
      },
    container: {
        [theme.breakpoints.up('sm')]: {
            marginTop: 20,
            background: '#202020',
            height: 400,
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundRepeat:"no -repeat",
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 150
        },
            },
    name:{
        color: '#202020',
        fontSize: 28,
        fontWeight: 600,
        textAlign: 'center',
        },
    bigAvatar: {
        margin: 50,
        width: 200,
        height: 200,
        border: '3px solid rgba(232, 232, 232, 0.8)',
        boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset',
        },
    position: {
        textAlign: 'center',
        marginTop: 5,
        color:  '#202020',
        fontSize:20,
        },
    introduction: {
        color:  '#202020',
        textAlign: 'center',
        fontSize:16,
    }
}));


export default function Profiles () {
    
        const classes = useStyles();
        return (
            <Paper className={classes.container} >
                <Grid container className={classes.container} justify="center" alignItems="center">                    
                    <Grid>
                        <Avatar  className={classes.bigAvatar}  alt="Albert Einstein" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.name}>
                            {'Aduni Aderoungbe'}
                        </Typography>
                        <Typography variant="h5" className={classes.position}>
                            {'Department of Computer Science'}
                        </Typography>
                        <Typography variant="h6" className={classes.introduction}>
                            {'Faculty of Science'}
                        </Typography>
                    </Grid>
                 </Grid>
        </Paper>
    )
}

