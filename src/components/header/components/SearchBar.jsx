import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import SearchList from "./SearchList";
import "../../../styles/abstacts/_variables.scss";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (  
    <Box 
      display="flex" 
      flexDirection="column"
      sx={{
        marginRight: { xs: 0, md: `calc(var(--global-spacer) * 2)` },
        flexGrow: 1,
        position: "relative",
      }} 
    >
      <TextField  
        placeholder="Я шукаю..."
        variant="filled"
        fullWidth
        value={search}
        onChange={searchChange}
        sx={{
          my: "auto",
          backgroundColor: 'var(--white-color)',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              transition: 'none',
              color: 'var(--white-color)'
            },
            '&:hover fieldset': {
              transition: 'none',
              color: 'var(--white-color)'
            },
            '&.Mui-focused fieldset': {
              transition: 'none',
              color: 'var(--white-color)'
            },
          },
          '& .MuiInputBase-root::before': {
            borderBottom: 'none',
          },
          '& .MuiInputBase-root::after': {
            borderBottom: 'none',
          },
          '&:hover .MuiInputBase-root::before': {
            borderBottom: 'none !important',
          },
          '&.Mui-focused .MuiInputBase-root::after': {
            borderBottom: 'none',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'var(--primary-text-color)'
          },
          '& .MuiInputBase-input': {
            py: '14px',
            pr: '18px',
          },
          '& .MuiInputBase-root': {
            padding: '0'
          },
          '& .MuiInputAdornment-root': {
            margin: '0'
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="large"
                sx={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px',
                  borderRadius: '0'
                }}
                onClick={() => onSearch(search)}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Box
        sx={{
          backgroundColor: 'white',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 10,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <SearchList input={search} onSearch={onSearch} />
      </Box>
    </Box>  
  );
}
 
export default SearchBar;
