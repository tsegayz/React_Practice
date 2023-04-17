import React, { Component } from 'react'

class Conditional extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    // there are four conditional rendering

    // 1. IF/ELSE
    // if(this.state.isLoggedIn) {
    //     return <p>Your are logged in </p>
    // }else{
    //     return<p> Please log in </p>
    // }

    // 2. ELEMENT VARIABLES

    // let message
    // if(this.state.isLoggedIn){
    //     message = <p>Your are logged in </p>
    // }else{
    //     message = <p>Your are logged in </p>
    // }

    // return message

    // 3. TERNARY CONDITIONAL OPERATOR

    // return (
    //     this.state.isLoggedIn ? <p>Your are logged in </p> : <p> Please log in </p>
    // )

    // 4. SHORT CIRCUIT OPERATOR - is mostly used when we only need to execute sth if a condition is statisfied and we don't want to execute anything if the condition is not satisfied

    return this.state.isLoggedIn && <p>Your are logged in </p> 
  }
}

export default Conditional
