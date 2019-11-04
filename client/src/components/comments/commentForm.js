import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/Comments'

class CommentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
    }

    handleOnChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        console.log(2)
        e.preventDefault()
        this.props.addComment(this.state)
        console.log(3)
        this.setState({
            comment: "",
            loading: false
            //available in the store because I connected dispatch to props
        })
    }

    render() {
        console.log(4)
        return (
            <div className="commentForm">
                <form onSubmit = {this.handleOnSubmit}>
                    <label htmlFor="userComment"> Comment: </label>
                    <input 
                    type = "text"
                    name = "comment"
                    value = {this.state.comment}
                    onChange = {this.handleOnChange}
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm)