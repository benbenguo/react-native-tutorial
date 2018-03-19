/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  createStore, 
  compose 
} from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';
import { 
  persistStore, 
  persistCombineReducers 
} from 'redux-persist';
import {
  Platform,
  StyleSheet,
  AsyncStorage,
  Text,
  View
} from 'react-native';
import createStoreWithMiddleware from './utils/middleware';
import Loading from './components/loading';
import { AppNavigator } from './components/AppNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// const devEnhancer = devTools({
//   name: Platform.OS,
//   hostname: 'localhost',
//   port: 5678,
// });

// const fn = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
// const devMac = window[fn] ? window[fn]() : devEnhancer;
// const enhancer = compose(createStoreWithMiddleware, devMac);

// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading']
}

reducer = persistCombineReducers(config, reducers);

const store = createStore(
  reducers,
  undefined,
  createStoreWithMiddleware,
);
const persistor = persistStore(
  store, 
  null,
  () => {
    store.getState() // if you want to get restoredState
  }
);

global.ErrorUtils.setGlobalHandler((err) => {
  persistor.purge()
  throw err
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
          <Loading />
        </View>
      </Provider>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
