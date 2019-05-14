import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {firebaseConnect} from './firebase'

import Menu from './components/menu'
import Home from './components/home'
import About from './components/about'
import Blogs from './components/blogs'
import CreateBlog from './components/create_blog'

function App() {
  console.log(firebaseConnect)
  return (
    <div className="App">
    <Menu/>
    <Switch>
      <Route exact path='/' render={props => <Home/>}/>
      <Route path='/about'  render={props => <About/>}/>
      <Route path='/blogs' render={props => <Blogs/>}/>
      <Route path='/create_blog' render={props => <CreateBlog/>}/>
    </Switch>
    </div>
  );
}

export default App;
