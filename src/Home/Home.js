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
  const heroAccent = target.find({ name: 'heroAccent' });
  const heroButtons = target.find({ name: 'heroButtons' });

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
    const { styles } = this.props;

    return (
      <div styleName="home">
        <div styleName="content-container">
          <FlexRow align="center">
            <FlexItem size={5} offset={1}>
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
                <Button to="/about" use="secondary" className={styles['about-button']}>
                  Get to know me
                </Button>
                <Button to="/work">
                  View My Work
                </Button>
              </div>
            </FlexItem>
          </FlexRow>
        </div>
        <div styleName="background-container">
          <div styleName="hero-accent" name="heroAccent" />
          <img
            alt="Alec Ortega"
            styleName="hero-image"
            name="heroImage"
            src="https://unsplash.it/1200/1001/?random"
          />
        </div>
      </div>
    )
  }
}

export default connectRouteTransition(GSAP()(CSSModules(Home, styles)));
