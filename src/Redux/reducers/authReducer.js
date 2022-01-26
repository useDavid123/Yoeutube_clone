
import {LOAD_PROFILE , LOGIN_SUCCESS , LOGIN_FAIL , LOGIN_REQUEST , LOG_OUT} from "../actionTypes"

const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token')
    ? sessionStorage.getItem('ytc-access-token')
    : null,
 user: sessionStorage.getItem('ytc-user')
    ? JSON.parse(sessionStorage.getItem('ytc-user'))
    : null,
 loading: false,
 error:null
}

 export const authReducer = (state  = initialState , action) =>{
 const {type , payload} = action
 switch(type){
   case LOGIN_REQUEST:





       return{
           ...state,
           loading:true
       }
     case LOGIN_SUCCESS:
         return   {
             ...state,
             loading:false,
             accessToken:payload

         }
         case LOGIN_FAIL:
         return   {
             ...state,
             loading:false,
             accessToken:null,
             error:payload

         }
          case LOAD_PROFILE:
              return{
                  ...state,
                  user:payload
              }
        case LOG_OUT:
            return{
                ...state,
                user:null,
                accessToken:null
            }


       default:
           return state
 }
}