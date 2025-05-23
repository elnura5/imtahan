
import './App.css'
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Details from './Pages/Details'
import NotFoundPage from './Pages/NotFoundPage'
import Wishlist from './Pages/Wishlist'
import { AddAdmin } from './Pages/AddAdmin'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Shop from './Pages/Shop'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='addadmin' element={<AddAdmin/>}/>
          <Route path='detail/:id' element={<Details/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
