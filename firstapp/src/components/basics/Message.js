import { Component } from "react";

class Message extends Component{

    constructor (){
        super()
        this.state = {
            message: "Welcome Tsega!"
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        } )
    }

    notification(){
        console.log("the notification bell is on ")
    }
 
    render(){
        return (
            <div>
                <p>  {this.state.message}  </p>
                <button onClick={( )=> this.changeMessage()}> Subscribe </button>
                <button onClick={this.notification}> Notification </button>
            </div>
        )
    }
}


export default Message
