import React, {Component} from 'react';

class DreamList extends Component {
    constructor(props){
    super(props) 
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
            <div className="DreamList">
                <ul>
                <li>Title:"{this.props.dream.title}"</li>
                <li>Description:{this.props.dream.description}"</li>
                <button onClick = {this.decrementVote}>Down Vote</button>{this.state.DownVote}
                <button onClick = {this.incrementVote}>Up Vote</button>{this.state.UpVote}
                
                
                </ul>
            </div>
        )
    }
}

export default DreamList;