# react-native-fixture
Fixture of ISL season 2018 app 

## Prerequisites
- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- React Native CLI `npm install -g react-native-cli`
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [adb](https://www.xda-developers.com/install-adb-windows-macos-linux/)

## Usage

### Option #1: Using React-Native-CLi

Install the react-native-cli tool : `npm install -g react-native-cli`

Create the react native skeleton application : `react-native myProject`

After that you should proceed as with any javascript project:
- Go to your project's root folder `cd myProject` and run `npm install`.
- Run the server using `react-native start`
- Run `react-native run-ios` or `react-native run-android` to start your application!

## Base dependencies
  - [axios](https://github.com/axios/axios) for networking.
  - [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed propperties.
  - [React-Native-Config](https://github.com/luggit/react-native-config) to manage envionments.
  - [React-Native-Navigation](https://wix.github.io/react-native-navigation/#/) native navigation library.
  - [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
  - [Redux](https://redux.js.org/) for state management.
  - [Recompose](https://github.com/acdlite/recompose) for utilities.
  - [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer.
  - [Redux-Thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
  - [Reselect](https://github.com/reactjs/reselect) the selector library for redux.
  - [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.
