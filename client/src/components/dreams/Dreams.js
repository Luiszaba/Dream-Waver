import React, { Component } from 'react';
import Dream from './Dream';

class Dreams extends Component {
    render() {
        const { dreams } = this.props
        const dreamList = dreams.dreams.map((dream) =>
            <ul key={dream.id}>
            <Dream 
            dream={dream}
            />
            </ul>
        )
    return(
        <div className="DreamList"> {dreamList} </div>
        )
    }  
}

export default Dreams;