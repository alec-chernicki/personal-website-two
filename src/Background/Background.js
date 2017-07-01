import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Background.css';

const NUMBER_OF_PANELS = 7;

class Background extends React.Component {
  renderPanels() {
    let panels = [];

    for (let i = 0; i < NUMBER_OF_PANELS; i++) {
      panels.push(
        <div styleName="panel" key={i}/>
      )
    }

    return panels;
  }
  render () {
    return (
      <div styleName="background">
        {this.renderPanels()}
      </div>
    )
  }
}

export default CSSModules(Background, styles);
