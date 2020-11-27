/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createStore, combineReducers } from 'redux'; 
import TopArticlesReducer from './store/Reducers/TopArticles'; 
import { Provider } from 'react-redux'; 


const App = () => {

  const rootReducer = combineReducers({ 
    meals: TopArticlesReducer 
  });
  
  
  const store = createStore(rootReducer); 
  
  return (

    <Provider store={store}> 
        <View style={styles.Body}>
           <Text >Hellossss</Text>
     
        </View>
    </Provider>

    

    
  );

};

const styles = StyleSheet.create({
  Body: {
    backgroundColor: 'red',
  },
 
});

export default App;
