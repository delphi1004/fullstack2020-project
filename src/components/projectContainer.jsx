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

  const handleScroll = (e) => {
    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll = `${totalScroll / windowHeight}`
    console.log('hehe', totalScroll)
  }

  useEffect(() => {
    console.log('hahahah')
    window.scrollTo(0, 0)
    const currentUrl = window.location.href.split('/')
    CurrentViewer = viewers[`${currentUrl[3]}-${currentUrl[4]}`]
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div id='project-container'>
      {CurrentViewer &&
        <CurrentViewer />
      }
    </div>
  )
}

export default ProjectContainer