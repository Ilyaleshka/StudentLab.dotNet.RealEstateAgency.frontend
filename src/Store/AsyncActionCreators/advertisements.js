import {
    rentRequestPending,
    rentRequestSuccess,
    rentRequestError,

    rentAnnouncementPending,
    rentAnnouncementSuccess,
    rentAnnouncementError,

    rentAnnouncementCreatePending,
    rentAnnouncementCreateSuccess,
    rentAnnouncementCreateError,

    rentRequestCreatePending,
    rentRequestCreateSuccess,
    rentRequestCreateError,

    rentAnnouncementInfoPending,
    rentAnnouncementInfoError,
    rentAnnouncementInfoSuccess

} from '../ActionCreators/advertisements';


function requestAdvertisements(pageNumber,pageSize) {
    return async dispatch => {
        dispatch(rentAnnouncementPending());
        dispatch(rentAnnouncementPending());
        try {
            // Makes sense to move host to env variable or setting. Also in makes sense to create API helper with methods like get, post, etc.
            // For example in every post with data you pass 'Content-Type': 'application/json'. This can be encapsulated in API helper.
            let rentAnnouncementsResponse = await fetch(`https://localhost:44305/api/announcements?page=${pageNumber}&pageSize=${pageSize}`,
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

        dispatch(rentRequestPending());
        try {
            let rentRequestsResponse = await fetch('https://localhost:44305/api/requests');

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

function requestAnnouncements(pageNumber,pageSize,filt = {}) {
    return async dispatch => {
        dispatch(rentAnnouncementPending());
        let filters =  createFilterQuery(filt);
        try {
            let rentAnnouncementsResponse = await fetch(`https://localhost:44305/api/announcements?page=${pageNumber}&pageSize=${pageSize}` + filters,
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

function requestRentRequests(pageNumber,pageSize,filt = {}) {
    return async dispatch => {
        dispatch(rentRequestPending());
        let filters =  createFilterQuery(filt);
        try {
            let rentRequestsResponse = await fetch(`https://localhost:44305/api/requests?page=${pageNumber}&pageSize=${pageSize}` + filters);

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

function createFilterQuery(filters)
{
    let result = "";
    if(filters.minCost && (filters.minCost > 0))
        result += "&minCost=" + filters.minCost;
    if(filters.maxCost && (filters.maxCost > 0))
        result += "&maxCost=" + filters.maxCost;
    if(filters.minArea && (filters.minArea > 0))
        result += "&minArea=" + filters.minArea;
    if(filters.maxArea && (filters.maxArea > 0))
        result += "&maxArea=" + filters.maxArea;

    return result;
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

function  createRentalRequest(title, description, area, address, cost)
{
    let advertisementInfo = 
    {
        Title : title,
        Description : description,
        Area : area,
        PrefferedAddress : address,
        MaxPrice : cost,
    };
    
    return async dispatch => {
        dispatch(rentRequestCreatePending());
        try{
            let responce = await fetch('https://localhost:44305/api/requests/create',{
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
                    dispatch(rentRequestCreateError(errorBody));
                }
                else
                    dispatch(rentRequestCreateError("Error occured"));

                return;
            }
            
            let respBody = await responce.json();
            dispatch(rentRequestCreateSuccess(respBody ));
        }
        catch(e){
            dispatch(rentRequestCreateError(e));
        }
    }
}


function  getAnnoucementInfo(id)
{  
    return async dispatch => {
        dispatch(rentAnnouncementInfoPending());
        try{
            let responce = await fetch(`https://localhost:44305/api/announcements/${id}`,{
                method:'get',  
                mode: 'cors', // no-cors, cors, *same-origin
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });          //TODO

            console.log(responce);
            if(!responce.ok)
            {
                if(responce.bodyUsed)
                {
                    let errorBody = await responce.json();
                    dispatch(rentAnnouncementInfoError(errorBody));
                }
                else
                    dispatch(rentAnnouncementInfoError("Error occured"));

                return;
            }
            
            let respBody = await responce.json();
            dispatch(rentAnnouncementInfoSuccess(respBody ));
        }
        catch(e){
            dispatch(rentAnnouncementInfoError(e));
        }
    }
}


export { requestAdvertisements, requestRentRequests, requestAnnouncements,createRentalRequest , createAdvertisement, getAnnoucementInfo};