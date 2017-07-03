import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './UIImage.css';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

class UIImage extends React.Component {
  constructor(props) {
    super(props);

    this.renderContainer = this.renderContainer.bind(this);
  }
  renderImage() {
    const { translucent, alt, src, styles } = this.props;
    const imageClass = classNames('image', {
      translucent,
    });
    
    return (
      <img
        src={src}
        className={styles[imageClass]}
        alt={alt}
      />
    );
  }
  renderContainer(isMobile) {
    const { height, heightSm } = this.props;
    const validHeight = isMobile ? heightSm : height;
    const style = {
      height: validHeight
    };

    return (
      <div style={style}>
        {this.renderImage()}
      </div>
    )
  }
  render () {
    return (
      <MediaQuery maxWidth={768}>
        {this.renderContainer}
      </MediaQuery>
    );
  }
}

UIImage.defaultProps = {
  translucent: false
}

UIImage.propTypes = {
  translucent: PropTypes.bool.isRequired,
};

export default CSSModules(UIImage, styles, { allowMultiple: true });
