import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDreams } from '../../actions/Dreams'

class DreamForm extends Component {
    state = {
        description: '',
        loading: false
    }

    handleOnChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const dream = {...this.state}
        this.props.addDream(dream)
        this.setState({
            title: '',
            description: '',
            loading: false
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
                    name = "desciption"
                    value = {this.state.description}
                    onChange = {this.handleOnChange}
                    />
                    <label htmlFor="dreams"> Add Dream: </label>
                    
                    <input 
                    type = "text"
                    name = "desciption"
                    value = {this.state.description}
                    onChange = {this.handleOnChange}
                    />
                    <button type="submit">Add dream</button>
                </form>
                

            </div>
        )
    }
}

export default connect(null, { addDreams })(DreamForm)