import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexRow.css';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

const alignProps = [
  'center',
  'flex-start',
  'flex-end'
];

class FlexRow extends React.Component {
  render () {
    const {align, className} = this.props;

    const flexClasses = classNames('flex-row', className, {
      [`align-${align}`]: align
    });

    return (
      <div styleName={flexClasses}>
        {this.props.children}
      </div>
    )
  }
}

FlexRow.propTypes = {
  align: PropTypes.oneOf(alignProps),
};

export default CSSModules(FlexRow, styles, { allowMultiple: true });
