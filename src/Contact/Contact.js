import React from 'react';
import FlexRow from '../components/FlexRow/FlexRow';
import FlexItem from '../components/FlexItem/FlexItem';
import CSSModules from 'react-css-modules';
import styles from './Contact.css';
import ContactForm from './ContactForm/ContactForm';
import TextEffect from '../components/TextEffect/TextEffect';
import {TimelineMax, Power1} from 'gsap';
import connectRouteTransition from 'components/HOC/connectRouteTransition';
import { ENTER_ANIMATION_TIME } from 'constants/transitionTimes';
import GSAP from 'react-gsap-enhancer';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/alecortega',
  },
  {
    name: 'Twitter',
    url: 'https://github.com/alecortega',
  },
  {
    name: 'LinkedIn',
    url: 'https://github.com/alecortega',
  },
];

const _enterAnimation = ({target}) => {
  const formContainer = target.find({name: 'formContainer'});
  const linksContainer = target.find({name: 'linksContainer'});
  const linksAccent = target.find({ name: 'linksAccent'});
  const formWrapper = target.find({name: 'formWrapper'})
  const linksWrapper = target.find({name: 'linksWrapper'})

  return new TimelineMax()
    .add('first', ENTER_ANIMATION_TIME)
    .from(formContainer, 0.75, {x: '101%', ease: Power1.easeOut}, 'first')
    .from(linksContainer, 0.75, {x: '-101%', ease: Power1.easeOut}, 'first')
    .from(linksAccent, 0.5, {height: 0, ease: Power1.easeOut}, '-=0.35')
    .add('second', '-=0.2')
    .from(formWrapper, 0.35, {opacity: 0, y: 30, ease: Power1.easeOut}, 'second')
    .from(linksWrapper, 0.35, {opacity: 0, y: 30, ease: Power1.easeOut}, 'second')
}

class Contact extends React.Component {
  componentDidMount() {
    this.addAnimation(_enterAnimation);
  }
  renderLinks() {
    return links.map((item, key) => {
      return (
        <li styleName="link" key={key}>
          <a target="_blank" href={item.url}>
            {item.name}
          </a>
        </li>
      )
    });
  }
  render () {
    return (
      <div>
        <FlexRow>
          <FlexItem size={3} offset={1}>
            <h1 styleName="title">
              <TextEffect
                lines={[
                  'Contact'
                ]}
              />
            </h1>
          </FlexItem>
        </FlexRow>

        <div styleName="content">
          <FlexRow>
            <FlexItem size={3} sizeSm={7} offset={1} offsetSm={0}>
              <div styleName="form-animation">
                <div styleName="form-container" name="formContainer">
                  <div styleName="form-wrapper" name="formWrapper">
                    <p>
                      Now that you know a bit about me, let's make it mutual. Whether
                      it be personal or professional, I'd love to hear from you.
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </FlexItem>
            <FlexItem size={2} sizeSm={7}>
              <div styleName="links-animation">
                <div styleName="links-container" name="linksContainer">
                  <div styleName="links-wrapper"  name="linksWrapper">
                    <h4>Find me elsewhere</h4>
                    <ul>
                      {this.renderLinks()}
                    </ul>
                  </div>
                </div>
              </div>
            </FlexItem>
          </FlexRow>
        </div>
        <div styleName="contact-image-wrapper">
          <div styleName="links-accent" name="linksAccent" />
          <img
            alt="Alec Ortega"
            styleName="contact-image"
            src="https://unsplash.it/1200/1001/?random"
          />
        </div>
      </div>
    )
  }
}

export default connectRouteTransition(GSAP()(CSSModules(Contact, styles)));
