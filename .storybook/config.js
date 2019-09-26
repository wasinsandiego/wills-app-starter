import '@storybook/addon-console'
import '../app/styles-global'
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import 'vendor-css'

// addons that need to be added with a decorator or configured
import { withInfo } from '@storybook/addon-info'

// provide the theme so stuff looks right
import { ThemeProvider } from 'emotion-theming'
import * as theme from 'app/theme'

// global decorators
addDecorator((story, context) => withInfo(`General info about "${context.story}" for the \`${context.kind}\` component. To see more details look at the _**Notes**_ tab below.`)(story)(context))
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

const req = require.context('../app/src', true, /\.stories\.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))
configure(loadStories, module)
