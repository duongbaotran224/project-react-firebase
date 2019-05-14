import React from 'react'
import { Image, Item } from 'semantic-ui-react'
import data from '../data.json'

const styles = {
  margin: '3em',
  padding: '2em'
}

const Blogs = () => (
  <Item.Group divided style={styles}>
    {data.map((item, index) => (
      <Item>
        <Item.Image size='small' src={data[index].image} />

        <Item.Content>
          <Item.Header>{data[index].title}</Item.Header>
          <Item.Description>{data[index].description}</Item.Description>
          <Item.Meta>
            <span className='date'>{data[index].date}</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
)

export default Blogs
