import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './Drawer.styles'
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
      <ListItem button key="cats">
        <ListItemIcon>😸</ListItemIcon>
        <ListItemText primary="Cats" />
      </ListItem>
      <ListItem button key="dogs">
        <ListItemIcon>🐕</ListItemIcon>
        <ListItemText primary="Doggos" />
      </ListItem>

      <ListItem button key="aliens">
        <ListItemIcon>👽</ListItemIcon>
        <ListItemText primary="Aliens" />
      </ListItem>

    </List>
    <Divider />
    
    {/* to add links as above for the following */ }
    <Box mx="auto" bgcolor="background.paper" p={1}>
    💃   😂   😲
    </Box>
  </Drawer>
  );
};