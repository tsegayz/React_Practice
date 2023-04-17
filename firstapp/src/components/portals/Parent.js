import  Component from 'react'
import PortalDemo from './PortalDemo'

class Parent extends Component {
  render() {
    return (
      <div>
        Come home children
        <PortalDemo/>
      </div>
    )
  }
}

export default Parent
