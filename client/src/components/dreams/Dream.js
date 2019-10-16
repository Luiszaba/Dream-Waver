import React, {Component} from 'react';

class DreamList extends Component {

    render() {
        return(
            <div classname="DreamList">
                <li>Title:{this.props.dream.title}"</li>
                <li>Description:{this.props.dream.description}"</li>
            </div>
        )
    };
};

export default DreamList;