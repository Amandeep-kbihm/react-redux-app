import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {styles} from '../styles/style'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Material from '../link/links'

class Header extends React.Component{
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
        console.log(this.props.rightbar)
        const { classes } = this.props;
        return(
            <div>
                <Material.CssBaseline />
                <Material.AppBar 
                    position="absolute" 
                    className={classNames(classes.appBar, 
                        this.state.open && classes.appBarShift)}>
                    <Material.Toolbar 
                        disableGutters={!this.state.open} 
                        className={classes.toolbar}>
                        <Material.IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                            classes.menuButton,
                            this.state.open && classes.menuButtonHidden,
                            )}>
                        <Material.MenuIcon />
                        </Material.IconButton>
                        <Material.Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}>
                            Dashboard
                        </Material.Typography>
                    </Material.Toolbar>
                </Material.AppBar>
                <Material.Drawer
                    variant="permanent"
                    classes={{
                    paper: classNames(classes.drawerPaper, 
                        !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}>
                    <div className={classes.toolbarIcon}>
                    <Material.IconButton onClick={this.handleDrawerClose}>
                        <Material.ChevronLeftIcon />
                    </Material.IconButton>
                    </div>
                    <Material.Divider />
                    <Material.ListItem button>
                        <Material.ListItemIcon>
                            <Material.DashboardIcon />
                        </Material.ListItemIcon>
                        <Link to="/"> <Material.ListItemText primary="Dashboard" /></Link>
                    </Material.ListItem>
                    <Material.ListItem button>
                    <Material.ListItemIcon>
                        <Material.PeopleIcon />
                    </Material.ListItemIcon>
                    <Link to="/todo"><Material.ListItemText primary="ToDo List" /></Link>
                    </Material.ListItem>
                    <Material.ListItem button>
                    <Material.ListItemIcon>
                        <Material.DashboardIcon />
                    </Material.ListItemIcon>
                    <Link to="/property"><Material.ListItemText primary="Property" /></Link>
                    </Material.ListItem>   
                    <Material.Divider />
                </Material.Drawer> 
            </div>
        )
    }
}

export default Header