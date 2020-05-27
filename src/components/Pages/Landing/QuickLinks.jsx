import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FootWrapperData } from '../../../assets/db/SomeData';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3, 4),
        margin: theme.spacing(1, 0),
        // [theme.breakpoints.up('sm')]: {
        //     display: 'block',
        //     backgroundImage: `url(${BillBoardBgImg})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     // width: '100%',
        //     height: '400px',
        // },
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    img: {
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
    card: {
        maxWidth: '95%',
    },
    cardActionCss: {
        backgroundColor: theme.palette.secondary['light'],
    },
    cardActionAreaCss: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary['dark'],
    },
}))


const QuickLinks = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root} >
            {
                FootWrapperData.map(record => (
                <Grid key={record.id} item xs={12} >
                    <QuickLinkCard key={record.id} payload={record} classes={classes} />
                </Grid>
                ))
            }
        </Grid>
    )
}

const QuickLinkCard = ({payload, classes}) => (
        <Card raised className={classes.card}>
            {/* <CardHeader title={payload.title} /> */}
            <CardActionArea>
                <CardContent  className={classes.cardActionAreaCss}>
                    <Typography gutterBottom variant="h4">
                        {(payload.title).toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        {payload.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActionCss}>
                <Button size="small" >
                    Share
                </Button>
                <Button size="small" >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );

export default QuickLinks

