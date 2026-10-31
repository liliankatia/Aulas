import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { ToastContainer } from 'react-toastify/unstyled'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/lista' element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={4000} />
    </>
  )
}
    
export default App
