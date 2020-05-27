import React from 'react';
import { Link, useLocation } from "react-router-dom";

import logo from '../images/our-white-logo.png'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import { ThemeContext } from './ThemeContext'
import SearchBar from './SearchBar'
import CompareIcon from '../icons/CompareIcon'

function TopBar(props) {
    const location = useLocation();
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <>
                    <AppBar style={{backgroundColor: theme.header}}>
                        <ToolBar>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Link to="/"><img src={logo} alt="Our Logo" style={{maxWidth: "75px"}}/></Link>
                                {(location.pathname !== "/") && <div style={{padding: "0 100px"}}><SearchBar/></div>}
                                <Link to="/compare">
                                    <IconButton edge="end">
                                        <CompareIcon/>
                                    </IconButton>
                                </Link>
                            </Grid>
                        </ToolBar>
                    </AppBar>
                    <ToolBar/>
                </>
            )}
        </ThemeContext.Consumer>
    );  
}


export default TopBar;