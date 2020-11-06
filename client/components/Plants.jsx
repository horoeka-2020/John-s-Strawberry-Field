import React from 'react'
import { Link } from 'react-router-dom'

import plants from '../../data/plants.js'

const Plants = () => {
  const seasonKeys = Object.keys(plants)
  return (
    <div>
      <h2>Seasons</h2>
      <ul>
        {seasonKeys.map(plant => {
         return <Link key={plant} to={`/${plant}`}>
          <li>{plant}
          </li>
          </Link>
        })}
      </ul>
    </div>
  )
}

export default Plants