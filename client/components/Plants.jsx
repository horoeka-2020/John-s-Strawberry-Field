import React from 'react'
 import { Link } from 'react-router-dom'

import plants from '../../data/plants.js'

const Plants = () => {
  const seasonKeys = Object.keys(plants)
  return (
    <div>
      <h2>Seasons</h2>
      <ul>
        {/* <li>Build your ranks list here</li> */}
        {seasonKeys.map(plant => {
         return <Link to={`/${plant}`}>
          <li key={plant}>{plant}
          </li>
          </Link>
        })}

      </ul>
    </div>
  )
}

export default Plants