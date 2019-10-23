import React, { Component } from 'react';
//import DreamForm from '../components/dreams/dreamForm';
import Dreams from '../components/dreams/Dreams';
import { getDreams } from '../actions/Dreams';
import { connect } from 'react-redux';


class DreamContainer extends Component {


    componentDidMount() {
        console.log("a")
        this.props.getDreams()
        console.log("b")
    }
    

    render() {
        return(
        <div className ="dreams_Container">
                <div className="Dreams">
                    <Dreams dreams={this.props.dreams} />
                    
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => {return {dreams: state.dreams  }}

const mapDispatchToProps = dispatch => ({
    addDream: dreams => dispatch({type: "ADD_DREAM", dreams }),
    getDreams: () => { dispatch(getDreams()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(DreamContainer)