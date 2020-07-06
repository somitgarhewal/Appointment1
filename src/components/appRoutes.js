import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './mainComponents/index'
import SearchCard from './mainComponents/searchCard';
import LoginPage from './mainComponents/loginPage'

const AppRoutes = () => { 
  return (
    <Switch>
      <Route path="/home" component={Home} exact/>
      <Route path="/searchSeller/:name" component={SearchCard} />
      <Route path="/loginPage" component={LoginPage} />
    </Switch>
  )
}

export default AppRoutes