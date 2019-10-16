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

    handleOnChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const comment = {...this.state}
        this.props.addComment(comment)
        this.setState({
            comment: "",
            loading: false
            // available in the store because I connected dispatch to props
        })
    }

    render() {
        return (
            <div className="commentForm">
                <form onSubmit = {this.handleOnSubmit}>
                    <label htmlFor="userComment"> Comment: </label>
                    <input 
                    type = "text"
                    name = "user_comment"
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