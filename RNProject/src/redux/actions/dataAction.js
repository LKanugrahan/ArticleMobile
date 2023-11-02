import axios from 'axios';
// import {API_URL} from '@env'

let API_URL = 'https://ruby-smiling-alligator.cyclic.app/';
export const getAll =() => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_ALL_REQUEST'});
    const result = await axios.get(`${API_URL}articles`);
    dispatch({type: 'GET_ALL_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'GET_ALL_ERROR', payload: err.response.data.message});
    console.log(err);
  }
};

export const getDetail = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'DETAIL_PORTOFOLIO_REQUEST'});
    const result = await axios.get(`${API_URL}articles/${id}`);
    dispatch({type: 'DETAIL_PORTOFOLIO_SUCCESS', payload: result.data});
  } catch (err) {
    console.log('error');
    dispatch({type: 'DETAIL_PORTOFOLIO_FAILED', payload: err.response.data.message});
    console.log(err);
  }
};

