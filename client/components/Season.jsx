import React from 'react'
 import { Link } from 'react-router-dom'

import plants from '../../data/plants.js'

const Season = (props) => {
  const seasonName = props.match.params.plants
  return (
    <div>
    <h2>What to grow</h2>
    <ul>
      {plants[seasonName].map((plant) => {
        return <Link to={`/rank/${seasonName}/${plant.name}`}>
          <li key={plant.id}>{plant.name}</li>
        </Link>
      })}
    </ul>
    </div>

export default Season