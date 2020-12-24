import './App.css'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from './components/header'
import Title from './components/title'
import About from './components/about'
import Works from './components/works'
import ProjectBase from './components/projectBase'

const RouterViewer = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition classNames='views' key={location.key} timeout={1500}>
        <Switch location={location}>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/works' component={Works}></Route>
          <Route exact path='/works/generativeart' component={ProjectBase}></Route>
          <Route exact path='/works/interactiveart' component={ProjectBase}></Route>
          <Route exact path='/works/modeling' component={ProjectBase}></Route>
          <Route exact path='/works/software' component={ProjectBase}></Route>
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

