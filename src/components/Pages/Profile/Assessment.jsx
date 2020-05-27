import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RoundedCorner from '@material-ui/icons/RoundedCorner';
import Check from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Assessment() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="In Progress" value="favorites" icon={<RoundedCorner />} />
      <BottomNavigationAction label="Completed" value="nearby" icon={<Check />} />
    </BottomNavigation>
  );
}