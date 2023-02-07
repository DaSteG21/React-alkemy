import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/movies" element={<MoviesList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
