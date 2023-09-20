import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Download from './download'
import "./style/App.css"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Download />} />
      <Route path = "/PDF" element = {<Download />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App