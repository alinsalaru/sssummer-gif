import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";
import useStyles from './Drawer.styles'
import { Typography } from '@material-ui/core';

export default function DrawerLeft() {
  const classes = useStyles();
  return (
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
  >
    <Divider />
    <List>
      <NavLink exact activeClassName={classes.active} to="/cat">
        <ListItem button key="cats">
            <ListItemIcon>😸</ListItemIcon>
            <ListItemText primary="Cats" />
        </ListItem>
      </NavLink>

      <NavLink exact activeClassName={classes.active} to="/dog">
        <ListItem button key="dogs">
                <ListItemIcon>🐕</ListItemIcon>
                <ListItemText primary="Doggos" />
        </ListItem>
      </NavLink>

      <NavLink exact activeClassName={classes.active} to="/aliens">
        <ListItem button key="aliens">
            <ListItemIcon>👽</ListItemIcon>
            <ListItemText primary="Aliens" />
        </ListItem>
      </NavLink>

    </List>
    <Divider />
    
  
    <Box mx="auto" bgcolor="background.paper" p={1}>
        <Typography>  add links as above for the following: </Typography>
        <Typography> 💃   😂   😲</Typography>
    </Box>
  </Drawer>
  );
};