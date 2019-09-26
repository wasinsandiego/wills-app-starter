import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import {
  noop,
  asFormWidget
} from './forms'

test('Forms Utils - noop', t => {
  const thing = { hello: 'world' }

  t.equal(
    noop(thing),
    thing,
    'should return same thing it gets'
  )

  t.end()
})

test.skip('Forms Utils - asFormWidget', t => {
  // const expectedProps = [
  //   'schema',
  //   'placeholder',
  //   'value',
  //   'readonly',
  //   'options',
  //   'selectOptions',
  //   'onChange',
  //   'widgetOnChange'
  // ]
  const TestComponent = () => (
    <div>Testing!</div>
  )
  const Widget = asFormWidget(TestComponent)
  const wrapper = shallow(<Widget
    options={{}}
  />)
  console.log('wrapper: ', wrapper.debug())

  // t.equal(
  //   noop(thing),
  //   thing,
  //   'should return same thing it gets'
  // )

  t.end()
})
