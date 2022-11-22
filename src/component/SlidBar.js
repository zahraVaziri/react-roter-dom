import React from 'react'
import { Link } from 'react-router-dom'

const SlidBar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to={'/profile/downlods'}>downlods</Link>
        </li>
        <li>
            <Link to={'/profile/dashbord'}>dashbord</Link>
        </li>
      </ul>
    </div>
  )
}

export default SlidBar
