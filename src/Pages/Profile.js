import React from 'react'
import { Route } from 'react-router-dom'
import Daheds from '../component/Daheds'
import Downlods from '../component/Downlods'
import SlidBar from '../component/SlidBar'

const Profile = () => {
  return (
    <div>
      <p>profile</p>
      <SlidBar/>
      <Route path={'/profile/downlods'} component={Downlods} />
      <Route path={'/profile/dashbord'} component={Daheds} />
    </div>
  )
}

export default Profile
