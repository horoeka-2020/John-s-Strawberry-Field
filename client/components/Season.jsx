import React from 'react'
import { Link } from 'react-router-dom'

import plants from '../../data/plants.js'

const Season = (props) => {
  const seasonName = props.match.params.plants
  return (
    <div>
    <h2>What kind of plants can I grow?</h2>
    <ul>
      {plants[seasonName].map((plant) => {
        return <Link key={plant.id} to={`/${seasonName}/${plant.name}`}>
          <button>{plant.name}</button>
        </Link>
      })}
    </ul>
    </div>
)}

export default Season

// ${plant.name}`