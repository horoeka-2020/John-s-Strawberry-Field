import React from 'react'
import { Link } from 'react-router-dom'

import plants from '../../data/plants.js'

const Plants = () => {
  const seasonKeys = Object.keys(plants)
  return (
    <div>
      <ul>
        {seasonKeys.map(plant => {
         return <Link key={plant} to={`/${plant}`}>
          <button type="button" >{plant}
          </button>
          </Link>
        })}
      </ul>
    </div>
  )
}

export default Plants