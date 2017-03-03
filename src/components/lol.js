import React, { Component} from 'react'

class BodyColor extends Component {
 
 
  componentDidMount() {
    document.body.classList.add(this.props.bodyColour))
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('darkClass', nextProps.isDark)
  }
  componentWillUnmount() {
    document.body.classList.remove('darkClass')
  }
  render() {
    return this.props.children
  }

  BodyColor.propTypes = {
    bodyColour: React.PropTypes.string
  }
  BodyColor.defaultProps = {
    bodyColour: ""
  }
}

export default BodyColor