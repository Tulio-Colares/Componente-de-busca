import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { suggestions } from '../data/suggestions';

export default function SearchBar() {
    const defaultProps = {
      options: suggestions,
      getOptionLabel: (option) => option.suggestion,
    };
    const flatProps = {
      options: suggestions.map((option) => option.suggestion),
    };
    const [value, setValue] = useState(null);

    return(
        <Stack>
            <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            renderInput={(params) => (
            <TextField {...params} label="Buscar" variant="standard" />
            )}
            />
        </Stack>
    )
}