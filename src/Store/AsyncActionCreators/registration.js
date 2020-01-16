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

function registerUser( firstName, lastName, email, password) {
    
    let registrationInfo = 
    {
        Name: firstName,
        LastName: lastName,
        Email: email,     
        Password: password
    };
    
    return async dispatch => {
        dispatch(registrationPending());
        try{
            let responce = await fetch('https://localhost:44305/api/account/register',{
                method:'post',  
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationInfo)
            });          //TODO

            console.log(responce);
            if(!responce.ok)
            {
                if(responce.bodyUsed)
                {
                    let errorBody = await responce.json();
                    dispatch(registrationError(errorBody));
                }
                else
                    dispatch(registrationError("Error occured"));

                return;
            }
            
            let respBody = await responce.json();
            dispatch(registrationSuccess(respBody ));
        }
        catch(e){
            dispatch(registrationError(e));
        }
    }
}

export default registerUser;