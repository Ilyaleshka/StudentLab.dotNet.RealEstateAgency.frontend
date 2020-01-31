import * as userActionCreators from '../ActionCreators/userAdvertisements';

export function requestUserAnnouncements() {
    return async dispatch => {
        dispatch(userActionCreators.userAnnouncementPending());
        try {
            let rentAnnouncementsResponse = await fetch(`https://localhost:44305/api/profile/announcements`,
                {
                    method: 'post', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, cors, *same-origin
                    credentials: "include",//'include'
                }
            );

            if(!rentAnnouncementsResponse.ok){
                dispatch(userActionCreators.userAnnouncementError(rentAnnouncementsResponse));
                return;
            }
            
            let rentAnnouncementsJson = await rentAnnouncementsResponse.json();
            dispatch(userActionCreators.userAnnouncementSuccess(rentAnnouncementsJson));

        } catch (error) {
            dispatch(userActionCreators.userAnnouncementError(error));
            return;
        }
    }
}

export function requestUserRequests() {
    return async dispatch => {
        dispatch(userActionCreators.userRequestPending());
        try {
            let rentRequestsResponse = await fetch(`https://localhost:44305/api/profile/requests`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!rentRequestsResponse.ok){
                dispatch(userActionCreators.userRequestError(rentRequestsResponse));
                return;
            }
            
            let rentRequestsJson = await rentRequestsResponse.json();
            dispatch(userActionCreators.userRequestSuccess(rentRequestsJson));

        } catch (error) {
            dispatch(userActionCreators.userRequestError(error));
            return;
        }
    }
}

export function requestUserReservations() {
    return async dispatch => {
        dispatch(userActionCreators.userReservationsPending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/profile/reservations`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.userReservationsError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.userReservationsSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.userReservationsError(error));
            return;
        }
    }
}

export function reserveAnnouncement(announcementId) {
    return async dispatch => {
        dispatch(userActionCreators.reservationCreatePending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/profile/reservations/${announcementId}/reserve`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.reservationCreateError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.reservationCreateSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.reservationCreateError(error));
            return;
        }
    }
}

export function acceptReservation(announcementId) {
    return async dispatch => {
        dispatch(userActionCreators.reservationAcceptPending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/profile/reservations/${announcementId}/accept`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.reservationAcceptError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.reservationAcceptSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.reservationAcceptError(error));
            return;
        }
    }
}

export function rejectReservation(announcementId) {
    return async dispatch => {
        dispatch(userActionCreators.reservationRejectPending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/profile/reservations/${announcementId}/reject`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.reservationRejectError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.reservationRejectSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.reservationRejectError(error));
            return;
        }
    }
}

export function completeReservation(announcementId) {
    return async dispatch => {
        dispatch(userActionCreators.reservationComplitePending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/profile/reservations/${announcementId}/complete`,{
                method:'post',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.reservationRejectError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.reservationCompliteSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.reservationCompliteError(error));
            return;
        }
    }
}

export function deleteAnnouncement(id) {
    return async dispatch => {
        dispatch(userActionCreators.rentAnnouncementDeletePending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/announcements/${id}`,{
                method:'delete',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.rentAnnouncementDeleteError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.rentAnnouncementDeleteSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.rentAnnouncementDeleteError(error));
            return;
        }
    }
}

export function deleteRentRequest(id) {
    return async dispatch => {
        dispatch(userActionCreators.rentRequestDeletePending());
        try {
            let reservationsResponse = await fetch(`https://localhost:44305/api/requests/${id}`,{
                method:'delete',  
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }}
            );

            if(!reservationsResponse.ok){
                dispatch(userActionCreators.rentRequestDeleteError(reservationsResponse));
                return;
            }
            
            let reservationsJson = await reservationsResponse.json();
            dispatch(userActionCreators.rentRequestDeleteSuccess(reservationsJson));

        } catch (error) {
            dispatch(userActionCreators.rentRequestDeleteError(error));
            return;
        }
    }
}