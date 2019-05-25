import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'
import * as firebase from 'firebase'

var storageRef = firebase.storage().ref();

const initialState = {
  date: "no date",
  description: "no description",
  image_url: 'https://react.semantic-ui.com/images/wireframe/image.png',
  title: "no name"
}

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      ...this.props
    }
  }

  componentDidMount() {
    this.loadImage(this.state)
  }

  loadImage = (item) => {
    if(item.image_ID) {
      const imageRef = storageRef.child(`gallery/${item.id}/` + item.image);
      imageRef.getDownloadURL().then((url) => {
        this.setState({
          image_url: url
        })
      })
    }
  }

  render() {
    return (
      <Item key={this.state.id}>
      <Item.Image size='small' src={this.state.image_url} />
      <Item.Content>
      <Item.Header>{this.state.title}</Item.Header>
      <Item.Description>{this.state.description}</Item.Description>
      <Item.Meta>
      <span className='date'>{this.state.date}</span>
      </Item.Meta>
      </Item.Content>
      </Item>
    );
  }
}

export default BlogItem;
