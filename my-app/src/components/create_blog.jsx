import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import * as firebase from 'firebase'
import {firebaseConnect} from '../firebase'

const styles = {
  margin: '3em',
  padding: '2em'
}


class FormCreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  addBlog = () => {
    var connectData = firebase.database().ref('blogs_list')
    connectData.push({
      title: 'Blog Title 3',
      description: 'This is description 3 ...'
    })
  }

  deleteBlog = (id) => {
    var connectData = firebase.database().ref('blogs_list')
    connectData.child(id).remove()
  }


  render() {
    return (
      <Form style={styles}>
      <Form.Input label='Title' placeholder='Title'/>
      <Form.Input label='Description' placeholder='Description'/>
      <Form.TextArea label='Content' placeholder='Content...'/>
      <Button type='submit' onClick={() => this.deleteBlog("blog2")}>Submit</Button>
      </Form>
    );
  }

}

export default FormCreateBlog;
