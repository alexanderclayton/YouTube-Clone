//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
