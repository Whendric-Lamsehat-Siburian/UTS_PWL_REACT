import React, { Component } from 'react'
import { Router, Routes, Route} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sukses" element={<Sukses/>}/>
          </Routes>

      </Router>
    )
  }
}