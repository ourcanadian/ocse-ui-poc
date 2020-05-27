import React from 'react';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { ThemeContext } from '../components/ThemeContext'

function SearchPage() {
  return (
    <ThemeContext.Consumer>
        {(theme) => (
            <Box height="100vh" style={{backgroundColor: theme.background}}>
              <Typography style={{color: theme.text.main}}>
                SearchPage
              </Typography>
            </Box>
        )}
    </ThemeContext.Consumer>
);  
}

export default SearchPage;
