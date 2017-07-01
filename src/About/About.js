import React from 'react';
import FlexRow from '../components/FlexRow/FlexRow';
import FlexItem from '../components/FlexItem/FlexItem';
import Button from '../components/Button/Button';
import TextEffect from '../components/TextEffect/TextEffect';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import connectRouteTransition from 'components/HOC/connectRouteTransition';
import UIFadeIn from 'components/effects/UIFadeIn';

class About extends React.Component {
  render() {
    return (
      <div>
        <FlexRow>
          <FlexItem offset={1}>
            <img
              styleName="hero-image"
              src="https://placeimg.com/640/350/any/grayscale"
            />
            <h1 styleName="hero-title">
              <TextEffect
                lines={[
                    "It's great to",
                    "meet you"
                ]}
              />
            </h1>
          </FlexItem>
        </FlexRow>

        <div styleName="row-one">
          <FlexRow>
            <FlexItem size={1}>
              <img src="https://placeimg.com/200/500/any/grayscale" />
            </FlexItem>
            <FlexItem size={2} offset={1}>
              <UIFadeIn>
                <p styleName="row-one-text">
                  I could use this section to explain how proficient I am in the
                  various front end frameworks. jfojfoew fjewofjw fjewi section to
                  explain how proficient I am in the various front end frameworks.
                  But I’d rather explain why I do what I do.
                </p>
              </UIFadeIn>
            </FlexItem>
            <FlexItem size={2} offset={1}>
              <img
                styleName="row-one-image"
                src="https://placeimg.com/400/550/any/grayscale"
              />
            </FlexItem>
          </FlexRow>
        </div>

        <FlexRow>
          <FlexItem size={2}>
            <img src="https://placeimg.com/400/551/any/grayscale" />
          </FlexItem>
          <FlexItem size={2} offset={1}>
            <UIFadeIn>
              <h1>
                2012
              </h1>
              <p>
                I officially came out to my family, unfortunately this resulted in
                becoming homeless. One day I decided I didn’t want to be defined by
                the situation that life handed me, I wanted to be defined by what I
                was passionate about.
              </p>
            </UIFadeIn>
          </FlexItem>
        </FlexRow>

        <div styleName="row-three">
          <FlexRow>
            <FlexItem size={6} offset={1}>
              <img src="https://placeimg.com/800/150/any/grayscale" />
            </FlexItem>
          </FlexRow>
        </div>

        <div styleName="row-four">
          <FlexRow>
            <FlexItem size={3} offset={2}>
              <UIFadeIn>
                <p>
                  I officially came out to my family, unfortunately this resulted in
                  becoming homeless. One day I decided I didn’t want to be defined by
                  the situation that life handed me, I wanted to be defined by what I
                  was passionate about.
                </p>
              </UIFadeIn>
            </FlexItem>
          </FlexRow>
        </div>


        <div styleName="row-five">
          <FlexRow>
            <FlexItem size={2} offset={1}>
              <UIFadeIn>
                <h1>
                  2013
                </h1>
                <p>
                  I officially came out to my family, unfortunately this resulted in
                  becoming homeless. One day I decided I didn’t want to be defined by
                  the situation that life handed me, I wanted to be defined by what I
                  was passionate about.
                </p>
              </UIFadeIn>
            </FlexItem>
            <FlexItem size={3} offset={1}>
              <img src="https://placeimg.com/800/750/any/grayscale" />
            </FlexItem>
          </FlexRow>
        </div>

        <div styleName="row-six">
          <FlexRow>
            <FlexItem size={3}>
                <img src="https://placeimg.com/800/700/any/grayscale" />
            </FlexItem>
            <FlexItem size={2} offset={1}>
              <UIFadeIn>
                <p>
                  I officially came out to my family, unfortunately this resulted in
                  becoming homeless. One day I decided I didn’t want to be defined by
                  the situation that life handed me, I wanted to be defined by what I
                  was passionate about.
                </p>

                <p>
                  Want to get in touch?
                </p>
                <Button to="/contact">
                  Contact Me
                </Button>
              </UIFadeIn>
            </FlexItem>
          </FlexRow>
        </div>
      </div>
    )
  }
}

export default connectRouteTransition(CSSModules(About, styles));
