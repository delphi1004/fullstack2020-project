import React from 'react'
import './projectViewer.css'

const ProjectViewer = ({ info }) => {
  return (
    <div id='projectViewer'>
      <img id='images' src={info.contentsImage[0].default} alt='image' />
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