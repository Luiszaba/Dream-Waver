import React, {Component} from 'react';

class DreamList extends Component {
    render() {
        return(
            <div className="DreamList">
                <ul>
                <ol>Title:"{this.props.dream.title}"</ol>
                <ol>Description:{this.props.dream.description}"</ol>
                </ul>
            </div>
        )
    };
};

export default DreamList;