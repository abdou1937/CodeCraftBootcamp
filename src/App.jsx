import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import EditPost from './components/EditPost'
import AddCart from './components/AddCart'
import Login from './components/Login'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/cart' element ={<Cart/>}></Route>
        <Route path="/EditPost/:id" element={<EditPost />}/>
        <Route path='/addCart' element={<AddCart/>}/>
      </Routes>
    </Router>
  )
}

export default App