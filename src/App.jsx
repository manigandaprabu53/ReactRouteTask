import React from 'react'
import TopBar from './Components/TopBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullStack from './Components/FullStack'
import All from './Components/All'
import Cyber from './Components/Cyber'
import DataScience from './Components/DataScience'

function App() {
  return <>
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path='/all' element={<All/>}/>
        <Route path='/full-stack' element={<FullStack/>}/>
        <Route path='/cyber-security' element={<Cyber/>}/>
        <Route path='/data-science' element={<DataScience/>}/>
        <Route path='*' element={<All/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App