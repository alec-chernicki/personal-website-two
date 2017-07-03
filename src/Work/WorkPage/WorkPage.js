import React from 'react';
import workConfig from '../workConfig';
import styles from './WorkPage.css';
import CSSModules from 'react-css-modules';
import FlexRow from '../../components/FlexRow/FlexRow';
import FlexItem from '../../components/FlexItem/FlexItem';
import ScrollArea from 'react-scrollbar';
import TextEffect from '../../components/TextEffect/TextEffect';
import Button from '../../components/Button/Button';
import {Link} from 'react-router';
import {TimelineMax, Power1} from 'gsap';
import connectRouteTransition from 'components/HOC/connectRouteTransition';
import GSAP from 'react-gsap-enhancer';
import { ENTER_ANIMATION_TIME } from 'constants/transitionTimes';

const _enterAnimation = ({ target }) => {
  const bodyStripe = target.find({name: 'bodyStripe' });
  const description = target.find({name: 'description'});
  const details = target.find({name: 'details'});

  return new TimelineMax()
    .add('first', ENTER_ANIMATION_TIME)
    .from(bodyStripe, 0.5, {ease: Power1.easeOut, height: 0}, 'first')
    .add('second', '-=0.2')
    .from(description, 0.5, {ease: Power1.easeOut, opacity: 0, y: '20%'}, 'second')
    .from(details, 0.5, {ease: Power1.easeOut, opacity: 0, y: '20%'}, 'second')
};

class WorkPage extends React.Component {
  constructor(props) {
    super(props);

    this.getNextItem = this.getNextItem.bind(this);
  }
  componentDidMount() {
    this.addAnimation(_enterAnimation);
  }
  getNextItem () {
    const {workName} = this.props.params;
    const workConfigKeys = Object.keys(workConfig);
    const currentIndex = workConfigKeys.indexOf(workName);
    const nextKey = currentIndex + 1 === workConfigKeys.length ?
      workConfigKeys[0] :
      workConfigKeys[currentIndex + 1];

    return workConfig[nextKey];
  }
  render () {
    const {workName} = this.props.params;
    const item = workConfig[workName];
    const nextItem = this.getNextItem();
    const Content = item.content;

    return (
      <div>
        <div>
          <FlexRow>
            <img
              styleName="hero-image"
              src={item.image}
              alt={item.title}
              role="presentation"
            />
            <div styleName="hero-image-fade" />
            <FlexItem offset={1}>
              <div styleName="hero">
                <h1>
                  <TextEffect
                    lines={[
                      item.title
                    ]}
                  />
                </h1>
              </div>
            </FlexItem>
          </FlexRow>
          <div styleName="body">
            <div styleName="body-stripe" name="bodyStripe">
              <div styleName="details" name="details">
                <div styleName="details-item">
                  <h3>
                    Year
                  </h3>
                  <p>
                    { item.year }
                  </p>
                </div>
                <div styleName="details-item">
                  <h3>
                    Tech
                  </h3>
                  <p>
                    { item.stack }
                  </p>
                </div>
              </div>
            </div>
            <FlexRow>
              <FlexItem size={4} sizeSm={7} offset={2} offsetSm={0}>
                <div styleName="description" name="description">
                  <p>
                    {item.descriptionLong}
                  </p>
                  <Button use="secondary-dark" target="_blank" href={item.githubUrl}>
                    View code
                  </Button>
                  <Button target="_blank" href={item.projectUrl}>
                    Visit Project
                  </Button>
                </div>
              </FlexItem>
            </FlexRow>
          </div>
          <div styleName="content">
            <Content />
          </div>
          <h4 styleName="next">
            Next Project
          </h4>
          <footer styleName="footer">
            <Link to={nextItem.url} styleName="footer-link">
              <div styleName="footer-text">
                <h3>
                  {nextItem.title}
                </h3>
                <p>
                  {nextItem.text}
                </p>
              </div>
              <img
                src={nextItem.image}
                styleName="footer-image"
                alt="Next project"
              />
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}

export default connectRouteTransition(GSAP()(CSSModules(WorkPage, styles)));
