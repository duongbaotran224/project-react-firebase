import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
var moment = require('moment');

function makeID() {
  var text_id = '';
  var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++){
    text_id += character.charAt((Math.floor(Math.random() * character.length)))
  }
  return text_id
}

const styles = {
  margin: '3em',
  padding: '2em'
}

const initialState = {
  id: makeID(),
  title: '',
  description: '',
  date: moment().format('LL'),
  image_ID: null
}

class FormCreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {
      ...initialState,
      },
      file_img: null
    };
  }


  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      blog: {
        ...this.state.blog,
        [e.target.name]: e.target.value
      }
    })
  }

  fileChangedHandler = (event) => {
    var file = event.target.files[0]
    this.setState({
      blog: {
        ...this.state.blog,
        image_ID: makeID()
      },
      file_img: file
    })
  }


  addBlog = () => {
    const {blog, file_img} = this.state
    //upload image to firebasestorage
    if(blog.image_ID) {
      this.props.uploadImage(file_img, blog.id, blog.image)
    }
    //add blog  to database
    this.props.addBlog(this.state.blog)
  }

  // deleteBlog = (id) => {
  //   var connectData = firebase.database().ref('blogs_list')
  //   connectData.child(id).remove()
  // }]

  render() {
    return (
      <Form style={styles}>
      <Form.Input label='Title'
      name ='title'
      placeholder='Title'
      value={this.state.title}
      ref={this.textInput}
      onChange={this.handleChange}
      />
      <Form.Input label='Description'
      name ='description'
      placeholder='Description'
      value={this.state.description}
      onChange={this.handleChange}
      />
      <Form.TextArea label='Content' placeholder='Content...' value=''/>
      <Form.Input label="Upload image" type="file" onChange={this.fileChangedHandler}/>
      <Button type='submit' onClick={this.addBlog}>Submit</Button>
      </Form>

    );
  }
}

// const mapStateToProps= state => ({
// test: state.blogs.test
// });

const mapDispatchToProps = (dispatch) => ({
  addBlog: (blog_added) => dispatch({type: 'ADD_BLOG', blog_added}),
  uploadImage: (file, blogID, imgID) => dispatch({
    type: 'UPLOAD_IMAGE',
    file,
    blogID,
    imgID
  })
});

export default connect(null, mapDispatchToProps)(FormCreateBlog);
