import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'

function TopBar(props) {
    return (
    <>
        <AppBar>
            <ToolBar>
                {props.children}
            </ToolBar>
        </AppBar>
        <ToolBar/>
    </>
    );  
}

export default TopBar;