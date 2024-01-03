// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [modeText, setModeText] = useState("Enable dark Mode");
  const [state, setState] = useState(null);
  const showAlert = (message, type) => {
    setState({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setModeText("Disable dark Mode");
      document.body.style.backgroundColor = "#102e5a";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      setModeText("Enable dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TexTutils2"
        mode={mode}
        toggleMode={toggleMode}
        inputModeText={modeText}
      />
      <Alert alert={state} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          <Route exact path="/" element={<Textarea heading="Enter text to analyze" inputModeText={mode} />}>
            
          </Route>
        </Routes>
        
        
      </div>
    </Router>
    </>
  );
}

export default App;
