import axios from "axios";
import "./App.css"
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

function App() {
  const [meanings, setMeanings] = useState([]);
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
    <div style={{height:"100vh"}}>
      <Container maxWidth="sm" backgroundColor="blue">hello</Container>
    </div>
  );
}

export default App;
