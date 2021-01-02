import {FETCHING_ARTICLES_START, FETCHING_ARTICLES_SUCCESS, FETCHING_ARTICLES_FAIL} from '../actions/homeArticlesActions';

const initialState = {
    homeArticle: [],
    isFetching: false,
    error: ''
};

 const homeArticlesReducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCHING_ARTICLES_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            })
            case(FETCHING_ARTICLES_SUCCESS):
                return({
                    ...state,
                    homeArticle: action.payload,
                    isFetching: false
                })
                case(FETCHING_ARTICLES_FAIL):
                return({
                    ...state,
                    error: action.payload
                })
        default:
            return(state)
    }
}
export default homeArticlesReducer;