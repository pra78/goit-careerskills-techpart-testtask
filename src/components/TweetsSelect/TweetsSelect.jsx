import PropTypes from "prop-types";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TweetsSelect = ({ follow, selectTweets }) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tweets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={follow}
          label="Tweets"
          onChange={(e) => selectTweets(e)}
        >
          <MenuItem value={"showAll"}>Show All</MenuItem>
          <MenuItem value={"false"}>Follow</MenuItem>
          <MenuItem value={"true"}>Followings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TweetsSelect;

TweetsSelect.propTypes = {
  follow: PropTypes.string.isRequired,
  selectTweets: PropTypes.func.isRequired
}
