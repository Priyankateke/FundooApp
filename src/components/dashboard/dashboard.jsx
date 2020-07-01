// Imports
import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import keep from '../../assets/keep_logo.png'
import { fade } from '@material-ui/core/styles';
import { withStyles, AppBar, Drawer, ListItemIcon, List, ListItem, ListItemText, CssBaseline, Tooltip } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Refresh from '@material-ui/icons/Refresh'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/Delete';
import Grid from '@material-ui/icons/Apps'
import ListIcon from '@material-ui/icons/List'
import NewNote from './newNote'
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import '../../styles/createNote.css'

const drawerWidth = 240;

// Styles
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      backgroundColor: "#fb0;",
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  search: {
    position: 'relative',
    height: '46px',
    borderRadius:'8px',
    
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
      
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
    color: "#000000"
  },
  avatar: {
    margin: 10,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000000"
  },
  content: {
    flexGrow: 1,
    marginTop: '100px',  
    padding: theme.spacing.unit * 3,
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  tools: {
    marginTop: "9px",
    marginBottom: "9px",
    justifyContent: ""
  },
  color: {
    backgroundColor: "white"
  },

  multilineColor: {
    color: '#000000'
  },

  logo: {
    width:'40px',
    height:'40px'
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      open: false,
      view :false,
      typeOfNote:'Keep'
    };
  }

  // Events
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  changeView = (event, viewType) => {
    event.preventDefault()
    this.setState({ typeOfNote: viewType })
  }

  logOut(event) {
    event.preventDefault()
  }
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleViewClick = () => {
    this.setState({ view: !this.state.view });
  }
  handleRefresh = () => {
    window.location.reload();
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleMouseEnterEffect = () => {
    this.setState({ anchorEl: null,
    open:true });
  }

  handleMouseLeaveEffect=()=> {
    this.setState({
      open:false });
  }


  // render
  render() {
    // Set Properties
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.logOut.bind(this)}>Logout</MenuItem>
      </Menu>
    );
    return (
      <div className="main">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, classes.color, { [classes.appBarShift]: this.state.open, })}>
          <Toolbar >
          <IconButton className={classes.multilineColor}
             onClick={this.handleToggle}
              aria-label="Open drawer">
            <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={keep} alt="Logo" />
            <Typography variant="h6" color="inherit" className={classes.multilineColor}>
              Fundoo
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="Refresh" className={classes.tools}>
                <IconButton color="inherit" onClick={this.handleRefresh} className={classes.large, classes.multilineColor}>
                  <Refresh />
                </IconButton>
              </Tooltip>

              <div className={classes.tools}>
                <Tooltip title={this.state.view ? "Grid View" : "List View"}>
                  <IconButton
                    color="inherit"
                    onClick={this.handleViewClick}
                    className={classes.multilineColor}
                    aria-label="List/Grid"
                  >
                    {this.state.view ? <Grid /> : <ListIcon />}
                  </IconButton>
                </Tooltip>
              </div>
              <Tooltip title="Notification">
                <IconButton className={classes.multilineColor}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

              <IconButton
                className={classes.multilineColor}
                edge="end"
                aria-label="account user"
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                onClick={this.handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}>      
          <div className={classes.toolbar}/>
          <Divider />
          <List onMouseEnter={this.handleMouseEnterEffect}
          onMouseLeave={this.handleMouseLeaveEffect}
          >
            <ListItem button key='Notes' onClick={(event) => { this.changeView(event, 'Keep') }}>
              <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
              <ListItemText>Notes</ListItemText>
            </ListItem>
            <ListItem button key='Reminder'>
              <ListItemIcon><NotificationsNoneOutlinedIcon /></ListItemIcon>
              <ListItemText>Reminder</ListItemText>
            </ListItem>
            <ListItem button key='Edit'>
              <ListItemIcon><EditOutlinedIcon /></ListItemIcon>
              <ListItemText>Edit labels</ListItemText>
            </ListItem>
            <ListItem button key='Archive' onClick={(event) => { this.changeView(event, 'Archive') }}>
              <ListItemIcon><ArchiveOutlinedIcon /></ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </ListItem>
            <ListItem button key='Delete' onClick={(event) => { this.changeView(event, 'Trash') }}>
              <ListItemIcon><Delete /></ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </ListItem>
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolar}/>
          <NewNote/>
        </main>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ((withStyles(styles, { withTheme: true })(Dashboard))) 