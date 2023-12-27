import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


//React-router-dom:To navigate smoothly between pages
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#999999'
      showAlert("Dark Mode has been enabled", "info")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "info")
      document.title = "TextUtils - Light Mode"
    }
  }

  //Alert
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
    <BrowserRouter>

      <Navbar title="TextUtils_Website" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />}/>
          <Route exact path="/about" element={
            <About mode={mode}/>}/>

          <Route element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />}/>

        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
