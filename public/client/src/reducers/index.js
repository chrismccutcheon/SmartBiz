import {combineReducers} from 'redux';

import app from './appReducer';

// Im using combine reducers here because incase you want to expand the app and add other functions that need different state controllers you can add that here
export default combineReducers({
  app
})
