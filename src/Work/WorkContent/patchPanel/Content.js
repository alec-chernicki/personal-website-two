import React from 'react';
import FlexRow from 'components/FlexRow/FlexRow';
import FlexItem from 'components/FlexItem/FlexItem';

import ScreenshotOne from './ScreenshotOne.png';

import UIFadeIn from 'components/effects/UIFadeIn';
import UIImage from 'components/image/UIImage';

const Content = (props) => {
  return (
    <div>
      <FlexRow>
        <FlexItem size={5} sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <UIImage src="https://unsplash.it/1200/700/?random" />
          </UIFadeIn>
        </FlexItem>
      </FlexRow>

      <FlexRow>
        <FlexItem size={5} sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
              efficitur nibh. Praesent a sem ante. Integer malesuada nibh vel felis
              tincidunt aliquet. Phasellus et purus semper, ullamcorper lectus a,
              volutpat quam. Fusce nisl ligula, sodales et nunc in, rutrum gravida
              nisl.
            </p>
            <p>
              Fusce dictum, nunc et blandit commodo, purus lectus venenatis
              ipsum, in venenatis ligula felis quis turpis. Etiam lacus eros,
              rhoncus et massa gravida, mollis placerat nisl. Ut risus risus,
              auctor sit amet mollis in, venenatis ut libero. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </UIFadeIn>
        </FlexItem>
      </FlexRow>

      <FlexRow>
        <FlexItem size={5}  sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <UIImage src="https://unsplash.it/1200/701/?random" />
          </UIFadeIn>
        </FlexItem>
      </FlexRow>
    </div>
  )
}

export default Content;
