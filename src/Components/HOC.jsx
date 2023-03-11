import React from 'react'

export default function HOC(props) {
  return (
    <>
        <div >
            <props.data/>
        </div>
        
    </>
  )
}
