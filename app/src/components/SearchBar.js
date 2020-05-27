import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '../icons/SearchIcon'

function SearchBar() {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    return (
      <form onSubmit={() => setShouldRedirect(true)}>
        <FormControl>
          <InputLabel style={{color: "#000000"}}>
            Search
          </InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" size="small">
                  {
                    (shouldRedirect)
                    && <Redirect push to='/search'/>
                  }
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    );
}

export default SearchBar;
