import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/components/Index';
import { Provider } from 'react-redux';
import expo from 'expo';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';

const store = createStore(reducer,applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
              <View style={styles.container} >
          <Index />
        </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});