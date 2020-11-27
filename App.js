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
import { useSelector } from 'react-redux';
import Home from './components/Home';


const App = () => {

  const rootReducer = combineReducers({ 
    Top: TopArticlesReducer 
  });
  const store = createStore(rootReducer); 


  // const TopArticles = useSelector(state => state.Top.TopArticles);
  // console.log(TopArticles);
  
  return (

    <Provider store={store}> 
        <View style={styles.Body}>
           <Text >marhaba</Text>
            <Home></Home>
     
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
