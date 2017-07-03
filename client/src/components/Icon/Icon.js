import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';
import CSSModules from 'react-css-modules';

class Icon extends React.Component {
  render () {
    return (
      <div styleName="icon">
        {this.props.children}
      </div>
    )
  }
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CSSModules(Icon, styles);
