import { message } from 'antd';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getNotifications = (page:any) =>{
     
  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoicmlzaGFiMWgwQGN5MWJlcnRyb25zLmluIiwidXNlck5hbWUiOiJoYWMxMGsxcmlzaCIsInBob25lTnVtYmVyIjoiKzkxOTk5MDExNzExMTcyOCIsInVzZXJUeXBlIjoxLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmVOdW1iZXJWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTYzNDM2MzE5NH0.0r1G2jsf06p4vEqb8MsGFHu5yVtfh7xt9UhRkcrkcCs' 
    }
  };


  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getUserNotification?page=1`, config)
  .then(response => response.json()).catch(error =>{
    message.error(error);
    // console.log("Error in Notifications Fetching: ",error);
  });

}

export const setNotificationRead = () =>{
     
  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoicmlzaGFiMWgwQGN5MWJlcnRyb25zLmluIiwidXNlck5hbWUiOiJoYWMxMGsxcmlzaCIsInBob25lTnVtYmVyIjoiKzkxOTk5MDExNzExMTcyOCIsInVzZXJUeXBlIjoxLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmVOdW1iZXJWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTYzNDM2MzE5NH0.0r1G2jsf06p4vEqb8MsGFHu5yVtfh7xt9UhRkcrkcCs' 
    }
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/setUserNotificationRead`, config)
  .then(response => response.json()).catch(error =>{
    message.error(error);
    // console.log("Error in Notifications Fetching: ",error);
  });

}


// getUserAddSettings