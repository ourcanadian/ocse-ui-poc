import React from 'react';
import { Link, useLocation } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton';

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
                            <Link to="/">Home</Link>
                            {(location.pathname !== "/") && <div style={{padding: "0 100px"}}><SearchBar/></div>}
                            <Link to="/compare">
                                <IconButton size="small" style={{position: "fixed", right: "0"}}>
                                    <CompareIcon/>
                                </IconButton>
                            </Link>
                        </ToolBar>
                    </AppBar>
                    <ToolBar/>
                </>
            )}
        </ThemeContext.Consumer>
    );  
}


export default TopBar;