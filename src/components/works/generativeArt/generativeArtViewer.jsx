import React from 'react'
import './generativeArtViewer.css'
import ProjectViewer from './projectViewer'
import { Data_Generative } from '../../../data/global'

const GenerativeArtViewer = () => {
  return (
    <div id='generativeArtViewer'>
      <div id='separator'></div>
      {Data_Generative.contents.map((info, index) => (
        <ProjectViewer key={index} info={info} />
      ))}
      <div id='separator'></div>
    </div>
  )
}

export default GenerativeArtViewer