import React from 'react';
import './App.css';
import Login from './components/login'
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={ Login }/>
    </div>
  )
}