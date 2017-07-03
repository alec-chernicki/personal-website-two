import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Button.css';
import classNames from 'classnames';
import {omit} from 'lodash';

const buttonUses = {
  secondaryDark: 'secondary-dark',
  secondary: 'secondary',
  primary: 'primary'
};

class Button extends React.Component {
  render () {
    const {to, use, children, type, className} = this.props;

    const buttonClass = classNames({
      'button-primary': use === buttonUses.primary,
      'button-secondary': use === buttonUses.secondary,
      'button-secondary-dark': use === buttonUses.secondaryDark,
    });

    const propsToPass = omit(this.props, [
      'use',
      'to',
      'buttonClass',
      'type'
    ]);

    if (type === 'submit') {
      return (
        <button {...propsToPass} className={className} styleName={buttonClass}>
          {children}
        </button>
      )
    }

    return (
      <Link {...propsToPass} className={className} styleName={buttonClass} to={to}>
        {children}
      </Link>
    );
  }
}

Button.propTypes = {
  use: PropTypes.oneOf(Object.keys(buttonUses)),
  type: PropTypes.string
};

Button.defaultProps = {
  use: buttonUses.primary
};

export default CSSModules(Button, styles);
