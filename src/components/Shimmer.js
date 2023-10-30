import React from 'react'

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(9)
        .fill("")
        .map((e, index) =>
        (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  )
}

export default Shimmer