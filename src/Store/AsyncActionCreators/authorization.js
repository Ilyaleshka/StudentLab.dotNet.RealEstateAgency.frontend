import {authorizationPending, authorizationSuccess, authorizationError} from '../ActionCreators/authorization';

/*
{
  "Email": "sample string 4",
  "Password": "sample string 5"
}
*/

function authorizeUser(name,password) {
    let user = 
    {  
        Name: name,
        Password: password
    };

    return async dispatch => {
        dispatch(authorizationPending());
        try{
            let responce = await fetch('https://localhost:44305/api/account/login',{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });          //TODO

            console.log(responce);
            if(!responce.ok)
            {
                if(responce.bodyUsed)
                {
                    let errorBody = await responce.json();
                    dispatch(authorizationError(errorBody));
        
                }
                else
                    dispatch(authorizationError("Error occured"));
                return;
            }
            
            let respBody = await responce.json();
            dispatch(authorizationSuccess(respBody ));
        }
        catch(e){
            dispatch(authorizationError(e));
        }
    }
}

function logoutUser() {
    return dispatch => {
        dispatch(authorizationPending());
        fetch('https://localhost:44305/api/account/logout',{method:'get'})             //TODO
        .then(res => 
            {
                console.log(res);
                if(!res.ok) {
                    throw(res.json());
                }
                return res.json()
            })
        .then(res => {
            dispatch(authorizationSuccess(res));
        })
        .catch(error => {
            dispatch(authorizationError(error));
        })
    }
}

export {authorizeUser,logoutUser};