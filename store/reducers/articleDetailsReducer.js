/* eslint-disable keyword-spacing */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */


import {

    GET_ARTICLES_DETAILS,
    
    } from '../type'
    
    const initialState = {
  
       articlesDetails:[]
    
    
    }
    

    export default function (state = initialState, action) {
      var newState = {}
     
      switch (action.type) {
    
    
          case GET_ARTICLES_DETAILS:
          newState = {
            ...newState,
            articlesDetails : action.payload
          }
          
          break;
          
        default:
          return state;
      }
      return newState;
    }