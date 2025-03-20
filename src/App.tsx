import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import useAlphabetFavicon from './hooks/useAlphabetFavicon';

const App: React.FC = () => {
  useAlphabetFavicon("M", "#974b00", "#fff");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App