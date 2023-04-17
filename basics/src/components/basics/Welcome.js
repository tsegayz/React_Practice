
// function Welcome (){
//     return <h1> Hello Tsega </h1>
// }

// we can also use arrow functions

// if we export the component here when we are defining it, we have to use the exact name of the component when we are importing it and using it in the main app.js file
// export const Welcome = () => <h1> Hello Tsega</h1>


// destructuring can be done on two ways in a function component
// 1, WE CAN DEFINE IT IN THE PROPS PARAMETER OR
// 2, WE CAN DEFINE IT INSIDE THE COMPONENT

const Welcome = (props) => {
    const {name, age} = props

    function clickHandler(){
        console.log("button clicked")
    }
   return <div>
        <button onClick={clickHandler}> Click Me </button>
        <p> My name is {name} and i am {age} years old </p>
    </div>
}




// if we export the component here we can use any kind of name in the app.js file to use it 


export default Welcome