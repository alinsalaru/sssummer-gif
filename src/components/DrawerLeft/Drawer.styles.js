import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from '../Layout/Layout.styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

export default useStyles