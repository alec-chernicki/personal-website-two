import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

import Sidebar from './Sidebar/Sidebar';
import Background from './Background/Background';
import BackgroundOverlay from './Background/BackgroundOverlay';
import Navigation from './Navigation/Navigation';
import TransitionGroup from 'react-transition-group/TransitionGroup'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpen: false
    };

    this.setIsNavigationOpen = this.setIsNavigationOpen.bind(this);
  }
  setIsNavigationOpen(isNavigationOpen) {
    this.setState({
      isNavigationOpen
    });
  }
  renderNavigation() {
    if (!this.state.isNavigationOpen) {
      return null;
    }

    return (
      <Navigation
        onClick={this.setIsNavigationOpen}
        setIsNavigationOpen={this.setIsNavigationOpen}
      />
    )
  }
  render() {
    const {isNavigationOpen} = this.state;
    const { children, location } = this.props;

    return (
      <div styleName="App">
        <TransitionGroup>
          { React.cloneElement(children, {key: location.pathname}) }
        </TransitionGroup>
        <Sidebar
          onClick={this.setIsNavigationOpen}
          isActive={isNavigationOpen}
        />
        {this.renderNavigation()}
        <BackgroundOverlay isActive={isNavigationOpen} />
        <Background />
      </div>
    );
  }
}

export default CSSModules(App, styles);
