import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Plants from './Plants'
import Season from'./Season'
import Grow from './Grow'


const App = () => {
  return (
    <>
      <h1>Strawberry Fields Forever</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Route exact path='/' component={Home} />
      <div className='main'>
       <Plants />
       <Route path='/:plants' component={Season}></Route>
       <Route path='/:plants/:name' component={Grow}></Route>
      </div>
    </>
  )
}
export default App
