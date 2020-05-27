import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'

import { ThemeContext } from './ThemeContext'

function TopBar(props) {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <>
                    <AppBar style={{backgroundColor: theme.header}}>
                        <ToolBar>
                            {props.children}
                        </ToolBar>
                    </AppBar>
                    <ToolBar/>
                </>
            )}
        </ThemeContext.Consumer>
    );  
}


export default TopBar;