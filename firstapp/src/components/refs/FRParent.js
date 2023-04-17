import  { Component, createRef } from 'react'
import FRinput from './FRinput'

class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRinput ref = {this.inputRef}/>
        <button onClick={this.clickHandler}> Focus input </button>
      </div>
    )
  }
}

export default FRParent
