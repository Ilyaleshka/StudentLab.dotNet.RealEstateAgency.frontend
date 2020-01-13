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

function registerUser(firsttName,lastName,email,password) {
    
    let registrationInfo = 
    {
        FirstName: firsttName,
        LastName: lastName,
        Email: email,     
        Password: password
    };
    
    return dispatch => {
        dispatch(registrationPending());
        fetch('https://localhost:44305/api/account/register',{method:'put', body: registrationInfo})
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