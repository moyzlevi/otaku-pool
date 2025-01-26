import Header from "./components/header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
