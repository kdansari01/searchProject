import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortBy() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={state}
          onChange={handleChange}
          displayEmpty
          className="text-light fw-bold"
        >
          <MenuItem value="">
            <em>Sort by</em>
          </MenuItem>
          <MenuItem value={1}>Active</MenuItem>
          <MenuItem value={2}>Pouse</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
