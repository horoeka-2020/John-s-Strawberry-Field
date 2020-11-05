import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Plants from './Plants'
import Season from'./Season'


const App = () => {
  return (
    <>
      <h1>Strawberry Fields Forever</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
       <Plants /><Route exact path='/' component={Home} />
       <Route path='/list/:plants' component={Season} />
      </div>
    </>
  )
}
export default App
