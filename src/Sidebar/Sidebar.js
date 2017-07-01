import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Sidebar.css';
import {Link} from 'react-router';
import NavigationButton from './NavigationButton/NavigationButton';
import SocialLinks from './SocialLinks/SocialLinks';
import logoImage from './logo.svg';

class Sidebar extends React.Component {
  render () {
    return (
      <div styleName="sidebar">
        <div styleName="buttons">
          <Link to="/" styleName="logo">
            <img src={logoImage} alt="logo"/>
          </Link>
          <NavigationButton
            isActive={this.props.isActive}
            onClick={this.props.onClick}
          />
        </div>
        <SocialLinks />
      </div>
    )
  }
}

Sidebar.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default CSSModules(Sidebar, styles);
