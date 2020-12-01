import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image,TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import Card from '../UI/Card';
import ArticleDetails from './ArticleDetails';


function ArticleItems(props) {
  


  const [data, setData] = useState([]);
 
  useEffect(() => {
    setData(props)
  }, [data])
  
 
  let icn = ( data.uriz) ? data.uriz : 0
  
//////////////////////////




 /////////////////////////
  // console.log(props)
    
    return (

   
        <Card style={styles.article}>
          <View style={styles.touchable}>
            
         
          <Image style={styles.image}  source={{uri:`https://www.nytimes.com/${icn.url}`}} ></Image> 

              
              <View style={styles.lead_paragraph}>
              <Text style={styles.title} >{data.title}</Text>
                <Text style={styles.desc} >{data.desc}</Text>
              </View>
            
          </View>
        </Card> 


    )
}
const styles = StyleSheet.create({
  FlatList: {
    height: '100%',
  },

  image: {
    width: '100%',
    height: '60%'
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    flex: 1
  },
  article: {
    height: 500,
    margin: 20,
    overflow: 'visible',
    justifyContent: 'space-evenly',

  },
  imageContainer: {
    width: '100%',
    height: '20%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'visible',
    
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
    
  },
  desc: {
    color: 'black',
    marginTop: '5%',
    fontSize: 15
    

  },
  lead_paragraph: {
    color: 'blue',
    marginTop: '5%',
  }
});


export default ArticleItems

