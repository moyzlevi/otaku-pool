import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPools from "./pages/ListPools";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pools" element={<ListPools />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
