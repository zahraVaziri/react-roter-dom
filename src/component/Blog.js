import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
const Blog = (props) => {
  const query= queryString.parse(props.loaction.search)
  console.log(query)
    const id = props.match.params.id
  return (
    <div>
      bloge-{id}
      <Link to={`/bloges/${parseFloat(id)+1}`}>go to next </Link>
    </div>
  )
  
}

export default Blog
