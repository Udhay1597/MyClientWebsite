import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Transforming Walls, Transforming Lives!</p>
      <p>For Better Experience Our Painter App, Coming Soon!</p>
      <div className="app-download-platforms">
        <img src={assets.play_store}alt="" />
      </div>
    </div>
  )
}

export default AppDownload
