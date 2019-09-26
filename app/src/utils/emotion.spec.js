import test from 'tape'

import { responsiveCalc, responsiveText } from './emotion'

const expectedCalc = `
  padding-left: calc( 4px + 16 * ( (100vw - 400px) / 800 ));
  @media screen and (min-width: 1200px) {
    padding-left: 20px;
  };
  @media screen and (max-width: 400px) {
    padding-left: 4px;
  };
`

const expectedFontCalc = `
  font-size: calc( 4px + 16 * ( (100vw - 400px) / 800 ));
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  };
  @media screen and (max-width: 400px) {
    font-size: 4px;
  };
`

test('Emotion Utils - responsiveCalc & responsiveText', t => {
  t.equal(
    responsiveCalc('padding-left', { min: 4, max: 20 }),
    expectedCalc,
    'responsiveCalc should return css as expected'
  )

  t.equal(
    responsiveText({ min: 4, max: 20 }),
    expectedFontCalc,
    'responsiveText should return css as expected'
  )
  t.end()
})
