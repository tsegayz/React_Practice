// /////////  A functional component   //////////////////////

import { Component } from "react";

// function Greet (){
//     return <h1> Hello Tsega </h1>
// }

// we can also use arrow functions

// if we export the component here when we are defining it, we have to use the exact name of the component when we are importing it and using it in the main app.js file
// export const Greet = () => <h1> Hello Tsega</h1>


// const Greet = () => <h1> Hello Tsega</h1>

// if we export the component here we can use any kind of name in the app.js file to use it 

// ///////   A class component  ///////////////////////////// 


// destructuring can be done on two ways in a function component
// 1, WE CAN DEFINE IT INSIDE THE COMPONENT

class Greet extends Component{
    render(){
        const {name, age} = this.props
        return (
            <p> {this.props.children}  My name is {name} and i am {age} years old.  </p> )
    }
}


export default Greet

