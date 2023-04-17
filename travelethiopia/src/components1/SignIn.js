import axios from 'axios'
// import '../components1/myStyles.css'

import LoggedIn from './LoggedIn'
import { UserProvider } from './userContext'
import { useState, useEffect } from 'react'

import React from 'react'

function SignIn(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect( () => {
      axios.post('https://jsonplaceholder.typicode.com/users ')
      .then( resp => {
        setUsername(resp.data.title)
        setPassword(resp.data.password)
        setEmail(resp.data.email)
      })
      .catch (error => console.log('Error posting data'))
  },[])


  const handleSubmit = e => {
    e.preventDefault()
    console.log(username)
  }

  return (
      <div>

        <div className="container">
          <div className="title-container">
            <div className="title">
              <h1> Welcome ! </h1>
              <p> This is travel Ethiopia 
                  Making your journy as incredible as your destination, 
                  inviting you to discover Ethiopia</p>
            </div>
          </div>
          <div className="signin-container">
            <div className="signin">
              <h1>Sign <span> in </span></h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='list-items'>
                <ul className='formlist'>
                  <li className='form-items'> User Name </li>
                  <input  type='text' value={username} onChange={ e => setUsername( e.target.value.toString())}/>
                  <li className='form-items'> Password </li>
                  <input type='password' value={password} onChange={e => setPassword( e.target.value.toString()) } />
                  <li className='form-items's> Email </li>
                  <input type='email' value={email} onChange={e => setEmail ( e.target.value.toString())} />
                </ul>
              </div>
              <button type='submit' onClick={() => props.onFormSwitch('signin')} > <a href='/log'> Sign In </a>  </button>
            </form>
            <div className="socials">
              <ul className='social-list'>
                <li className="social-items"><a href="#in"><i className="fab fa-instagram"></i></a></li>
                <li className="social-items"><a href="#in"><i className="fab fa-facebook"></i></a></li>
                <li className="social-items"><a href="#in"><i className="fab fa-twitter-square"></i></a></li>
              </ul>
            </div> 
          </div>
        </div>

        <UserProvider value={username}>
          <LoggedIn/>
        </UserProvider>
        
      </div>
  )
}

export default SignIn



// class SignIn extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          username: '',
//          password: '',
//          email: ''
//       }
//     }
//     changeHandler = event => {
//         this.setState( {
//             [event.target.name] :  event.target.value
//         })      
//     }

//     submitHandler = event => {
//       event.preventDefault()
//       axios.post('https://jsonplaceholder.typicode.com/posts ', this.state)
//       .then( respose => console.log(respose))
//       .catch (error => console.log('Error posting data'))
//     }

//   render() {

//     const {username, password, email} = this.state

//     return (
//       <div>

//         <div className="container">
//           <div className="title-container">
//             <div className="title">
//               <h1> Welcome ! </h1>
//               <p> This is travel Ethiopia 
//                   Making your journy as incredible as your destination, 
//                   inviting you to discover Ethiopia</p>
//             </div>
//           </div>
          
//           <div className="signin-container">
//             <div className="signin">
//               <h1>Sign <span>in</span></h1>
//             </div>
//             <form onSubmit={this.submitHandler}>
//               <div className='list-items'>
//                 <ul className='formlist'>
//                   <li className='form-items'> User Name </li>
//                   <input  type='text' name='username' value={username} onChange={this.changeHandler}/>
//                   <li className='form-items'> Password </li>
//                   <input type='password' name='password' value={password} onChange={this.changeHandler} />
//                   <li className='form-items's> Email </li>
//                   <input type='email' name='email' value={email} onChange={this.changeHandler} />
//                 </ul>
//               </div>
//               <button type='submit'> <a href='/log'> Sign In </a>  </button>
//             </form>
//             <div class="socials">
//               <ul className='social-list'>
//                 <li class="social-items"><a href="#in"><i class="fab fa-instagram"></i></a></li>
//                 <li class="social-items"><a href="#in"><i class="fab fa-facebook"></i></a></li>
//                 <li class="social-items"><a href="#in"><i class="fab fa-twitter-square"></i></a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <UserProvider value={username}>
//           <LoggedIn/>
//         </UserProvider>
        
//       </div>
//     )
//   }
// }

// export default SignIn
