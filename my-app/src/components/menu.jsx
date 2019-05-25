import React, { Component } from 'react'
import '../index.css';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default class MenuApp extends Component {

  list_items = [
    {
      text: 'home',
      url: '/'
    },
    {
      text: 'about',
      url: '/about'
    },
    {
      text: 'blogs',
      url: '/blogs'
    },
    {
      text: 'contact',
      url: '/contact'
    },
    {
      text: 'add blog',
      url: '/create_blog'
    },
  ]

  render() {
    return (
      <Menu fixed='top' pointing secondary style={{background: 'white'}}>
      {this.list_items.map((item, key) => (
          <Menu.Item as={NavLink} exact to={`${item.url}`}
          key={item.text}
          name={item.text}
          style={{transition: 'all 0.3s ease'}}
          />
      ))}
      </Menu>
    )
  }
}
