import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/components/Index';
import { Provider } from 'react-redux';
import expo from 'expo';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';


const initialState = { 
  pedometer: { Steps: 0 , LastDaySteps: 0 }
};

const store = createStore(reducer,initialState,applyMiddleware(thunk));


console.log(store.getState());
store.subscribe( () => {
  console.log(store.getState());
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container} >
          <Index />
        </View>
      </Provider>
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