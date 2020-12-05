import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Requests from "./components/Requests";
import Results from "./components/Results";

function App() {
  const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending); // U might be thinking why this state is even here ,so i dont want the load of usecontext so to make it little short i used state in main component

  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
