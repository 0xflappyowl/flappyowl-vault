import { Home, MintPage, Dashboard } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import backgroundImage from "./assets/img/bg/Blue-color-abstract-background-lines-triangle-geometric-background-4k-wallpaper.jpg";
function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earn" element={<MintPage />} />
          <Route path="/owner-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
