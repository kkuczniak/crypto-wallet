import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Profile from '../screens/Profile';
import Portfolio from '../screens/Portfolio';
import { Grid } from '@material-ui/core';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'; //teczka
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'; //zamknij
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; //dom
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined'; //wykres
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'; //person
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined'; //trade

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Container>{children}</Container>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100vh',
    margin: '0',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.container}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Tab
          className={classes.tab}
          component={Link}
          to='/'
          label='home'
          icon={<HomeOutlinedIcon />}
          // {...a11yProps(0)}
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/portfolio'
          label='portfolio'
          icon={<BusinessCenterOutlinedIcon />}
          // {...a11yProps(1)}
        />
        <Tab
          className={classes.tab}
          label='Trade'
          icon={<ImportExportOutlinedIcon />}
          isTrade={true}
          // {...a11yProps(2)}
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/market'
          label='market'
          icon={<TimelineOutlinedIcon />}
          // {...a11yProps(3)}
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/profile'
          label='Profile'
          icon={<PersonOutlineOutlinedIcon />}
          // {...a11yProps(4)}
        />
      </Tabs>
      {/* <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/market' component={Market} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Grid>
  );
}
