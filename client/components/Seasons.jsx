import React from 'react'

import seasons from '../../data/plants'
// import plants from '../../data/plants'
// import { Link } from 'react-router-dom'

const Seasons = () => {
  // const rankKeys = Object.keys(ranks)
  return (
    <div>
      <h2>Seasons</h2>
      <ul>
        <li>Build your ranks list here</li>
        {/* {rankKeys.map((rank) => {
          return <Link to={`/list/${rank}`}>
            <li key={rank}>{rank}</li>
          </Link>
        })} */}

      </ul>
    </div>
  )
}

export default Seasons