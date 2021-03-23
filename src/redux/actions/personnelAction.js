import Axios from 'axios';
import { API_URL } from '../../support/apiurl';

export const getPersonnel = () => {
    return async (dispatch) => {
        try {
            let get = await Axios.get(API_URL + `/api/?results=28`)
            // console.log('action getUsers',get.data.results)
            dispatch({
                type: 'GET_PERSONNEL',
                payload: get.data.results
            })
        } catch (error) {
            console.log(error)
        }
    }
}