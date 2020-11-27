/* eslint-disable */

import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import TopArticlesReducer from '../store/Reducers/TopArticles'; 


const Home = props => {
       const TopArticles = useSelector(state => state.Top.TopArticles);
        console.log(TopArticles);
    return(
    <View>
        <Text>{TopArticles}</Text>
    </View>
           
        );}

export default Home;

