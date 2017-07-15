import React from 'react';
import {TimelineMax, Power1} from 'gsap';
import GSAP from 'react-gsap-enhancer';
import {
  ENTER_TIME_IN_SECONDS,
  EXIT_TIME_IN_SECONDS
} from 'constants/transitionTimes';

const _enterAnimation = ({ target, options }) => {
  return new TimelineMax()
    .from(target, ENTER_TIME_IN_SECONDS,
      {
        display: 'none',
        opacity: 0,
        ease: Power1.easeInOut,
        onComplete: options.callback
    }, EXIT_TIME_IN_SECONDS);
};

const _exitAnimation = ({ target, options }) => {
  return new TimelineMax()
    .to(target, ENTER_TIME_IN_SECONDS, {
      display: 'none',
      opacity: 0,
      ease: Power1.easeInOut,
      onComplete: options.callback
    });
};

const connectRouteTransition = (Component) => {
  class RouteTransition extends React.Component {
    componentWillAppear(callback) {
      this.addAnimation(_enterAnimation, { callback });
    }
    componentWillEnter(callback) {
      this.addAnimation(_enterAnimation, { callback });
    }
    componentWillLeave(callback) {
      this.addAnimation(_exitAnimation, { callback });
    }
    render () {
      return <Component {...this.props} />
    }
  }

  return GSAP()(RouteTransition);
}

export default connectRouteTransition;
