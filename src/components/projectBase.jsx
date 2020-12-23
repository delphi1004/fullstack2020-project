/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './projectBase.css'
import { Data_Generative, Data_Interactive } from '../data/global'
import ProjectContainer from './works/generativeArt/projectContainer'

let currentViewData
const viewData = []
viewData['works-generativeart'] = {
  data: Data_Generative, title: 'Generative Art', background: '#bf8726'
}
viewData['works-interactiveart'] = {
  data: Data_Interactive, title: 'Interactive Art', background: '#bfa126'
}

const ProjectBase = () => {
  const [backgroundColor, setBackgroundColor] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    const currentUrl = window.location.href.split('/')
    currentViewData = viewData[`${currentUrl[3]}-${currentUrl[4]}`]
    setBackgroundColor(currentViewData.background)
  }, [])

  if (!currentViewData) {
    return null
  }

  return (
    <div id='project-base' style={{ backgroundColor: backgroundColor }} >
      <ProjectContainer info={currentViewData} />
    </div >
  )
}

export default ProjectBase