# Powerpuffgirls
> A 4 hour ReactJS coding challenge.

## Installing / Getting started
In the project directory, you can run:

```shell
yarn start # start development mode
yarn build # build production code
```

### Initial Configuration

None

## Developing

This project makes use of various react styleguides e.g. [airbnb styleguide](https://github.com/airbnb/javascript/tree/master/react)
Check the `.eslintrc` for a complete overview of the linting rules applied throughout the sourcecode.


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.


### Building

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deploying / Publishing

CI/CD with Heroku: all commits to Github master will trigger a new deploy.
[http://powerpuffgirls.herokuapp.com/](http://powerpuffgirls.herokuapp.com/)

## Features

The requirements of this coding challenge were:
- Use React to render UI components.
- Use "Create React App" to bootstrap your project.
- Setup two routes in you app, one for TV shows and one for episodes.
- Retrieve data from TV Maze REST API
- Setup state management and data flow
- Style your components with CSS, make sure that the end result is responsive and has at least
one breakpoint.
- All code should be checked in into a Git repository
- Documentation is optional but appreciated, the same goes for comments in your code

## Links

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies
The following modules have been added to get to this result:

#### yarn add node-sass
For using scss within the application
#### yarn add normalize.css
Used as a css reset, to keep styling in sync across various browsers
#### yarn add react-redux
To use Redux statemanagement
#### yarn add redux
To use Redux statemanagement
#### yarn add react-router-dom
To use a singlepage router
#### yarn add sanitize-html
To safely embed unsafe code (retrieved over the network) as html on the page.

## Licensing
The code in this project is licensed under MIT license.