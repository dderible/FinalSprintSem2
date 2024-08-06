import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./app/components/navbar";

function App() {
  return (
    <div className = "App">
        <Navbar />
    </div>
  );
}

export default App;
