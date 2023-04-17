import { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMsg : " "
      }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments') 
        .then ( response => {
            this.setState({ posts : response.data})
        })
        .catch ( error => {
            this.setState({ 
                error: 'Error retrieving data'})
        })
    }

  render() {

    const {posts, errorMsg} = this.state

    return (
      <div>
        {
            posts.length ? 
            posts.map( post => 
              <div key={post.id}> 
                <h4> {post.name} </h4> 
                <p> {post.email} </p>
                <p> {post.body} </p>
                
              </div>) : 
            null 
        }
        {
          errorMsg ? <div> {errorMsg} </div> : null
        }
      </div>
    )
  }
}

export default PostList
