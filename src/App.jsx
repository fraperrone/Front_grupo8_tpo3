import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import AppRoutes from "./components/Routes/AppRoutes";
import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/App.css";
import ParticleBackground from "./components/UI/ParticleBackground";

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
