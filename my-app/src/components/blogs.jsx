import React from 'react'
import { Item } from 'semantic-ui-react'
// import data from '../data.json'
import {firebaseConnect} from '../firebase'
import BlogItem from './blog_item'

const styles = {
  margin: '3em',
  padding: '2em'
}


class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    };
  }

  componentWillMount() {
    /// load arraydata from firebase
    var dataRef = firebaseConnect.database().ref('blogs_list/');
    dataRef.on('value', (snapshot) => {
      const dataObj = snapshot.val()
      var dataArray = Object.keys(dataObj).map(i => dataObj[i])
      if(dataArray) {
        this.setState({
          dataFirebase: dataArray
        })
      }
    });
  }


  render() {
  const {dataFirebase} = this.state
    return (
      <Item.Group divided style={styles}>
        {dataFirebase.map((item, index) => (
          <BlogItem key={item.id} {...item}/>
        ))}
      </Item.Group>
    )
  }
}


export default Blogs
