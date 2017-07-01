import 'intersection-observer';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIFadeIn.css';
import classNames from 'classnames';

class UIFadeIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.setIsVisible = this.setIsVisible.bind(this);
  }

  componentDidMount() {
    const io = new IntersectionObserver(this.setIsVisible, {threshold: 0.6});

    io.observe(this.el);
  }

  setIsVisible (intersections) {
    if (intersections[0].isIntersecting) {
      this.setState({isVisible: true});
    }
  }

  render () {
    const { isVisible } = this.state;
    const elementStyle = classNames({
      'visible': isVisible,
      'not-visible': !isVisible
    });

    return (
      <div styleName={elementStyle} ref={(el) => this.el = el}>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(UIFadeIn, styles);
