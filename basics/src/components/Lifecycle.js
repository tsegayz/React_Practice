import React, { Component } from 'react'

class Lifecycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Never come here!"
      }
      console.log("Lifecycle constructor")
    }
    
    static getDerivedStateFromProps(state, props){
        console.log("Lifecycle getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle componentDidMount")
    }

  render() {
    console.log("Lifecycle render")
    return (
      <div>
        Lifecycle render
        
      </div>
    )
  }
}

export default Lifecycle
