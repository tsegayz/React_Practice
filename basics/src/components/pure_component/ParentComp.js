import React, { Component } from 'react'
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"mina"
        }
      }
      
      componentDidMount(){
          setInterval(() => {
              this.setState({
                  name: "mina"
              })
          }, 2000);
      }
  render() {
    console.log("ParentComponent")
    return (
      <div>
        ParentComponent
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
