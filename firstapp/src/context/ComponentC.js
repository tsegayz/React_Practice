import { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <h2> User name incoming </h2>

        <UserConsumer>
            { (username => {
                return <div> Welcome {username}</div>
            })}
        </UserConsumer>

      </div>
    )
  }
}

export default ComponentC


