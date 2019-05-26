import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Menu from './components/menu'
import Blogs from './components/blogs'
import CreateBlog from './components/create_blog'
import BlogPost from './components/post'

function App(props) {
  return (
    <div className="App">
    <Menu/>
    <Switch>
      <Route path='/blogs' render={props => <Blogs/>}/>
      <Route path='/create_blog' render={props => <CreateBlog/>}/>
      <Route exact path='/post/:id' render={props => <BlogPost {...props}/>}/>
    </Switch>
    </div>
  );
}

export default App;
