import axios from 'axios';
import API_KEY from '../key/key';
export const FETCHING_ARTICLES_START = 'FETCHING_ARTICLES_START';
export const FETCHING_ARTICLES_SUCCESS = 'FETCHING_ARTICLES_SUCCESS';
export const FETCHING_ARTICLES_FAIL = 'FETCHING_ARTICLES_FAIL';

export const getArticlesHome = () => {
    return (dispatch=>{
        dispatch({type: FETCHING_ARTICLES_START})
        axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&apikey=${API_KEY}`)
        .then(res=>{
            dispatch({type:FETCHING_ARTICLES_SUCCESS, payload: res.data.articles})
        })
        .catch(err=>{
            dispatch({type: FETCHING_ARTICLES_FAIL, payload: err.message})
        })
    })
}