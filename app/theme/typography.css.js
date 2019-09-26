/* istanbul ignore file */
import { css, injectGlobal } from 'react-emotion'
import { fontFace } from 'polished'
import { responsiveText } from 'src/utils'

injectGlobal`
  ${fontFace({
    fontFamily: 'proxima-nova-light',
    fontFilePath: '../fonts/proxima-nova_light',
    fileFormats: ['eot', 'woff', 'ttf', 'svg']
  })}
  ${fontFace({
    fontFamily: 'proxima-nova-regular',
    fontFilePath: '../fonts/proxima-nova_regular',
    fileFormats: ['eot', 'woff', 'ttf', 'svg']
  })}
  ${fontFace({
    fontFamily: 'proxima-nova-semi-bold',
    fontFilePath: '../fonts/proxima-nova_semi-bold',
    fileFormats: ['eot', 'woff', 'ttf', 'svg']
  })}
`

export const lightFont = `'proxima-nova-light', sans-serif`
export const regularFont = `'proxima-nova-regular', sans-serif`
export const semiboldFont = `'proxima-nova-semi-bold', sans-serif`
export const small = 12
export const medium = 14
export const mediumLarge = 16
export const large = 18
export const smallFontSize = `${small}px`
export const mediumFontSize = `${medium}px`
export const mediumLargeFontSize = `${mediumLarge}px`
export const largeFontSize = `${large}px`

const headingsBase = css`
  margin: 0;
  font-weight: 300;
`

export const h1 = css`
  ${headingsBase}
  font-family: ${lightFont};
  line-height: 1.2;
  letter-spacing: -1px;
  ${responsiveText({
    min: 36,
    max: 40,
    minVw: 420,
    maxVw: 1200
  })}
`

export const h2 = css`
  ${headingsBase}
  font-family: ${lightFont};
  line-height: 1.25;
  letter-spacing: -1px;
  ${responsiveText({
    min: 30,
    max: 36,
    minVw: 420,
    maxVw: 1200
  })}
`

export const h3 = css`
  ${headingsBase}
  font-family: ${semiboldFont};
  line-height: 1.3;
  letter-spacing: -1px;
  ${responsiveText({
    min: 24,
    max: 30,
    minVw: 420,
    maxVw: 1200
  })}
`

export const h4 = css`
  ${headingsBase}
  font-family: ${semiboldFont};
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0;
  ${responsiveText({
    min: 18,
    max: 24,
    minVw: 420,
    maxVw: 1200
  })}
`

export const h5 = css`
  ${headingsBase}
  font-family: ${semiboldFont};
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  ${responsiveText({
    min: 16,
    max: 20,
    minVw: 420,
    maxVw: 1200
  })}
`

export const h6 = css`
  ${headingsBase}
  font-family: ${regularFont};
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  ${responsiveText({
    min: 16,
    max: 20,
    minVw: 420,
    maxVw: 1200
  })}
`

export const p = css`
  margin-top: 0;
  margin-bottom: 25px;
  font-family: ${regularFont};
  line-height: 1.6;
  letter-spacing: 0;
  ${responsiveText({
    min: 16,
    max: 18,
    minVw: 420,
    maxVw: 1200
  })}
`

injectGlobal`
  body {
    font-size: 16px;
    line-height: 1.4;
    font-weight: 400;
    font-family: ${regularFont};
    letter-spacing: .5px;
    color: #333;
  }

  h1 {${h1}}
  h2 {${h2}}
  h3 {${h3}}
  h4 {${h4}}
  h5 {${h5}}
  h6 {${h6}}
  p {${p}}
`
