/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import './projectViewer.css'

const ProjectViewer = ({ info }) => {
  const viewer = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)
  const [offSet, setOffset] = useState()
  const middleSizeImage = require(`../../../data/images/middleSize/${info.contentsImage[0]}`)

  const handleScroll = (value) => {
    console.log('hehe', value.target.getBoundingClientRect())
  }

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.4) {
          setTimeout(() => {
            setStartAnimation(true)
          }, 0)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
      }
    )

    observer.observe(viewer.current)
    return () => observer && observer.disconnect()
  }, [])

  // console.log(offSet, window.scrollY, window.pageYOffset

  return (
    <div id='projectViewer' ref={viewer}>
      <div id={startAnimation ? 'images-container' : ''}>
        <img className={startAnimation ? 'project-images images-active' : 'project-images'} src={middleSizeImage.default} alt='image' />
      </div>
      <div id='descriptionContainer'>
        <p className={startAnimation ? 'project-title title-active' : 'project-title'}>{info.title}</p>
        <p className={startAnimation ? 'project-year year-active' : 'project-year'}>{info.year}</p>
        <div className={startAnimation ? 'project-year-vertical year-vertical-active' : 'project-year-vertical'}></div>
        <p className={startAnimation ? 'project-tool tool-active' : 'project-tool'}>{info.tool}</p>
        <p className={startAnimation ? 'project-descriptionTitle descriptionTitle-active' : 'project-descriptionTitle'}>{info.descptionTitle}</p>
        <p className={startAnimation ? 'project-description description-active' : 'project-description'}>{info.description}</p>
      </div>
    </div>
  )
}

export default ProjectViewer