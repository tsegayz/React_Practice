
import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    // Calls to setState method are asynchronous so any code written after set state method doesn't know the changed value of the state 
    // So, when we write a code that we want to be executed after the state is changed, 
    // we have to pass it inside a call back function which is a second parameter to the setState method  while the first is the state object
    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => {console.log('Callback value', this.state.count)}
    //     )
    //     console.log(this.state.count);
    // }

    // when we have to update state based on the previous state value, we pass in a function as an argument instead of the regular object

    increment(){ 
        this.setState(prevState => ({
            count : prevState.count + 1})
    ) }

    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

  render() {
    const {count} = this.state
    return (<div>
        <button onClick={() => this.incrementThree()}> Increment </button>
        <p> Count - {count} </p>
        <button onClick={() => this.decrement()}> Decrement </button>
    </div>
        
    )
  }
}

export default Counter
