import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { browserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'


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
