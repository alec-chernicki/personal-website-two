import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIImage.css';

class UIImage extends React.Component {
  render () {
    return (
      <img styleName="image" {...this.props} />
    );
  }
}

export default CSSModules(UIImage, styles);
