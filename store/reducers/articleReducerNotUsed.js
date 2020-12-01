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

import {GET_TOP_ARTICLES} from '../type'

const initialState = {
    articles:[],
    loading:true
}

export default function(state = initialState, action){
   
     var newState = {}

    switch(action.type){
        



        case GET_TOP_ARTICLES:
            
        newState= {
            ...newState,
            articles: action.payload,
            loading:false
        }
        break;


        default:
             return state
    }
    return newState;
   

}