import React from 'react'

function EarlyAccess({setActiveTab}) {
    function handleclick(){
setActiveTab((s)=>8)
    }
  return (
    <div>
      <h1>Early Access page</h1>
      <button onClick={handleclick}>go to Subscription page</button>
    </div>
  )
}

export default EarlyAccess
