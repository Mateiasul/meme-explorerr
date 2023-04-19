import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
export default function Searchbar({ setContract }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: 2,
        width: "50%",
      }}
    >
      <SearchIcon
        sx={{ color: "action.active", mr: 1, my: 0.5, fontSize: 30 }}
      />
      <TextField
        sx={{
          "& label.Mui-focused": { color: "white" },
          "& .MuiInput-underline.Mui-focused::after": {
            borderBottom: "2px solid white",
          },
        }}
        fullWidth
        id="input-with-sx"
        label="Search contract..."
        variant="standard"
      />
    </Box>
  );
}
