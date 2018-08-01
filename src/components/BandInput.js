// Add BandInput component
import React, { Component } from 'react';
import {connect} from 'react-redux'

class BandInput extends Component {

    constructor(props){
      super(props)

      this.state = {
        text: '',
      }
    }

    handleChange(event){
      this.setState({
        text: event.target.value
      })
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.addBand(this.state)
      this.setState({
        text: ''
      })
    }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        Band Name: <input type ="text" onChange ={(event)=> this.handleChange(event)} value={this.state.text}/><br/>
        <input type="submit" value = "Submit Band!"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
