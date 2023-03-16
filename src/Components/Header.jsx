import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import React from "react";
import "./Header.css";
import Languages from "./Language";

const Header = ({languages, setLaguages}) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return (
    <div className="header">
      <h1>Word Hunt</h1>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField
            id="outlined-select-language"
            select
            label="Select"
            defaultValue="English"
            value={languages}
            helperText="Please select the Language"
            onChange={(e)=> setLaguages(e.target.value)}
          >
            {Languages.map((option) => 
              <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            )}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
