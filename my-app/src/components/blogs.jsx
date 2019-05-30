import React from 'react'
import { Item,  Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
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
      loading: true,
      dataFirebase: []
    };
  }

  componentDidMount() {
    /// load arraydata from firebase
    var dataRef = firebaseConnect.database().ref('blogs_list/');
    dataRef.on('value', (snapshot) => {
      const dataObj = snapshot.val()
      var dataArray = Object.keys(dataObj).map(i => dataObj[i])
      if(dataArray) {
        this.setState({
          dataFirebase: dataArray,
          loading: false
        })
      }
    });
  }

  componentWillUnmount() {
    this.setState({
      loading: true,
      dataFirebase: null
    })
  }


  render() {
  const {dataFirebase, loading} = this.state
    return (
      <div style={styles}>


      {loading && <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>}
      <Item.Group divided>
        {dataFirebase.map((item, index) => (
          <BlogItem key={item.id} {...item}/>
        ))}
      </Item.Group>
      </div>
    )
  }
}


export default Blogs
