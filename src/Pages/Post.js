import React from 'react'

const Post = (props) => {
  const id = props.match.params.id || 1
  return (
    <div>
      post-{id}
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  )
}

export default Post
