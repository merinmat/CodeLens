import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch("http://localhost:3000/api/health");

      const data = await res.json();

      setResponse(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>CodeLens</h1>
      <p>API Status:{response.status}</p>
    </div>
  );
}

export default App;
