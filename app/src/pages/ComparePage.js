import React from 'react';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { ThemeContext } from '../components/ThemeContext'

function ComparePage() {
  return (
    <ThemeContext.Consumer>
        {(theme) => (
            <Box height="100vh" style={{backgroundColor: theme.background}}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-between"
              >
                <Typography style={{color: theme.text.main}}>
                  ComparePage
                </Typography>
              </Grid>
            </Box>
        )}
    </ThemeContext.Consumer>
  );  
}

export default ComparePage;
