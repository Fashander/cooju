import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BillBoardBgImg from '../../../assets/img/bgCovid19_remote_study.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(8,4,3),
        margin: theme.spacing(9,0,1),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            backgroundImage: `url(${BillBoardBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // width: '100%',
            height: '400px',
        },
    },
    image:{
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },
    img:{
        maxWidth: '100%',
    },
    bodyText: {
        padding: theme.spacing(3, 2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5, 2),
        }
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        border: 'none',
        backgroundColor: theme.palette.common.white,
        maxWidth: '500px',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm')]: {
            opacity: 0.9,
            height: 'inherit',
            // background: 'none',
        },
    },
}))


const BillBoard = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid item xs={12} sm={1} className={classes.image}>
                <img src={BillBoardBgImg} alt='BillBoardBgImg' className={classes.img} />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Paper elevation={0} display='block' className={classes.paper}>
                    <Typography style={{fontWeight: 'bold'}} variant='overline' color='primary' >
                        Keep learning, wherever you are
                    </Typography>
                    <Typography variant='h3' color='textPrimary' >
                        Stay connected
                    </Typography>
                    <Typography className={classes.bodyText} align='left' variant='body1' color='textPrimary' component='div' >
                        <div>Is coronavirus affecting your education or work?<br />
                        Explore online courses to continue studying, build professional skills, <br />
                        and connect with experts.</div>
                    </Typography>
                    <Button variant="contained" color="primary">
                        VIEW COURSES
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default BillBoard
