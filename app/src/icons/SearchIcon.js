import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

function SearchIcon() {
    return (
        <Icon path={mdiMagnify}
            size={1}
        />
    );
}

export default SearchIcon;