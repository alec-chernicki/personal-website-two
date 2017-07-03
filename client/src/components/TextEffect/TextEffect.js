import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './TextEffect.css';
import {TimelineMax, Power1} from 'gsap';
import { ENTER_TIME_IN_SECONDS } from 'constants/transitionTimes';
import GSAP from 'react-gsap-enhancer';

const _enterAnimation = ({target, options}) => {
  const outerText = target.findAll({name: 'outerText'});
  const innerText = target.findAll({name: 'innerText'});

  return new TimelineMax({ delay: ENTER_TIME_IN_SECONDS })
    .add('first')
    .staggerFrom(outerText,  1, {ease: Power1.easeOut, x: '200%'}, 0.04, options.delay)
    .staggerFrom(innerText,  1, {ease: Power1.easeOut, x: '-150%'}, 0.04, options.delay);
};

class TextEffect extends React.Component {
  componentDidMount() {
    const { delay } = this.props;
    this.addAnimation(_enterAnimation, { delay });
  }
  renderLines() {
    const {lines} = this.props;

    return lines.map((item, key) => {
      return (
        <span styleName="text-effect-outer" key={key} name="outerText">
          <span styleName="text-effect-inner" name="innerText">
            {item}
          </span>
        </span>
      );
    });
  }
  render () {
    return (
      <span>
        {this.renderLines()}
      </span>
    )
  }
}

TextEffect.propTypes = {
  lines: PropTypes.array.isRequired,
  onComplete: PropTypes.func,
  delay: PropTypes.number,
};

TextEffect.defaultProps = {
  onCompleteTimeline: () => {},
  delay: 0,
}

export default GSAP()(CSSModules(TextEffect, styles));
