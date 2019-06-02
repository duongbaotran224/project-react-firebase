import React, { Component } from 'react';
import { Item, Placeholder } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase'

var storageRef = firebase.storage().ref();

const initialState = {
  date: "no date",
  description: "no description",
  image_url: '',
  title: "no name"
}

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      ...this.props,
      loading: true
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
          image_url: url,
          loading: false
        })
      })
    }
  }

  render() {
    const {loading} = this.state
    return (
      <Item as={Link} to={`post/${this.state.id}`} key={this.state.id}>
      {loading ? <Placeholder style={{ height: 100, width: 100, marginRight: '1em'}}>
    <Placeholder.Image />
  </Placeholder> : <Item.Image size='small' src={this.state.image_url} />}

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
