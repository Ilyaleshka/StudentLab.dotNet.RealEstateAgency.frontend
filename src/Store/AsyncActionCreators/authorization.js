import {
    authorizationPending,
    authorizationSuccess,
    authorizationError,
    logout,
    userInfoError,
    userInfoPending,
    userInfoSuccess,
} from '../ActionCreators/authorization';

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
            let responce = await fetch(process.env.REACT_APP_HOST_ADDRESS + '/api/account/login',{
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
    return async dispatch => {
        dispatch(logout());
        try{
            await fetch(process.env.REACT_APP_HOST_ADDRESS + '/api/account/logout',{method:'post',credentials: "include"});     
        }
        catch
        {
            
        }
    };
}


function refreshUserInfo() {

    return async dispatch => {
        dispatch(userInfoPending());
        try{
            let responce = await fetch(process.env.REACT_APP_HOST_ADDRESS + '/api/account/info',{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            });          //TODO

            console.log(responce);
            if(!responce.ok)
            {
                if(responce.bodyUsed)
                {
                    let errorBody = await responce.json();
                    dispatch(userInfoError(errorBody));
                }
                else
                    dispatch(userInfoError("Error occured"));
                return;
            }
            
            let respBody = await responce.json();
            dispatch(userInfoSuccess(respBody ));
        }
        catch(e){
            dispatch(userInfoError(e));
        }
    }
}

export {authorizeUser,logoutUser,refreshUserInfo};