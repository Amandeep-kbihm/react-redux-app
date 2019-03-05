import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {styles} from '../styles/style'
import { withStyles,CssBaseline,Drawer,AppBar,Toolbar,
        List,Typography,Divider,IconButton,Badge
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {ListItem,ListItemIcon,ListItemText,ListSubheader,

} 
from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
class Rightbar extends React.Component{
    state = {
        open: true,
      };
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
      handleDrawerClose = () => {
        this.setState({ open: false });
      }; 
    render(){
        const { classes } = this.props;
        return(
            <div>
                
                <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>   
            </div>   
        )
    }
}
export default Rightbar