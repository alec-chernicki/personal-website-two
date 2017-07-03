import React from 'react';
import styles from './Work.css';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import FlexRow from '../components/FlexRow/FlexRow';
import FlexItem from '../components/FlexItem/FlexItem';
import workConfig from './workConfig';
import _ from 'lodash';
import ScrollArea from 'react-scrollbar/';
import lockScroll from '../utils/lockScroll';
import connectRouteTransition from 'components/HOC/connectRouteTransition';
import MediaQuery from 'react-responsive';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: this.getContainerWidth()
    }
    this.containerRef = null;
    this.getContainerWidth = this.getContainerWidth.bind(this);
    this.renderScrollArea = this.renderScrollArea.bind(this);
  }

  componentDidMount() {
    this.setState({containerWidth: this.getContainerWidth()})
  }

  componentWillUnmount() {
    lockScroll(false);
  }

  getContainerWidth() {
    const itemLength = Object.keys(workConfig).length;

    return ((2 / 7) * (window.outerWidth - 50)) * itemLength;
  }

  renderScrollArea(isMobile) {
    if (isMobile) {
      return (
        <div>
          {this.renderWorks()}
        </div>
      );
    }

    lockScroll(true);

    return (
      <ScrollArea
        speed={1}
        swapWheelAxes={true}
        horizontal={true}
        vertical={false}
        contentStyle={{ width: this.getContainerWidth()}}
        className={this.props.styles['work-outer']}
        contentClassName={this.props.styles['work']}
        horizontalContainerStyle={{opacity: 1, background: '#202321'}}
        horizontalScrollbarStyle={{background: '#6B7F5B', marginTop: 0, height: '15px'}}
        smoothScrolling={true}
      >
        {this.renderWorks()}
      </ScrollArea>
    );
  }

  renderWorks() {
    const { styles } = this.props;

    return _.valuesIn(workConfig).map((item, i) => {
      return (
        <FlexItem size={2} sizeSm={7} key={i}>
          <Link to={item.url} className={styles['link']}>
            <div className={styles['work-item']} name="workItem">
              <img
                alt={item.title}
                className={this.props.styles['image']} style={{backgroundImage: `url(${item.image})`}}
              />
              <div className={styles['text']}>
                <h4>
                  {item.title}
                </h4>
                <p>
                  {item.text}
                </p>
              </div>
            </div>
          </Link>
        </FlexItem>
      )
    })
  }
  render () {
    return (
      <FlexRow>
        <MediaQuery maxWidth={768}>
          {this.renderScrollArea}
        </MediaQuery>
      </FlexRow>
    );
  }
}

export default connectRouteTransition(CSSModules(Work, styles));
