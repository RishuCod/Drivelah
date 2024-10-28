import React from 'react'

export default function Template({activeTab,setActiveTab}) {
    function handleclick(){
        setActiveTab((s)=>8)
            }
          return (
            <div>
              <h1>Page {activeTab}</h1>
              <button onClick={handleclick}>go to Subscription page</button>
            </div>
          )
        }
        