import  { Component } from 'react'
import HigherOrder from './HigherOrderComponent';

class ClickCounter extends Component {
    
  render() {
    const { count, clickHandler } = this.props;
    
    return (

        <button onClick={clickHandler}> clicked {count} times </button>
      
    )
  }
}

export default HigherOrder (ClickCounter)
