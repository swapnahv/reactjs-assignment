export default function GetUserDetailsFun(userDetails){
    return{
        type: "GET_USER_DETAILS",
        payload: userDetails
    };
}