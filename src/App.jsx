import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar.jsx";
import AppRoutes from "./components/Routes/AppRoutes.jsx";
import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/App.css";
import ParticleBackground from "./components/animation/ParticleBackground";

function App() {
  return (
    <Router>
      <div className="app background-style">
        <ParticleBackground />
        <Sidebar />
        <AppRoutes />
      </div>
    </Router>
  );
}
export default App;
