import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Home from "@/pages/home"
import Shop from "@/pages/shop"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Navigate replace to='/home' />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
