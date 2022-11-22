import React from 'react'
import { Link } from 'react-router-dom'

const Bloges = () => {
     const items = [
    {name:'blog -1',to:'bloges/1'},
    {name:'blog -2',to:'bloges/2'},
    {name:'blog -3',to:'bloges/3'}
  ]
  return (
    <div>
      Bloges
      <div>
        {items.map((item)=>{
            return <Link to={{pathname:item.to,search:"sort=name"}}
            >
            {item.name}
            </Link>
        })}
      </div>
    </div>
  )
}

export default Bloges
