import React from 'react'
import './ChildrenComp.css'

const ChildrenComp = ({children}) => {
  return (
    <div className="card">
        {children}
    </div>
  )
}

export default ChildrenComp