import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
 
import authReducers from './AuthReducers';

import Streamreducers from './streamReducers';

export default combineReducers({

   auth :authReducers,
   form : formReducers ,
   streams : Streamreducers
})