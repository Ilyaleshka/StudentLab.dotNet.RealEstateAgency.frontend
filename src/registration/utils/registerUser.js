import {registerUserPending, registerUserSuccess, registerUserError} from '../actions/actionCreators';
import {apiPath} from '../../const/config.js';



/*
{
  "Id": 1,
  "FirstName": "sample string 2",
  "LastName": "sample string 3",
  "Email": "sample string 4",
  "PasswordHash": "sample string 5"
}
*/


function registerUser(user) {
    return dispatch => {
        dispatch(registerUserPending());
        fetch(apiPath + '/Users',{method:'put', body: user})
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(registerUserSuccess(res.info));
            return res.info;
        })
        .catch(error => {
            dispatch(registerUserError(error));
        })
    }
}

export default registerUser;