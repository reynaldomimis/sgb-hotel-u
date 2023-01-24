import React from 'react'
import "./linetitle.scss"

const LineTitle = ({label}) => {
  return (
    <>
        <div className="lt-title">
          <span className="lt-soto">
                  {label}
          </span>
        </div>
    </>
  )
}

export default LineTitle
