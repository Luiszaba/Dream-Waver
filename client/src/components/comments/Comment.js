import React, { Component } from 'react';

class CommentList extends Component {
    render() {
        return(
            <div className="organizedCommentList">
                
                <ul>
                <ol>"{this.props.comment}"</ol>
                </ul>
            </div>
        );
    }
};

export default CommentList;