import React from 'react'
import './projectViewer.css'

const ProjectViewer = ({ info }) => {
  const middleSizeImage = require(`../../../data/images/middleSize/${info.contentsImage[0]}`)

  return (
    <div id='projectViewer'>
      <img id='images' src={middleSizeImage.default} alt='image' />
      <div id='descriptionContainer'>
        <p id='title'>{info.title}</p>
        <p id='year'>{info.year}</p>
        <div id='year-vertical'></div>
        <p id='tool'>{info.tool}</p>
        <p id='descriptionTitle'>{info.descptionTitle}</p>
        <p id='description'>{info.description}</p>
      </div>
    </div>
  )
}

export default ProjectViewer