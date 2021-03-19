// @author Jimmy Yang
import React from 'react'

function SponsorItem({ img, alt }) {
  return (
    <div
      style={{ height: 300 }}
      className="my-4 d-flex flex-column justify-content-center align-items-center"
    >
      <img
        style={{
          display: 'block',
          margin: 'auto',
        }}
        src={img}
        alt={alt}
      />
    </div>
  )
}

export default SponsorItem
