import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    render() {
        const { comments } = this.props;
        const listComments = comments.comments.map(comment => 
            
            <React.Fragment key={comment.id}>
            <Comment comment={comment}/>
            </React.Fragment>   
            );
            

        return(
            <div className="CommentList"> {listComments} </div>
        );
    };
};

export default Comments;