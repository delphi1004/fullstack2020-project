/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './projectContainer.css'
import ProjectViewer from './projectViewer'
import { Data_Generative, Data_Interactive } from '../../../data/global'

const projectContainer = ({ info }) => {
  const [displayProjects, setDisplayProjects] = useState(false)

  useEffect(() => {
    const currentUrl = window.location.href.split('/')
    setTimeout(() => {
      setDisplayProjects(true)
    }, 1000)
  }, [])

  return (
    <div id='project-container' style={{ backgroundColor: info.background }}>
      {displayProjects &&
        <p id='works-catagory'>{info.title} </p>
      }
      <div id='project-separator' />
      {displayProjects &&
        info.data.contents.map((info, index) => (
          <ProjectViewer key={index} info={info} />
        ))
      }
      <div id='project-separator' />
    </div>
  )
}

export default projectContainer