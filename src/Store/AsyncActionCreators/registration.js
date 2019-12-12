import {registrationPending, registrationSuccess, registrationError} from '../ActionCreators/registration';

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
        dispatch(registrationPending());
        fetch('https://localhost:44305/reg',{method:'put', body: user})
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(registrationSuccess(res.info));
            return res.info;
        })
        .catch(error => {
            dispatch(registrationError(error));
        })
    }
}

export default registerUser;