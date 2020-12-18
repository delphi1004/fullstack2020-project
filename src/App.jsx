import './App.css'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from './components/header'
import Title from './components/title'
import About from './components/about'
import Works from './components/works'
import GenerativeArtViewer from './components/works/generativeArt/generativeArtViewer'

const RouterViewer = () => {
  const location = useLocation()
  const currentMenuChanged = useSelector(state => state.systemStatus.menuChanged)

  console.log('currentMenuChanged ', currentMenuChanged)

  return (
    <TransitionGroup>
      <CSSTransition classNames='views' key={location.key} timeout={1500}>
        <Switch location={location}>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/works' component={Works}></Route>
          <Route exact path='/works/generativeart' component={GenerativeArtViewer}></Route>
          <Route exact path='/' component={Title}></Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <RouterViewer />
      </Router>
    </div>
  )
}

export default App

