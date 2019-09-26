import React from 'react'
import { compose, branch, withState, withHandlers, renderComponent } from 'recompose'
import styled, { css } from 'react-emotion'

/**
 * Can help with interactions that require a simple show/hide such as
 * tooltips, dropdowns, expandable menus, etc.
 */
export const withToggleDefault = defaultState => compose(
  withState('toggledOn', 'toggle', defaultState),
  withHandlers({
    show: ({ toggle }) => event => toggle(true),
    hide: ({ toggle }) => event => toggle(false),
    toggle: ({ toggle }) => event => toggle(current => !current)
  })
)

export const withToggle = withToggleDefault(false)

/**
 * A HOC to wrap your svgs in a span with an onclick handler.
 */
export const withClickWrapper = Component => ({ onClick, ...restProps } = {}) => (
  <span onClick={onClick}><Component {...restProps} /></span>
)

/**
 * A HOC to wrap your svgs with a styled component.
 */
export const withIconStyles = Component => styles => styled(Component)(props => css`
  ${styles && typeof styles === 'function' && styles(props)}
  ${styles && typeof styles !== 'function' && styles}
`)

export const withLoadingSpinner = LoadingComponent => branch(
  (props) => props.data.loading,
  renderComponent(LoadingComponent)
)
