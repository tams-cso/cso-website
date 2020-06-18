import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Resources from './components/resources'
import Team from './components/team'
import FAQ from './components/faq'

class App extends Component {
  render = () => (
    <div className='App'>
      <Header />
      <Resources />
      <Team />
      <FAQ />
    </div>
  )
}

export default App
