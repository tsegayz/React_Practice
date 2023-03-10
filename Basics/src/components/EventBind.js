import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hi"
      }

    //  3. BINDING in class constructor
      this.clickHandler = this.clickHandler.bind(this)
    }
    ///////////////////////

    // clickHandler(){
    //     this.setState({
    //         message: "bye!"
    //     })    
    // }

    //  4. CLASS property as arrow function

    clickHandler = () => {
        this.setState({
            message: "bye!"
        })
    }
    // ///////////////////////////
  render() {
    return (
      <div>
        <h3> Four approaches to bind an event in React </h3>
        <p>{this.state.message}</p>

        {/* 1. BINDING in render */}
        {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}

        {/* 2. ARROW function in render */}
        <button onClick={() => this.clickHandler()}> Click </button>

        
      </div>
    )
  }
}

export default EventBind
