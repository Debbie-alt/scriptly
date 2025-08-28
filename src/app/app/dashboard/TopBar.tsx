import React from 'react'
import { getAuth } from 'firebase/auth'

const TopBar = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    console.log(auth.currentUser?.displayName)
  return (
    <div>TopBar</div>
  )
}

export default TopBar