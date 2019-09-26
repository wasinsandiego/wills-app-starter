import Immutable from 'immutable'
import { withHandlers, compose, withProps, mapProps } from 'recompose'

/**
 * A no-operation function use for the transform
 * @param  {Any} value Takes any type
 * @return {Any}       Returns exactly what it gets
 */
export const noop = value => value

/**
 * This HOC will wrap your component with one that defines all the props needed for a widget. In
 * doing this it changes a couple things.
 *  - It maps the `onChange` that will ultimately be received from RJF to a new name
 *    `widgetOnChange`. This is important because many of the custom field components we will be
 *    wrapping (ex: SelectMenu) also have an `onChange` callback of their own.
 *  - It creates an `onChange` handler that is used by our custom field component. This handler calls
 *    the `widgetOnChange` which is the onChange that RJF defined. THis is how RJF is notified about
 *    the change in our custom component. This handler also passes the argument received from the
 *    custom field component through a transform function that is defined as an implementation
 *    detail.
 *  - The `transformOnChange` function can be defined per widget during composition is responsible
 *    for returning the value declared for by the field by the JSON Schema. If not defined it will
 *    have a default no-op function that returns what it receives
 *  - The `extras` prop function.
 * @param  {React Component}  Component   The custom field component you want to make into a widget.
 * @return {React Component}              An enhanced component that will function like a RJF widget.
 */
export const asFormWidget = compose(
  mapProps(({ options, onChange, extras, ...restProps }) => {
    // console.groupCollapsed('asFormWidget')

    // create a new props object and switch a couple prop names around
    const newProps = {
      widgetOnChange: onChange, // onChange --> widgetOnChange
      widgetOptions: options, // options --> widgetOptions
      ...restProps,
      ...(Array.isArray(options) || Immutable.List.isList(options)
        // if its an array or Immutable List then add options as key: value instead of spreading
        ? { options }
        // spread the options from UI schema `ui:options`
        : options
      )
    }

    return extras
      // if extras func then spread results (overwriting props is possible)
      ? {
        ...newProps,
        ...extras(newProps)
      }
      // if not then do nothing
      : newProps
  }),
  withHandlers({
    onChange: ({ widgetOnChange, transformOnChange = noop }) => data => {
      widgetOnChange(transformOnChange(data))
    }
  })
)

export const composeWidgetWithData = (withData, mapper, extras) => compose(
  withProps(props => ({
    extras,
    transformOnChange: option => option && option.value,
    ...props
  })),
  withData,
  mapProps(({ entities, entityIds, ...restProps }) => ({
    ...restProps,
    options: mapper({ entities, entityIds, ...restProps })
  })),
  asFormWidget
)

export const mapEntitiesToOptions = ({ entities, entityIds, ...restProps }) => {
  return (
    entityIds
      ? entityIds.map(itemId => Immutable.Map({
        value: entities.getIn([itemId, 'id']),
        label: entities.getIn([itemId, 'name'])
      })).toJS()
      : undefined
  )
}
