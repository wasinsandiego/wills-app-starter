import React from 'react'

/**
 * A component to print props to the screen.
 * @param  {object}    props       The props for the component
 * @return {component}             A react component
 */
export const Debugger = props => (
  <pre>
    {console.groupCollapsed('Debugit')}
    {console.log('props: ', props)}
    {console.groupEnd()}
    {JSON.stringify(props, null, '  ')}
  </pre>
)
