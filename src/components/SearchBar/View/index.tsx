import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div>
      <Paper
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          m: '8px 8px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='search for Starters, Bevergages and Food'
          inputProps={{
            'aria-label': 'search for Starters, Bevergages and Food',
          }}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
