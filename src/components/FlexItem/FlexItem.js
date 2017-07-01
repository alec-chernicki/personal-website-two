import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './FlexItem.css';
import classNames from 'classnames';

class FlexItem extends React.Component {
  render() {
    const {size, offset, children, onClick, className} = this.props;

    const flexClasses = classNames('flex-item', {
      [`offset-${offset}`]: offset,
      [`size-${size}`]: size
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
  size: PropTypes.number,
  offset: PropTypes.number,
  children: PropTypes.node,
};

export default CSSModules(FlexItem, styles, { allowMultiple: true });
