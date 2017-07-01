import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './Navigation.css';
import FlexRow from '../components/FlexRow/FlexRow';
import FlexItem from '../components/FlexItem/FlexItem';
import {TimelineLite, Power1} from 'gsap';

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'About',
    url: '/about'
  },
  {
    text: 'Work',
    url: '/work'
  },
  {
    text: 'Contact',
    url: '/contact'
  }
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.linkRefs = [];
    this.storeLinkRef = this.storeLinkRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const tl = new TimelineLite();

    tl.staggerFrom(this.linkRefs,  0.75, {ease: Power1.easeOut, opacity: 0}, 0.08, 0.3);

    return tl;
  }
  storeLinkRef(el) {
    if (el) {
      this.linkRefs.push(el);
    }
  }
  handleClick(e) {
    // e.preventDefault();
    // const url = e.currentTarget.pathname;

    this.props.setIsNavigationOpen(false);
    // history.push(url);
  }
  renderLinks() {
    return links.map((item, i) => {
      return (
        <li
          styleName="link"
          key={i}
          ref={this.storeLinkRef}
        >
          <Link
            name={item.text}
            to={item.url}
            onClick={this.handleClick}
          >
            {item.text}
            <span styleName="link-mask">
              {item.text}
            </span>
          </Link>
        </li>
      );
    })
  }
  render () {
    return (
      <div styleName="navigation">
        <FlexRow align="center">
          <FlexItem offset={1}>
            {this.renderLinks()}
          </FlexItem>
        </FlexRow>
      </div>
    );
  }
}

Navigation.propTypes = {
  setIsNavigationOpen: PropTypes.func.isRequired,
};

export default CSSModules(Navigation, styles);
