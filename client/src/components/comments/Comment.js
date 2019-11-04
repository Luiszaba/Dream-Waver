import React, { Component } from 'react';

class Comment extends Component {
    constructor(){
        super() 
        this.state = {
            UpVote: 0,
            DownVote: 0,
            show: true 
        }}
    
        incrementVote = () => {
            this.setState({UpVote: this.state.UpVote + 1 })
        }
    
        decrementVote = () => {
            this.setState({DownVote: this.state.DownVote - 1 })
        }

    render() {
        return(
             
            <div className="organizedCommentList">
                <ul>
                <li>Comment: "{this.props.comments.comments}"</li>
                <button onClick = {this.decrementVote}>Down Vote</button>{this.state.DownVote}
                <button onClick = {this.incrementVote}>Up Vote</button>{this.state.UpVote}
                </ul>
            </div>
            
        );
    }
};

export default Comment;