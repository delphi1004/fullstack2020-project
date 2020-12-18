import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setCurrentWorksMenu } from '../../reducer/statusReducer'
import './worksCard.css'
import { global } from '../../data/global'

const WorksCard = ({ index, info }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const delay = `${index / 3}s`
  const number = (index + 1).toString().padStart(2, 0)

  const clickHandler = (id) => {
    console.log('clicked id ', id)
    dispatch(setCurrentWorksMenu(id))

    switch (id) {
      case global.worksMenu.generativeArt: history.push('/works/generativeart'); break
    }
  }

  return (
    <div id='worksCard' style={{ '--backgroundColor': info.backgroundColor, '--delay': delay }} onClick={() => clickHandler(info.id)}>
      <img id='thumbnailImage' src={info.titleImage.default} alt='image' />
      <p id='works-title'>{info.title}</p>
      <p id='works-separator'></p>
      <p id='works-description'>{info.description}</p>
      <p id='works-number'>{number}</p>
      <p id='works-vertical-separator'></p>
      <div id='works-extraDescription-container'>
        <p id='works-extraDescription'>{info.extraDescription} </p>
      </div>
    </div>
  )
}

export default WorksCard