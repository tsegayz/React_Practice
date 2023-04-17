import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import '../components1/myStyles.css'

export class LoggedIn extends Component {
  render() {
    return (
      <div className='logged'>
        <UserConsumer>
            { (username => {
                return <div className='log'>
                  {
                    username !== '' && <h1> Welcome {username}. </h1>                    
                  }
                  </div>
                }
            )}
        </UserConsumer>
      </div>
    )
  }
}

export default LoggedIn
