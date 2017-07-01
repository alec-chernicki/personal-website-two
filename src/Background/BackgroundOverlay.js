import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './BackgroundOverlay.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const NUMBER_OF_PANELS = 7;

class BackgroundOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.panelRefs = [];
  }
  renderPanels() {
    let panels = [];

    for (let i = 0; i < NUMBER_OF_PANELS; i++) {
      panels.push(
        <div styleName="panel" key={i}/>
      )
    }

    return panels;
  }
  renderOverlay() {
    if (!this.props.isActive) {
      return null;
    }

    return (
      <div styleName="background-overlay">
        {this.renderPanels()}
      </div>
    );
  }
  render () {
    return (
      <ReactCSSTransitionGroup
        className={this.props.styles['panel-wrapper']}
        transitionName={{
          enter: this.props.styles['enter'],
          enterActive: this.props.styles['enter-active'],
          leave: this.props.styles['leave'],
          leaveActive: this.props.styles['leave-active'],
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {this.renderOverlay()}
      </ReactCSSTransitionGroup>
    )
  }
}

BackgroundOverlay.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default CSSModules(BackgroundOverlay, styles);
