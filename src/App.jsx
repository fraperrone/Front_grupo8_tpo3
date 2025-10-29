import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./components/routes/AppRoutes";
import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/app.css";
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
