import React from 'react'
import { Route } from 'react-router-dom'

import Plants from './Plants'
import Home from './Home'
//import Classifications from './Classifications'


const App = () => {
  return (
    <>
      <h1>Strawberry Fields Forever</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Route exact path='/' component={Home} />
      <div className='main'>
        <Plants />
        {/* <Route path='/season/:plants' component={Plants}></Route> */}
        {/* <Route path='/rank/:rank/:name' component={Descriptions}></Route> */}
      </div>
    </>
  )
}
export default App