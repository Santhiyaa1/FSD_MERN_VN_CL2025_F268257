import React, { useState } from 'react'

const Welcome = () => {
    const [islogIN,setLogin]= useState(false);
  return (
    <div>
      {islogIN ? <h1>Welcome</h1>:<h1>Please Log in </h1>}
      <button onClick={setLogin}>login</button>
    </div>
  )
}

export default Welcome
