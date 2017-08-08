// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
  }

  click = (event) => {
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render(){
    return(
      <button onClick={this.click}></button>
    )
  }


}

export default CoordinatesButton
