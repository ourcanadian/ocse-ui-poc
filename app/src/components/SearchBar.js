import React, { useState } from 'react';
import { Redirect, useLocation } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '../icons/SearchIcon'

function parseQuery(path) {
    if(path.match("/search/")) {
        return path.replace("/search/", "")
    }
    return ""
}

function SearchBar() {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const location = useLocation()
    const [value, setValue] = useState(parseQuery(location.pathname))
    return (
      <form onSubmit={() => setShouldRedirect(true)}>
        <FormControl>
          <InputLabel style={{color: "#000000"}}>
            Search
          </InputLabel>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" size="small">
                  {
                    (shouldRedirect)
                    && <Redirect push to={'/search/'+value}/>
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
