import {authorizationPending, authorizationSuccess, authorizationError} from '../ActionCreators/authorization';

/*
{
  "Email": "sample string 4",
  "Password": "sample string 5"
}
*/

function authorizeUser(user) {
    return dispatch => {
        dispatch(authorizationPending());
        fetch('https://localhost:44305/auth',{method:'put', body: user})             //TODO
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(authorizationSuccess(res.info));
            return res.info;
        })
        .catch(error => {
            dispatch(authorizationError(error));
        })
    }
}

export default registerUser;