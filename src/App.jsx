import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import LeaderBoard from './Pages/LeaderBoard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/leaderboard" element={<LeaderBoard />}/>
    </Routes>

  )
}

export default App
