import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import EditPost from './components/EditPost'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cart/>}></Route>
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  )
}

export default App
