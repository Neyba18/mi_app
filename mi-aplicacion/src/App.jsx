import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Usuarios from './pages/Usuarios'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/usuarios">Usuarios</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App