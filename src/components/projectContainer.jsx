/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './projectContainer.css'
import { useSelector } from 'react-redux'
import GenerativeArtViewer from '../components/works/generativeArt/generativeArtViewer'

const viewers = []
viewers['works-generativeart'] = GenerativeArtViewer
let CurrentViewer

const ProjectContainer = () => {
  const currentMenu = useSelector(state => state.systemStatus.currentMenu)
  const currentSubMenu = useSelector(state => state.systemStatus.currentSubMenu)

  const handleScroll = (value) => {
    //console.log('hehe', value.target.getBoundingClientRect(), window.pageYOffset)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const currentUrl = window.location.href.split('/')
    CurrentViewer = viewers[`${currentUrl[3]}-${currentUrl[4]}`]
  }, [])

  return (
    <div id='project-container' onScroll={handleScroll}>
      {CurrentViewer &&
        <CurrentViewer />
      }
    </div>
  )
}

export default ProjectContainer