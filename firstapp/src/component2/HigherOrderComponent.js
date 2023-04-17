import { Component } from "react";

const HigherOrder = OriginalComponent => {
    class UpdatedComponent extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                count : 0
            }
        }
        
        clickHandler = () => {
            this.setState(
                prevState => {
                   return { count: prevState.count + 1}
                }
            )
        }
        render(){
            return(
            <OriginalComponent
                count = {this.state.count}
                clickHandler = {this.clickHandler}
            />
            )
        }
    }
    return UpdatedComponent

}

export default HigherOrder