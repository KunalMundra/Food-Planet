import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-10">
      {Array(9)
        .fill("")
        .map((e, index) =>
        (
          <div key={index} className="m-4 p-4 w-[210px] rounded-lg bg-gray-300 h-80 hover:bg-gray-300"></div>
        ))}
    </div>
  )
}

export default Shimmer