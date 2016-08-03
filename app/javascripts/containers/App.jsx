import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
