import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CommentForm from './components/comments/commentForm';
import CommentsContainer from './containers/commentContainer';
import CommentList from './containers/commentContainer';

import DreamForm from './components/dreams/dreamForm';
import DreamContainer from './containers/dreamContainer';
import DreamList from './containers/dreamContainer'

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
          <div className="dream_form"><DreamForm /></div>
          <div className="comment_form"><CommentForm /></div>
          <div className="dream_container"><DreamList /></div>
          <div className="comment_container"><CommentList /></div>
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
        <Route exact path="/comments" component={CommentsContainer} />
        <Route exact path="/dreams" component={DreamContainer} />
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
    dreams: state.dreams,
    comments: state.comments

  }
}


// map the global state of the props to this specific component
export default connect(mapStateToProps)(App);
