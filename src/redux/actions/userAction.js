import Axios from 'axios';
import { API_URL } from '../../support/apiurl';

export const getUsers = () => {
    return async (dispatch) => {
        try {
            let get = await Axios.get(API_URL + `/xxxxx`)
            // console.log('action getUsers',get.data)
            dispatch({
                type: 'GET_USERS',
                payload: get.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}