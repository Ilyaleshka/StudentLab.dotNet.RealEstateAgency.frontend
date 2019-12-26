import {
    rentRequestPending,
    rentRequestSuccess,
    rentRequestError,
    rentAnnouncementPending,
    rentAnnouncementSuccess,
    rentAnnouncementError
} from '../ActionCreators/advertisements';

function requestAdvertisements() {
    return async dispatch => {
        dispatch(rentAnnouncementPending());
        try {
            let rentAnnouncementsResponse = await fetch('https://localhost:44305/api/rentalAnnouncements',
            {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                credentials: "same-origin",//'include'
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

export default requestAdvertisements;