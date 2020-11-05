import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Plants from './Plants'
//import Classifications from './Classifications'


const App = () => {
  return (
    <>
      <h1>Strawberry Fields Forever</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
       {/* <Route path='/' component={Plant} /> */}
       <Plants /><Route exact path='/' component={Home} />
      </div>
    </>
  )
}
export default App
