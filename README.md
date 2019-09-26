![Llama!](./llama.jpg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# Pacing Dashboard
> Additional information or tag line  

[FPO] A brief description of your project, what it is used for.

## Installing / Getting started

To get started you will need to install node v8.9.0 or greater and install yarn globally.

```shell
npm install -g yarn
yarn install
```

Yarn will install all the dependencies for the app.

## Developing

### Built With

#### Front End
* **React**
* **Redux**
* **Redux Saga** - https://redux-saga.js.org/
* **Immutable JS** - https://facebook.github.io/immutable-js/docs/#/
* **Reselect** - https://github.com/reduxjs/reselect
* **Emotion** (instead of css modules) - https://github.com/emotion-js/emotion
* **Redux Little Router** - https://github.com/FormidableLabs/redux-little-router
* **Brunch** (instead of webpack) - https://brunch.io/
* **Apollo Client** - https://github.com/apollographql/apollo-client
  
#### Back End (Node)
* **Express** - https://expressjs.com/
* **Applo Server** - https://github.com/apollographql/apollo-server

### Prerequisites

Node & Yarn


### Setting up Dev

```shell
git clone git@github.com:hyfn/hyfn8-pacing-dash-app.git
cd hyfn8-pacing-dash-app/
yarn install
```

At this point you can run the brunch dev server like this for typical development workflow.
```shell
yarn start
 - or -
yarn dev
```

### Githooks
We have a couple githooks that are versioned in this repo. It is strongly recommended that you use these. To get started, it's easy.

If you're using Git version 2.9 or greater, it's as simple as setting the `core.hooksPath` configuration variable to your managed hooks directory. To make it even easier, there is a yarn script set up for you. Just run this:
```shell
yarn init:githooks
```

This will run the command `git config core.hooksPath .githooks` to set the paths to your githooks.

Current githooks in this repo.
* `pre-commit` - Runs `yarn lint && yarn test`. You can skip this with the `--no-verify` flag if you need to.
* `prepare-commit-msg` - Will pull the jira ticket number from your branch name and prepend it to all your commit messages. The branch nameing convention matters: `<ticket-name-number>/brand-name-here` – example: `AOE-420/the-cool-branch`.

### Building
The bundler we are using it [Brunch](http://brunch.io/). It's a simple configuration based bundler. Instead of specific brunch plugins most things are handled using babel. You don't need to get deep into this unless we run into issues.

The basics are this...
* Anything in we want in the bundle needs to be somwhere under `/app`.
* Static assets are in `/app/assets`. Put it there and it will be accessible in the final build under the subdir it came from. For example, and image in `/app/img/fifi.jpg` can be pulled in like this `<img src="/img/fifi.jpg" />`.
* Import things using a relative-ish path that brunch will resolve for you. Brunch by default expects all the things to be in an `/app` directory so you only need to start from there. For example, a utility that lives in `/app/src/utils` can be imported into ANY file using `import myUtil from 'src/utils/my-util'`.

To run the brunch dev server, do this.
```shell
yarn start
 - or -
yarn dev
```

Not that we need to do this manually, but if you just want to build the project you can do this. 
```shell
yarn build
```

This will build the project for production using brunch. Production build includes uglifyed, minified, transpiled ES5 code.

### React Storybook
THis is a solid way to work on components isolated from any app context. Why? It encourages writing flexible, reusable code without being tightly coupled to it's context in the app. It's both a nice place to document how our components work, but also as a tool to keep us inline with writing reusable, modular code.

If you are starting anything new you should work in storybook and only integrate into the app once you feel confident or you need answers regarding implementation. When you begin ask yourself these questions.
* How can I break this down into reusable generic components?
* How many components should this be broken into?
* Are there already any components I can use to build this?

#### Stories
Each storybook story is written in a stories file and should live next to the component files. For example, the stories for the `Button` would be `Button.stories.js`.

#### Notes
The notes storybook addon is available to you and can take a markdown file for its content. This is the way to go if you want to add a bit more information about your component. The pattern thats being used currently is to put a `README.md` file in the named component directory, import this into your story and add it as the story notes content.


### Component Structure
The organization is a bit different for components in this project. Rather than stick with something that had been settled on we are trying something new from the beginning. Here is an example of the `Button` component.

```
/app/src
        /Button
           Button.css.js
           Button.js
           Button.spec.js
           Button.stories.js
           index.js
           README.md
```

There are some key things that make this work well.
* The `index.js` is the API for the component. In general you will want to export all the things in the following way.
  * Default export should be the reducer - if it's a connected component.
  * Default export should be main component - if it's a stateless or pure component.
  * Named export for all action creators and types as well as export them as an object named `actions`.
  * Named export for all selectors as well as export them as an object named `selectors`.
  * Named export for all sagas as well as export them as an object named `sagas`.
  * Named export for the main component.
* The component directory can contain child components if they are "owned" bu this main component. For example you may have a `SelectMenu` component that has specific default `Options` components. These can live together, but the `Options` components dont really need to be exported from the `index.js` since they dont really need to be exposed as part of the component's API.

Here is an example of the `index.js` for a connected component.
```javascript
import reducer from './Thing.reducer'
export * from './Thing.actions'
export * from './Thing.selectors'
export * as actions from './Thing.actions'
export * as selectors from './Thing.selectors'
export Thing from './Thing' // the main component

export default reducer
```

This allows us to import the component like so...

For reducers
```javascript
// pretend this is where we configure the reducers
imports
 ...
here
 ...
import thing from 'src/Thing'
import user from 'src/User'

const { reducer, enhancer, middleware } = immutableRouterForBrowser({ routes })

const rootReducer = combineReducers({
  user,
  thing,
  router: reducer
})
```

For actions and selectors in a connected component or something...
```javascript
// default export is the reducer so you can name it whatever is appropriate
import { myThingActionCreator, myThingSelector } from 'src/Thing'

...
  // in a render function
  <Button onClick={() => this.props.myThingActionCreator()}>Do the Thing</Button>
  <ShowTheThing data={this.props.myData} />
...

// meanwhile, later in the same file

const mapDispatchToProps = {
  myThingActionCreator
}

const mapStateToProps = state => ({
  myData: mySelector(state)
})

...
```

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## CSS in JS
For css we are using `emotion` which is a bit of a shift from what we may be used to. Those of you who dont call themselves "css people" will probably appreciate the changes. Those of use that have a special place for CSS in our hearts - fear not. This is the best of both worlds regarding CSS in JS.

First thing to explain is that there is more than one way to use emotion. There is a `css` tagged template literal and also a `styled` module for producing css and styled components. We are using both to achieve convenient, clean styled and themed components. If you need a simple one off component with some basic styles, we can use `styled`. In fact anything that requires access to the theme will need to use `styled` at some point in rolling up the component styles. For components that have much more css involved it can be helpful to put all this css code into another file and use a compbination of `css` and `styled`.

Here are some resources to get familiar with until someone has a chance to go over it with you.
* [Emotion Docs](https://emotion.sh/docs)
  * [css](https://emotion.sh/docs/css)
  * [styled components](https://emotion.sh/docs/styled)
  * [composition](https://emotion.sh/docs/composition)
  * [nesting](https://emotion.sh/docs/nested)
  * [theming](https://emotion.sh/docs/theming)
* [React Emotion](https://github.com/emotion-js/emotion/tree/master/packages/react-emotion) (styled components)
* [Emotion Themeing](https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming#withthemecomponent)
* [Facepaint](https://github.com/emotion-js/facepaint) (media queries)
* [The Next Generation of CSS-in-JS](https://medium.com/@tkh44/emotion-ad1c45c6d28b) (article)
* [Emotion Gotchas](https://gist.github.com/wasinsandiego/ee84bdb1dc53c24be1a2635527a8b2e6)

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

> [FPO] Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

For testing we are using [Tape JS](https://github.com/substack/tape). It's [tap-producing](https://en.wikipedia.org/wiki/Test_Anything_Protocol) test harness for node and browsers. It's simple, just like our unit tests should be. No magic. There are no globals to worry about, no shared state, and minimal configuration. It promotes writing testable code and spending less time mocking things for tests by keeping the assertions to a bare minimum. If you run into something you are having a hard time testing, talk to your peers to see how things can be simplified.

```shell
yarn test
```

Tape maintains a fairly minimal core. Additional features are usually added by using another module alongside tape. For example, the default TAP output is good for machines and humans that are robots. So we are using `tap-spec` to make it pretty and `tap-notify` for growl notifications for the test results.

To learn more about why we're giving Tape a go, check out [this](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4), [this](https://macwright.org/2014/03/11/tape-is-cool.html), or [this](https://github.com/ChiperSoft/tape-vs-mocha).

## Style guide

For linting we are using StandardJS.  

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Tips & Tools

### Immutable JS
Immutable JS is not really formatted for humans, so when logging data to the JS console the output is not very useful. We suggest you install the `immutablejs-object-format` chrome extension to improve the Immutable data you may log while debugging.
https://chrome.google.com/webstore/detail/immutablejs-object-format

### Redux
We have configured redux dev tools. Get the chrome extension.
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Database

> [FPO] Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 

## Licensing

> [FPO] State what the license is and how to find the text version of the license.


