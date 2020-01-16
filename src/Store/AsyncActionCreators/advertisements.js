import {
    rentRequestPending,
    rentRequestSuccess,
    rentRequestError,

    rentAnnouncementPending,
    rentAnnouncementSuccess,
    rentAnnouncementError,

    rentAnnouncementCreatePending,
    rentAnnouncementCreateSuccess,
    rentAnnouncementCreateError
} from '../ActionCreators/advertisements';


function requestAdvertisements() {
    return async dispatch => {
        dispatch(rentAnnouncementPending());
        try {
            let rentAnnouncementsResponse = await fetch('https://localhost:44305/api/rentalAnnouncements',
                {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, cors, *same-origin
                    credentials: "include" //"same-origin",//'include'
                    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'same-origin', // include, *same-origin, omit
                }
            );

            if(!rentAnnouncementsResponse.ok){
                dispatch(rentAnnouncementError(rentAnnouncementsResponse));
                return;
            }
            
            let rentAnnouncementsJson = await rentAnnouncementsResponse.json();
            dispatch(rentAnnouncementSuccess(rentAnnouncementsJson));
        } catch (error) {
            dispatch(rentAnnouncementError(error));
            return;
        }

        dispatch(rentRequestPending());
        try {
            let rentRequestsResponse = await fetch('https://localhost:44305/api/rentalRequests');

            if(!rentRequestsResponse.ok){
                dispatch(rentRequestError(rentRequestsResponse));
                return;
            }
            
            let rentRequestsJson = await rentRequestsResponse.json();
            dispatch(rentRequestSuccess(rentRequestsJson));
        } catch (error) {
            dispatch(rentRequestError(error));
            return;
        }
    }
}

function requestAnnouncements() {
    return async dispatch => {
        dispatch(rentAnnouncementPending());
        try {
            let rentAnnouncementsResponse = await fetch('https://localhost:44305/api/rentalAnnouncements',
                {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, cors, *same-origin
                    credentials: "same-origin",//'include'
                }
            );

            if(!rentAnnouncementsResponse.ok){
                dispatch(rentAnnouncementError(rentAnnouncementsResponse));
                return;
            }
            
            let rentAnnouncementsJson = await rentAnnouncementsResponse.json();
            dispatch(rentAnnouncementSuccess(rentAnnouncementsJson));

        } catch (error) {
            dispatch(rentAnnouncementError(error));
            return;
        }
    }
}

function requestRentRequests() {
    return async dispatch => {
        dispatch(rentRequestPending());
        try {
            let rentRequestsResponse = await fetch('https://localhost:44305/api/rentalRequests');

            if(!rentRequestsResponse.ok){
                dispatch(rentRequestError(rentRequestsResponse));
                return;
            }
            
            let rentRequestsJson = await rentRequestsResponse.json();
            dispatch(rentRequestSuccess(rentRequestsJson));

        } catch (error) {
            dispatch(rentRequestError(error));
            return;
        }
    }
}

function  createAdvertisement(title, description, area, address, cost, location, base64Images)
{
    let advertisementInfo = 
    {
        Title : title,
        Description : description,
        Area : area,
        Address : address,
        Cost : cost,
        Location : location,
        Base64Images : base64Images
    };
    
    return async dispatch => {
        dispatch(rentAnnouncementCreatePending());
        try{
            let responce = await fetch('https://localhost:44305/api/announcements/create',{
                method:'post',  
                mode: 'cors', // no-cors, cors, *same-origin
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(advertisementInfo)
            });          //TODO

            console.log(responce);
            if(!responce.ok)
            {
                if(responce.bodyUsed)
                {
                    let errorBody = await responce.json();
                    dispatch(rentAnnouncementCreateError(errorBody));
                }
                else
                    dispatch(rentAnnouncementCreateError("Error occured"));

                return;
            }
            
            let respBody = await responce.json();
            dispatch(rentAnnouncementCreateSuccess(respBody ));
        }
        catch(e){
            dispatch(rentAnnouncementCreateError(e));
        }
    }
}


export { requestAdvertisements, requestRentRequests, requestAnnouncements, createAdvertisement};