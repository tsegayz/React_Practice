import { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comment: "",
         choice: "React",
      }
    }
    
    usernameHandler = event =>{
        this.setState({
            username: event.target.value
        })
        }

    commentHandler = event => {
        this.setState({
            comment: event.target.value
        })
        }

    choiceHandler = event => {
        this.setState({
            choice: event.target.value
        })
        }

    submitHandler = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.choice }`)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.submitHandler}>
            <div>
                <label > Username </label>
                <input type="text" value= {this.state.username} onChange= {this.usernameHandler}/>
            </div>
        
            <div>
                <label > Comments </label>
                <textarea value= {this.state.comment} onChange= {this.commentHandler}> </textarea>
            </div>

            <div>
                <label> Language Choice </label>
                <select value={this.state.choice} onChange={this.choiceHandler}>
                    <option value="React"> React </option>
                    <option value="Node"> Node </option>
                    <option value="Vue"> Vue</option>
                </select>
            </div>
        <button type='submit' >
            Submit
        </button>
        </form>        
        
      </div>
    )
  }
}

export default Form
