import Cookies from "universal-cookie";
const cookies = new Cookies();
export const getStoreByStoreId = () =>{
    
var config = {
    method: 'GET',
    // url: 'saloonplus.com:8000/api_v1/store/public/getStoreByStoreId?storeId=1&&',
    headers: { 
      'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksInVzZXJOYW1lIjoic2hpdmkxMjUiLCJlbWFpbCI6InJpc2hhYmhAY3liZXJ0cm9ucy5pbiIsInBob25lTnVtYmVyIjoiOTk5IiwidXNlclR5cGUiOjIsImlhdCI6MTYzMzU4MzQ4Mn0.fyeZ_pWFt6PmeQVJEJqEBmBTtJmHuDM1YBIwfKyteuI', 
      'Content-Type': 'application/json', 
      'Authorization': 'authToken'
    }
  };

  return fetch(`http://saloonplus.com:8000/api_v1/store/public/getStoreByStoreId?storeId=1&&`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });
  
}

export const getServicesListByStoreId = () =>{
    
    var config = {
        method: 'get',
        url: 'saloonplus.com:8000/api_v1/store/public/getServiceListByStoreId?storeId=1',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json'
        }
      };
      
  return fetch(`http://saloonplus.com:8000/api_v1/store/public/getServiceListByStoreId?storeId=1`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });
  
}


export const addToCart = (object: any) =>{
  
  console.log("Object: ",object);

  var data = JSON.stringify({
    "serviceId": object.itemid,
    "qty": 1,
    "keys": object.keyArray,
    "values": object.serviceValue
  });

  var config = {
    method: 'POST',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/addItemsInCart`, config)
  .then(response => {
      return response.json();
  }).catch(error =>{
    console.log(error);
  });

}

export const getItemInCart = () =>{
    
  var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/cart/getMyItemsInCart',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    }
  };
      
  return fetch(`http://saloonplus.com:6001/api_v1/cart/getMyItemsInCart`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });

}

export const deleteFromCart = (itemId: any) =>{
  
  var config = {
    method: 'DELETE',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    },
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/deleteItemsInCart?id=${itemId}`, config)
  .then(response => {
      return response.json();
  }).catch(error =>{
    console.log(error);
  });

}


export const editCartItem = (object: any) =>{
  
  var data = JSON.stringify({
    "keys": object.keys,
    "values": object.value,
    "qty": object.qty
  });
  

  var config = {
    method: 'put',
    url: 'saloonplus.com:6001/api_v1/cart/editItemsInCart?id=9',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get("accessToken")
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/editItemsInCart?id=${object.id}`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });

}

export const myOrders = (price: any) =>{
  
  var data = JSON.stringify({
    "storeId": 3,
    "currencyId": 1,
    "patmentType": 1,
    "orderPriceWithoutPlatformChargesOrTaxes": 129,
    "PlatformCharges": 129,
    "taxes": 20,
    "totalOrderPrice": 250,
    "BookingTime": "2021-10-20 19:24:19",
    "giftCardID": [
      "GiftCard-Number1",
      "GiftCard-Number2"
    ],
    "Services": [
      {
        "serviceId": 17,
        "price": 50,
        "cartId": 1
      },
      {
        "serviceId": 6,
        "price": 50,
        "cartId": 2
      },
      {
        "serviceId": 4,
        "price": 150,
        "cartId": 4
      }
    ]
  });
  
  var config = {
    method: 'post',
    // url: 'saloonplus.com:6001/api_v1/order/newOrder',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/order/newOrder`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });

}

// /api_v1/order/newOrder