import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDreams } from '../../actions/Dreams'

class DreamForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: ''
        //loading: false
        }
    }

    handleOnChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addDreams(this.state)
        this.setState({
            title: '',
            description: '',
            //loading: false
            // available in the store because I connected dispatch to props
        })
    }

    render() {
        return (
            <div className="dreamForm">
                <form onSubmit = {this.handleOnSubmit}>
                    <label htmlFor="dreamtitle">Dream Title: </label>
                    <input 
                    type = "text"
                    name = "title"
                    value = {this.state.title}
                    onChange = {this.handleOnChange}
                    />
                    <label htmlFor="dreamsDescription">Dream: </label>
                    
                    <input 
                    type = "text"
                    name = "description"
                    value = {this.state.description}
                    onChange = {this.handleOnChange}
                    />
                    <button type="submit">Add Dream</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addDreams })(DreamForm)