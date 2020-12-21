import { global } from '../data/global'

const statusInfo = {
  currentMenu: global.menu.idle,
  currentSubMenu: global.menu.idle,
  menuChanged: true,
  subMenuChanged:true
}

export const setCurrentMenu = (id) => {
  return dispatch => {
    dispatch(
      {
        type: 'SET_CURRENT_MENU',
        currentMenu : id
      }
    )
  }
}

export const setCurrentSubMenu = (id) => {
  return dispatch => {
    dispatch(
      {
        type: 'SET_CURRENT_SUB_MENU',
        currentSubMenu : id
      }
    )
  }
}

const statusReducer = (state = statusInfo, action) => {

  // console.log('---- current menu', state)
  // console.log('---- current action', action)
  switch (action.type) {
    case 'SET_CURRENT_MENU':
    {
      return {
        ...state, currentMenu: action.currentMenu,
        menuChanged: state.currentMenu !== action.currentMenu ? true : false
      }
    }
    case 'SET_CURRENT_SUB_MENU':
    {
      return {
        ...state, currentSubMenu: action.currentSubMenu,
        subMenuChanged: state.currentSubMenu !== action.currentSubMenu ? true:false
      }
    }

    default:
  }

  return state
}

export default statusReducer