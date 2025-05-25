import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import LoginPage from './componenets/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
