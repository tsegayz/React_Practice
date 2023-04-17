import { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {

    const { count, incrementCounter} = this.props
    return (
      <button onClick={incrementCounter}> clicked {count} </button>
    )
  }
}

export default ClickCounterTwo
