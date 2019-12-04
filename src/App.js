import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Resources from './components/resources'
import Team from './components/team'

class App extends Component {
  render = () => (
    <div className='App'>
      <Header />
      <Resources />
      <Team />
    </div>
  )
}

export default App
