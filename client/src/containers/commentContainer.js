import React, { Component } from 'react';
//import CommentForm from '../components/comments/commentForm';
import Comments from '../components/comments/Comments';
import { getComments } from '../actions/Comments';
import { connect } from 'react-redux';

class CommentsContainer extends Component {
    componentDidMount() {
        console.log("Comment componentDidMount")
        this.props.getComments() 
    }

    render() {
        return(
        <div className ="commentContainer">
                <div className="CommentProps">
                    <Comments comments={this.props.comments} />
                </div>
        </div>
        )
    };
};

const mapStateToProps = state => {return {comments: state.comments  }}
const mapDispatchToProps = dispatch => ({
    addComment: comments => dispatch({type: "ADD_COMMENT", comments }),
    getComments: () => { dispatch(getComments()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)