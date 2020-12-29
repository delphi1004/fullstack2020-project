import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import './projectViewer.css'
import ImageGallery from '../../imageGallery'
import { setModalViewShown } from '../../../reducer/statusReducer'
import FullScreenProjectViewer from './fullScreenProjectViewer'

const ProjectViewer = ({ info }) => {
  const viewer = useRef(null)
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(0)
  const [startAnimation, setStartAnimation] = useState(false)
  const [enableMousehover, setEnableMousehover] = useState(false)
  const [showFullScreen, setShowFullScreen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEnableMousehover(true)
    }, 2500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.3) {
          setTimeout(() => {
            setStartAnimation(true)
          }, 0)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    )

    observer.observe(viewer.current)
    return () => observer && observer.disconnect()
  }, [])

  const fullScreenhandler = (pageNo) => {
    console.log('full screen!', pageNo)
    setPageNo(pageNo)
    dispatch(setModalViewShown(true))
    setShowFullScreen(true)
  }

  const closeFullScreenhandler = () => {
    dispatch(setModalViewShown(false))
    setShowFullScreen(false)
  }

  return (
    <div id='projectViewer' ref={viewer}>
      {showFullScreen &&
        <FullScreenProjectViewer info={info} initialPageNo={pageNo} closeFullScreenhandler={closeFullScreenhandler} />
      }
      <div id={enableMousehover ? 'images-container' : ''}>
        <ImageGallery info={info} showOriginalSize={false} startAnimation={startAnimation} fullScreenhandler={fullScreenhandler} />
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
