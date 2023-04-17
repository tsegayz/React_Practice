import  { Component } from 'react'
import HigherOrder from './HigherOrderComponent';

class HoverCounter extends Component {


  render() {
    const { count, clickHandler } = this.props;

    return (
        <button onMouseOver={clickHandler}> clicked {count} times </button>
    )
  }
}

export default HigherOrder (HoverCounter)
