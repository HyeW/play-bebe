import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <TextField
      id="search-bar"
      label="가고 싶은 지역을 입력해보세요!"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{mt: 10}}
    />
  );
}