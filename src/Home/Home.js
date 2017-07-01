import React from 'react'
import FlexRow from '../components/FlexRow/FlexRow';
import FlexItem from '../components/FlexItem/FlexItem';
import Button from '../components/Button/Button';
import CSSModules from 'react-css-modules';
import styles from './Home.css';
import TextEffect from '../components/TextEffect/TextEffect';
import {TimelineMax, Power1} from 'gsap';
import GSAP from 'react-gsap-enhancer';
import connectRouteTransition from 'components/HOC/connectRouteTransition';
import { ENTER_ANIMATION_TIME } from 'constants/transitionTimes';

const _enterAnimation = ({ target, options }) => {
  // const heroImage = target.find({ name: 'heroImage'});
  const heroAccent = target.find({ name: 'heroAccent' });
  const heroButtons = target.find({ name: 'heroButtons' });
  console.log(ENTER_ANIMATION_TIME);
  const tl = new TimelineMax()
    .from(heroAccent, 0.6, {x: '-100%', ease: Power1.easeOut}, ENTER_ANIMATION_TIME)
    .from(heroButtons, 0.4, {opacity: 0, y: '100%', ease: Power1.easeOut});

  return tl;
};

class Home extends React.Component {
  componentDidMount() {
    this.addAnimation(_enterAnimation);
  }

  render () {
    return (
      <div styleName="home">
        <FlexRow align="center">
          <FlexItem size={2} offset={1}>
            <h1>
              <TextEffect
                delay={0.1}
                lines={[
                  'Alec',
                  'Ortega'
                ]}
              />
            </h1>
            <h2>
              <TextEffect
                delay={0.41}
                lines={[
                  'Front End Engineer'
                ]}
              />
            </h2>
            <div styleName="buttons" name="heroButtons">
              <Button to="/about" use="secondary">
                Get to know me
              </Button>
              <Button to="/work">
                View My Work
              </Button>
            </div>
          </FlexItem>
          <FlexItem size={4} styleName="hidden">
            <div styleName="hero-accent" name="heroAccent" />
            <img
              alt="Alec Ortega"
              styleName="hero-image"
              name="heroImage"
              src="https://unsplash.it/1200/1001/?random"
            />
          </FlexItem>
        </FlexRow>
      </div>
    )
  }
}

export default connectRouteTransition(GSAP()(CSSModules(Home, styles)));
