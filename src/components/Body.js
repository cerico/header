import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';


class BodyColor extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log(this.props.bodyColour)
    document.body.classList = this.props.bodyColour
  }


  render() {
    console.log(this.props)
    // alert(this.props.children)
   return (
    <div>{this.props.children}</div>
    )
  }
}

BodyColor.propTypes = {
  bodyColour: React.PropTypes.string
}
BodyColor.defaultProps = {
  bodyColour: "frontBody"
}

export default BodyColor;