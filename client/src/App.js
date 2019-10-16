import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getDreams } from './actions/Dreams';
import { getComments } from './actions/Comments';
import DreamForm from './components/dreams/dreamForm';
import CommentForm from './components/comments/commentForm';
import commentContainer from './containers/commentContainer';
import dreamContainer from './containers/dreamContainer';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';



class App extends Component {
  constructor() {
    super()
    this.state = {
      dreams: [],
      comments: []
    }
  }


  render() {
    return (
      <div className="app">
        <h1>Dreamy Time</h1>
        <div className="AppPage">
          <div className="navbar"><Nav /></div>
          <div className="comment_form"><CommentForm /></div>
          <div className="dreams_Container"><dreamContainer /></div>
        </div>
      </div>
    )
  }
}

const Nav = () => {
  return (
    <Router>
      <div className="navbar">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/comments" component={commentContainer} />
        <Route exact path="/dreams" component={dreamContainer} />
        <Route exact path="/comment_form" component={CommentForm} />
        <Route exact path="/dream_form" component={DreamForm} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  )
}


const mapStateToProps = (state) => {
  console.log("I have a dream, they have a sly comment.", state)
  return {
    dreams: state.dreamsReducer.dreams,
    comments: state.commentsReducer.comments

  }
}


// map the global state of the props to this specific component
export default connect(mapStateToProps, { getDreams }, { getComments })(App);
