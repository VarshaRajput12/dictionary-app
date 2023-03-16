import axios from "axios";
import "./App.css"
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./Components/Header";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState("en")
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div className="main-container">
      <Container maxWidth="sm" backgroundColor="blue">
      <Header language={language} setLanguage={setLanguage}/>
      </Container>
    </div>
  );
}

export default App;
