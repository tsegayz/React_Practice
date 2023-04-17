
// ragment allows the grouping of children elements without using additional extra nodes to the DOM

import Columns1 from "./Columns1"
import Columns2 from "./Columns2"
import { Fragment } from "react"

function FragmentDemo() {
  const favFood = [ {title: "chicken"}, {title: "fries" }]

  return (
    <div>
      <table>
        <tr>
          <Columns1/>
        </tr>
        <tr>
          <Columns2/>
        </tr>
      </table>
      {
        favFood.map(item => (
            <Fragment>
                <p> {item.title} </p>
            </Fragment>
        ))
      
      }
    </div>
  )
}

export default FragmentDemo