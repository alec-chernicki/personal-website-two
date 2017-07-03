import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './FlexItem.css';
import classNames from 'classnames';

class FlexItem extends React.Component {
  render() {
    const {
      size,
      offset,
      children,
      sizeSm,
      offsetSm,
      onClick,
      className
    } = this.props;

    const flexClasses = classNames('flex-item', {
      [`offset-${offset}`]: offset,
      [`size-${size}`]: size,
      [`size-sm-${sizeSm}`]: sizeSm !== undefined,
      [`offset-sm-${offsetSm}`]: offsetSm !== undefined,
    });

    return (
      <div
        className={className}
        styleName={flexClasses}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

FlexItem.propTypes = {
  offsetSm: PropTypes.number,
  sizeSm: PropTypes.number,
  size: PropTypes.number,
  offset: PropTypes.number,
  children: PropTypes.node,
};

export default CSSModules(FlexItem, styles, { allowMultiple: true });
