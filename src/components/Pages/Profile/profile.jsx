import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
            
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 150
        },
    },
    profile: {
        padding: '57px 50px 15px 50px',
        [theme.breakpoints.down('lg')]: {
            padding: '50px 40px 15px 40px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '30px 20px 15px 20px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '30px 20px 15px 20px'
        },
        marginBottom: 10
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
    profileTitle: {
        fontSize: 32,
        lineHeight: 1.1,
        fontWeight: 700,
        marginBottom: 5,
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {
            fontSize: 20
        },
    },
    profileTitleStart: {
        fontWeight: 200,
    },
    profilePosition: {
        fontSize: 18,
        [theme.breakpoints.down('md')]: {
            fontSize: 16
        },
        fontWeight: 400,
        lineHeight: 1.1,
        marginBottom: 0,
    },
    profileSocial: {
        backgroundColor: theme.palette.primary[ 500 ],
    }
    
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
                        <Grid item
                              xs={1}
                        />
                        <Grid item
                              lg={6}
                              xs={12}
                              container
                              spacing={0}
                              align="flex-start"
                              direction="column">
                            <Grid item
                                  className={classes.profileInfo}
                            >
                                <div>"Hello"</div>
                                < Typography className={classes.profileTitle}>
                                    <span className={classes.profileTitleStart}>I'm</span> Aduni Aderoungbe
                                </ Typography>
                                <h2 className={classes.profilePosition}>Computer Scientist</h2>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid
                        className={classes.profileSocial}
                        
                    >
                        
                    </Grid>
                    
                </Grid>
                
            </Paper>
        )
    }

