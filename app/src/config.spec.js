/**
 * This file needs to stay in the `app/src/` directory with no other test files next to it.
 * Because enzyme requires us to configure an adapter for react 16 this needs to be the first
 * "test" run by our test runner. If another `<file-name>.spec.js` file is in `app/src/` then this
 * one may not run first.
 */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
