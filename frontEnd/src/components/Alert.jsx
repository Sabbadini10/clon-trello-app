import React from 'react'

const Alert = ({msg}) => {
  
  
  return (
  <div
    className="bg-danger text-white p-2 mb-1 border-2 rounded border border-warning-subtle"
  >
    <strong>{msg}</strong>
  </div>
)
}

export default Alert;
