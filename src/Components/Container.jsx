import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import React from "react";
import "./Container.css";
import Languages from "./Language";

const Container = ({ language, setLanguage, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const handleChange = (language) =>{
    setLanguage(language)
    setWord("")
  }
  return (
    <div className="Container">
      <h1>{word ? word : "Word Hunt"}</h1>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Type a word"
            variant="standard"
          />
          <TextField
            select
            label="Language"
            value={language}
            helperText="Please select the Language"
            variant="standard"
            onChange={(e) => handleChange(e.target.value)}
          >
            {Languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Container;
