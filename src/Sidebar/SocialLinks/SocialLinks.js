import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialLinks.css';
import Icon from '../../components/Icon/Icon';

import TwitterLogo from './twitter.svg';
import GithubLogo from './github.svg';
import LinkedinLogo from './linkedin.svg';

const socialLinks = [
  {
    name: 'Twitter',
    image: TwitterLogo,
    link: 'https://twitter.com/WhyNotDoStuff'
  },
  {
    name: 'GitHub',
    image: GithubLogo,
    link: 'https://github.com/alecortega'
  },
  {
    name: 'LinkedIn',
    image: LinkedinLogo,
    link: 'https://www.linkedin.com/in/alecortega/'
  }
]

class SocialLinks extends React.Component {
  renderLinks() {
    return socialLinks.map((item, i) => {
      return (
        <a
          key={i}
          styleName="social-icon"
          href={item.link}
          target="_blank"
        >
          <Icon>
            <img
              alt={item.name}
              src={item.image}
            />
          </Icon>
        </a>
      );
    });
  }
  render() {
    return (
      <div styleName="social-links">
        {this.renderLinks()}
      </div>
    );
  }
}

export default CSSModules(SocialLinks, styles);
