import {combineReducers} from 'redux';
import homeArticlesReducer from './homeArticlesReducer';

const rootReducer = combineReducers({
home: homeArticlesReducer,
})
export default rootReducer;