/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './projectViewer.css'

const ProjectViewer = ({ info }) => {
  const [startAnimation, setStartAnimation] = useState(false)
  const [offSet, setOffset] = useState()
  const middleSizeImage = require(`../../../data/images/middleSize/${info.contentsImage[0]}`)

  useEffect(() => {
    // window.onscroll = () => {
    //   setOffset(prevState => {
    //     if (prevState !== window.pageYOffset) {
    //       console.log('scrolling...')
    //     }
    //     return window.pageYOffset
    //   })
    // }
    // setInterval(() => {
    //   console.log('haha')
    // }, 1000)
    setTimeout(() => {
      setStartAnimation(true)
    }, 1)

  }, [])

  // console.log(offSet, window.scrollY, window.pageYOffset)

  return (
    <div id='projectViewer' onScroll={test => { console.log(test) }}>
      <img id='images' src={middleSizeImage.default} alt='image' />
      <div id='descriptionContainer'>
        <p className={startAnimation ? 'title title-active' : 'title'}>{info.title}</p>
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