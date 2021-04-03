// @author Jimmy Yang
import React from 'react'

function ColourBoxContainer({ children }) {
  return (
    <div className="mt-2 mb-4 d-flex flex-column flex-md-row justify-content-between">
      {children}
    </div>
  )
}

export default ColourBoxContainer
