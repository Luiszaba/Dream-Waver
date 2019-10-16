import React, { Component } from 'react';

class Comment extends Component {

    

    render() {
        return(
            <div className="organizedCommentList">
                <br></br>
                "{this.props.comment.comment}"
            </div>
        );
    }
};

export default Comment;