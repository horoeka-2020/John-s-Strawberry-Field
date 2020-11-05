import React from 'react'
import { Route } from 'react-router-dom'

import Plants from './Plants'
import Home from './Home'
import Seasons from './Seasons'
//import Classifications from './Classifications'


const App = () => {
  return (
    <>
      <h1>Strawberry Fields Forever</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
      <Route exact path='/' component={Home} />
        <Seasons />
        <Route path='/plants' component={Plants} />
      </div>
    </>
  )
}
export default App
