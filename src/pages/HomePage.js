import React from 'react';

import Box from '@material-ui/core/Box'

import { ThemeContext } from '../components/ThemeContext'
import SearchBar from '../components/SearchBar'

function HomePage() {
  return (
    <ThemeContext.Consumer>
        {(theme) => (
            <Box 
              height="100vh" 
              style={{
                backgroundColor: theme.background,
                padding: "40vh 40vw"
              }}
            >
              <SearchBar/>
            </Box>
        )}
    </ThemeContext.Consumer>
);  
}

export default HomePage;