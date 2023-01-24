import React from 'react'
import "./lineheader.scss"

const LineHeader = ({title}) => {
  return (
    <>
        <div className="lh-header">
              <span className="lh-reserv">{title}</span>
        <div className="lh-line"></div>
      </div>
    </>
  )
}

export default LineHeader
