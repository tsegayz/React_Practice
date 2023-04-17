import  { Component, createRef } from 'react'

class RefDemo extends Component {

    constructor(props) {
      super(props)
      this.inputRef = createRef()
      this.cbRef = null
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }


    componentDidMount(){
        // this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus()
        }

    }
 
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
  render() {
    return (
      <div>
        <input type={"text"} ref = {this.inputRef}/>
        <button onClick={this.clickHandler}> click </button>
        <div>
            <input type={"text"} ref = {this.setCbRef}/>
        </div>
      </div>

    )
  }
}

export default RefDemo
