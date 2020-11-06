import React from 'react'
import plant from '../../data/plants'


const Grow = (props) => {
  const {plants, name} = props.match.params
  const select = plant[plants].find(p =>
    p.name === name
    )
  return (
    // <h2>{select.name}</h2>,
    <p>{select.planting}</p>
  )
}
export default Grow
