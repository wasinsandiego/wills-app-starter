
export const responsiveCalc = (cssProp, { units = 'px', min, max, minVw = 400, maxVw = 1200 }) => `
  ${cssProp}: calc( ${min}${units} + ${max - min} * ( (100vw - ${minVw}${units}) / ${maxVw - minVw} ));
  @media screen and (min-width: ${maxVw}px) {
    ${cssProp}: ${max}${units};
  };
  @media screen and (max-width: ${minVw}px) {
    ${cssProp}: ${min}${units};
  };
`

export const responsiveText = props => responsiveCalc('font-size', props)
