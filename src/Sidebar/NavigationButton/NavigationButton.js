import React from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './NavigationButton.css';
import classNames from 'classnames';

class NavigationButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getLineClass = this.getLineClass.bind(this);
  }
  handleClick() {
    const toggledIsActive = !this.props.isActive

    this.props.onClick(toggledIsActive);
  }
  getLineClass(className) {
    const { isActive } = this.props;

    return classNames({
      [className]: !isActive,
      [`${className}-active`]: isActive
    });
  }
  render() {
    return (
      <div styleName="navigation-button" onClick={this.handleClick}>
        <div styleName={this.getLineClass('line-one')} />
        <div styleName={this.getLineClass('line-two')} />
        <div styleName={this.getLineClass('line-three')} />
      </div>
    )
  }
}

NavigationButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default CSSModules(NavigationButton, styles);
