import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Image from "./edu.jpg";
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    img: {
        width: '100%',
        height: '100%',
        objectfit: "cover",
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
    profile: {
        
    },
    profilePhoto: {
        maxWidth: '50%'
    },
    profileInfo: {
        color: '#3d4451',
        paddingBottom: 25,
        marginBottom: 25,
        borderBottom: '1px solid #dedede',
        [theme.breakpoints.down('md')]: {
            borderBottom: '0px'
        },
    },
    avatarholder: {
        position: "absolute",
        margin: "auto",
        top: 40,
        right: 0,
        left: 0,
        width: 100,
        height: 100,
        borderradius: '50%',
        shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
        overflow: "hidden",
        animation: 'mvTop 1.5s'
    },
    greeting: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.1,
        display: 'inline-block',
        padding: '7px 12px',
        textTransform: 'uppercase',
        position: 'relative',
        backgroundColor: theme.palette.primary[ 500 ],
        
        '&:before': {
            content: '""',
            width: 0,
            height: 0,
            top: '100%',
            left: 5,
            display: 'block',
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 0 8px 8px',
            borderColor: 'transparent',
            borderLeftColor: theme.palette.primary[ 500 ],
        }
    },
    
    
    
}));


export default function Profiles () {
    
        const classes = useStyles();
        return (
            <Paper className={classes.container} >
                <Grid item
                      container
                      direction="column"
                      spacing={0}>
                    <Grid item
                          className={classes.profile}
                          container
                          spacing={0}
                    >
                        <Grid item
                              lg={5}
                              xs={12}
                        >
                    <Avatar className={classes.avatarholder}>
            <img className={classes.img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein"/>
            </Avatar>
                        </Grid>
                                               
                            <CardContent item
                                  className={classes.profileInfo}
                            >
                                <div>"Hello"</div>
                                < Typography align="center" textAlign="center">
                                    <span align="center" textAlign="center">I'm</span> Aduni Aderoungbe
                                </ Typography>
                                <h2 align="center" textAlign="center">Computer Scientist</h2>
                            </CardContent>
                            
                        
                    </Grid>
                    <Grid
                        className={classes.profileSocial}
                        
                    >
                        
                    </Grid>
                    
                </Grid>
                
            </Paper>
        )
    }

