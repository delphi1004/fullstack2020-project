import React, { useState } from 'react'
import './fullScreenProjectViewer.css'
import ImageGallery from '../../imageGallery'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const FullScreenProjectViewer = ({ info, initialPageNo, closeFullScreenhandler }) => {
  const [startClosing, setStartClosing] = useState(false)

  const closeingHandler = () => {
    console.log('EXIT FULL SCREEN MODE')

    setStartClosing(true)
    setTimeout(() => {
      closeFullScreenhandler()
    }, 600)
  }

  return (
    <div className={!startClosing ? 'fullScreen-project-Viewer active-openning' : 'fullScreen-project-Viewer active-closing'} >
      <ExitToAppIcon id='fullScreen-close' onClick={() => closeingHandler()} />
      <div id='fullScreen-container' >
        <ImageGallery info={info} showOriginalSize={true} startAnimation={true} initialPageNo={initialPageNo} />
      </div>

    </div >
  )
}

export default FullScreenProjectViewer