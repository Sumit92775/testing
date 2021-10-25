import Cookies from "universal-cookie";
const cookies = new Cookies();

export const bookings = (object: any) =>{
var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/order/getMyBookings?type=1',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  
  return fetch(`http://saloonplus.com:6001/api_v1/order/getMyBookings?type=${object.type}&page=${object.page}`, config)
      .then(response => {
        return response.json();
      }).catch(error =>{
        console.log(error);
      });

}