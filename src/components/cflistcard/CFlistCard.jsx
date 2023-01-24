import React from 'react'
import "./cflistcard.scss"
import { FlistData, FlistDining, FlistMeeting } from '../../contexts/FListData'

const CFlistCard = () => {
  return (
    <>
          <div className='cf-lict'>
              <div className='cf-content'>
                  <p className='cf-p1'>{ FlistData.p1 }</p>
                  <span className='cf-t1'>{ FlistData.mt1 }</span>
                  <ul className='cf-nav'>
                      {
                          FlistMeeting.map((item, i) => {
                              return (
                                  <li key={i}>{item}</li>
                            )
                        })  
                  }
                  </ul>
                 <span className='cf-t2'>{ FlistData.dt1 }</span>
                    <ul className='cf-nav2'>
                      {
                          FlistDining.map((item, i) => {
                              return (
                                  <li key={i}>{item}</li>
                            )
                        })  
                        }
                  </ul>
                  <span className='cf-p2'>{FlistData.p2}</span>
              </div>            
          </div>
    </>
  )
}

export default CFlistCard
