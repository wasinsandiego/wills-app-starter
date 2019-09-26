import React from 'react'
import { storiesOf } from '@storybook/react'
import DemoContainer from 'storybook-utils/DemoContainer'
import DemoItem from 'storybook-utils/DemoItem'

storiesOf('Typography', module)
  .add(
    'Headings and such.',
    () => (
      <DemoContainer>
        <DemoItem>
          <h1>h1. Proxima Nova Light</h1>
        </DemoItem>
        <DemoItem>
          <h2>h2. Proxima Nova Light</h2>
        </DemoItem>
        <DemoItem>
          <h3>h3. Proxima Nova Semibold</h3>
        </DemoItem>
        <DemoItem>
          <h4>h4. Proxima Nova Semibold</h4>
        </DemoItem>
        <DemoItem>
          <h5>h5. Proxima Nova Semibold</h5>
        </DemoItem>
        <DemoItem>
          <h6>h6. Proxima Nova Semibold</h6>
        </DemoItem>
        <DemoItem>
          <p>p. Proxima Nova Regular</p>
          <p>Let's make some happy little clouds in our world. When things happen - enjoy them. They're little gifts. Little trees and bushes grow however makes them happy. Now we'll take the almighty fan brush. You're meant to have fun in life. It looks so good, I might as well not stop.</p>
          <p>Let's build an almighty mountain. And just raise cain. This is the way you take out your flustrations. Tree trunks grow however makes them happy.</p>
        </DemoItem>
      </DemoContainer>
    )
  )
