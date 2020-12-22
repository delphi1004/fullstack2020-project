/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './generativeArtViewer.css'
import ProjectViewer from './projectViewer'
import { Data_Generative } from '../../../data/global'

const GenerativeArtViewer = () => {
  const [displayProjects, setDisplayProjects] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplayProjects(true)
    }, 1000)
  }, [])

  return (
    <div id='generativeArtViewer' >
      <div id='separator' />
      {displayProjects &&
        Data_Generative.contents.map((info, index) => (
          <ProjectViewer key={index} info={info} />
        ))
      }
      <div id='separator' />
    </div>
  )
}

export default GenerativeArtViewer