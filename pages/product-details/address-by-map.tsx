import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { Button, Input, Form, Checkbox } from 'antd';
import styles from './Styles.module.scss'
import { LocationCityRounded, MyLocation, TrainRounded } from '@material-ui/icons';
import confirm from 'antd/lib/modal/confirm';
Geocode.setApiKey("AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

const { Item } = Form;

const { TextArea } = Input;

const containerStyle = {
  width: '100%',
  height: '400px'
};


function AddressByMap(props : any) {

  const [latitude, setLatitude] = useState(28.701013012272828);
  const [longitude, setLongitude] = useState(77.30239085333835);
  const [formattedAddress, setFormattedAddress] = useState("")
  const [pinCode, setPinCode] = useState(0);
  const [confirmAndProceed, setconfirmAndProceed] = useState(false);
  const [changeAddress, setChangeAddress] = useState(false);
  const [userGivenAddress, setUserGivenAddress] = useState("");
  const [subLocality1, setSubLocality1] = useState("");
  const [subLocality2, setSubLocality2] = useState("");
  const [subLocality3, setSubLocality3] = useState("");
  const [adminArea1, setAdminArea1] = useState("");
  const [adminArea2, setAdminArea2] = useState("");
  const [adminArea3, setAdminArea3] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [route, setRoute] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [locality, setLocality] = useState("");

  const [houseNo, setHouseNo] = useState("");
  const [addressone, setAddressOne] = useState("");
  const [addresstwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

    // console.log(props);

    // Final details

    console.log(city);

    const center = {
      lat: latitude,
      lng: longitude
    };
    
    
    const getLatLong = (address : any) =>{
        // Get latitude & longitude from address.
     Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
          props.lat(lat);
          props.long(lng)
          getAddressByLatLong(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
    // 48.85837009999999 2.2944813
    
    const getAddressByLatLong = (lat : Number, long : Number) =>{

      setHouseNo("");
      setRoute("");
      setLocality("");
      setNeighborhood("");
      setSubLocality1("");
      setSubLocality2("");
      setSubLocality3("");

      setAdminArea1("");
      setAdminArea2("");
      setAdminArea3("");

        Geocode.fromLatLng(""+lat, ""+long).then(
            (response) => {
              const geolocationRes = response.results[0];
              console.log("Step : 2");

              console.log(geolocationRes);
              setFormattedAddress(geolocationRes.formatted_address);

              for(let i = 0 ; i < geolocationRes.address_components.length ; i++){
                  getPreciseAddress(geolocationRes.address_components[i].types, geolocationRes.address_components[i]);
                }
                // console.log("Address data : 1  "+houseNo+ ":" + streetNo);

            },
            (error) => {
                console.error(error);
            }
            ).then(function(geolocationRes){
              // for(let i = 0 ; i < geolocationRes. ; i++){
                //   getPreciseAddress(geolocationRes.address_components[i].types, geolocationRes.address_components[i]);
                // }
              }).then(function(){
              });
      }
    
    const getPreciseAddress = (typeArray : any, dataObj : any) =>{

      console.log("Array : ",typeArray);
      console.log("Step 3");
      
      
      for(let i = 0 ; i < typeArray.length ; i++){
        console.log("Log : "+typeArray[i] + " : "+dataObj.long_name);
      }

      for(let i = 0 ; i < typeArray.length ; i++){
          if(typeArray[i] === "street_number"){
            console.log(dataObj.long_name);
            setStreetNo(dataObj.long_name);
            props.streetNumber(dataObj.long_name);
            break;
          }

          if(typeArray[i] === "route"){
            console.log(dataObj.long_name);
            setRoute(dataObj.long_name);
            break;
          }
      
          if(typeArray[i] === "political"){
                if(typeArray[i+2] === "sublocality_level_2"){
                  setSubLocality2(dataObj.long_name);
                  break;
                }
                if(typeArray[i+2] === "sublocality_level_3"){
                  setSubLocality3(dataObj.long_name);
                  break;
                }
                if(typeArray[i+2] === "sublocality_level_1"){
                  setSubLocality1(dataObj.long_name);
                  // setState(dataObj.long_name);
                  break;
                }
                break;
          }
          
          if(typeArray[i] === "administrative_area_level_2" || "administrative_area_level_1" || "administrative_area_level_3"){
            
            if(typeArray[i] === "administrative_area_level_2"){
              setAdminArea2(dataObj.long_name);
              break;
            }
            if(typeArray[i] === "administrative_area_level_3"){
              setAdminArea3(dataObj.long_name);
              break;
            }
            if(typeArray[i] === "administrative_area_level_1"){
              setCity(dataObj.long_name);
              props.city(dataObj.long_name);
              console.log("administrative_area_level_1 : ",dataObj.long_name);
              break;
            }
          }
      
          if(typeArray[i] === "locality"){
              setLocality(dataObj.long_name);
              setState(dataObj.long_name);
              console.log("Locality : ",dataObj.long_name);
              break;
            } 
          
          if(typeArray[i] === "premise"){
            setHouseNo(dataObj.long_name);
            props.houseNumber(dataObj.long_name);
            console.log("House No.",dataObj.long_name);
            break;
          } 
          
          if(typeArray[i] === "country"){
            setCountry(dataObj.long_name);
            props.country(dataObj.long_name);
            console.log("Country",dataObj.long_name);
            break;
            
          } 
          if(typeArray[i] === "postal_code"){
            setPinCode(dataObj.long_name);
            props.pincode(dataObj.long_name);
            console.log("postal_code",dataObj.long_name);
            break;
          }
          if(typeArray[i] === "neighborhood"){
            setNeighborhood(dataObj.long_name);
            console.log("Neighborhood : ",dataObj.long_name);
            break;
          }
      }



    }


    const setAddressLine1 = () =>{

      console.log("Address data : 2 "+houseNo+ ":" + streetNo);
      let address1 = [];
      
      // if(houseNo.length > 1 && streetNo.length > 1){
      //   setHouseNo(streetNo+", "+houseNo);
      //   log
      //   address1.push(streetNo);
      //   address1.push(houseNo);

      // }

      // if(houseNo.length > 1 || streetNo.length > 1){
      //   if(houseNo.length > 1){
      //     setHouseNo(streetNo);
      //     address1.push(streetNo);
      //   }
      // }

      // console.log("House No. : ",houseNo);
      // console.log("subLocality3 : ",subLocality3);
      // console.log("subLocality2 : ",subLocality2);
      // console.log("subLocality1 : ",subLocality1);
      
      if(houseNo.length > 1){
        address1.push(houseNo);
      }

      if(route.length > 1){
        address1.push(route);
      }

      if(locality.length > 1){
        address1.push(locality)
      }

      if(neighborhood.length > 1){
        address1.push(neighborhood);
      }

      if(subLocality3.length > 1){
        address1.push(subLocality3);
      }

      if(subLocality2.length > 1){
        address1.push(subLocality2);
      }
      if(subLocality1.length > 1){
        address1.push(subLocality1);
      }

      console.log(address1);

      let data = address1.map((obj) =>{
       return obj;
      }).join(", ");

      console.log("Address Line 1: ",data);
      setAddressOne(data)
      props.add1(data);

    }

    const setAddressLine2 = () =>{
      let address2 = [];
      console.log("House No. : ",houseNo);
      console.log("subLocality3 : ",subLocality3);
      console.log("subLocality2 : ",subLocality2);
      console.log("subLocality1 : ",subLocality1);
      
      if(adminArea3.length > 1){
        address2.push(adminArea3);
      }

      if(adminArea2.length > 1){
        address2.push(adminArea2);
      }
      if(adminArea1.length > 1){
        address2.push(adminArea1);
      }

      console.log(address2);

      let data = address2.map((obj) =>{
       return obj;
      }).join(", ");
      console.log("Address Line 11:",addressone);
      
      console.log("Address Line 22: ",data);
      setAddressTwo(data);


      // let location = houseNo+subLocality1+subLocality2+subLocality3+data;
      props.add2(data)

    }
    
    
    const handleDrag = (event : any) =>{
      setLatitude(event.latLng.lat());
      setLongitude(event.latLng.lng());
      getAddressByLatLong(event.latLng.lat(), event.latLng.lng());
    }

    const handelCurrentLocation = () =>{
      navigator.geolocation.getCurrentPosition(function(position){
        
        props.lat(position.coords.latitude);
        props.long(position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("Step : 1");
        console.log("Latitude : ",position.coords.latitude);
        console.log("Longitude: ",position.coords.longitude);
        
        getAddressByLatLong(position.coords.latitude, position.coords.longitude);
      });
    }

    const handleUserGivenLocationAddress = (event : any) =>{
      console.log(event.target.value);
      setUserGivenAddress(event.target.value);
    }

    const handleUserGivenLocationConfirm = (UserInputAdddress: any) =>{
      getLatLong(UserInputAdddress);
      setChangeAddress(false);
      getAddressByLatLong(latitude, longitude);
    }


  return (
      <div className="grid-view grid-1" style={{flexDirection : "column"}}>
        {changeAddress === true ? 
        <>
        <span className="txt primary" onClick={() => setChangeAddress(!changeAddress)}>{"< Back"}</span>
        <Input className="mb-20" onChange={(event) =>handleUserGivenLocationAddress(event)}></Input>
        <Button className="txt primary" onClick={() =>handleUserGivenLocationConfirm(userGivenAddress)}>Confirm And Proceed</Button>
        </>
        :
        <div>
            <div className="mb-20" style={{position : "relative"}}>
              <LoadScript
              googleMapsApiKey="AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4"
              >
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={5}
                  onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    map.fitBounds(bounds);
                  }}
                  options={{
                    // styles: waterStyle,
                    fullscreenControl: false,
                    disableDefaultUI :  true,
                  }}>
                  <Marker
                  draggable={true}
                  onDragEnd={(event) => {handleDrag(event);
                  }}
                  position={center}
                  onLoad={handelCurrentLocation}
                  animation={1}
                  />

              </GoogleMap>
              </LoadScript>
              <div  className={styles['myLocationIcon']}><MyLocation></MyLocation></div>
            </div>

            {confirmAndProceed === true ? 
            <>
            <div>
              <span className="txt primary" onClick={() => setconfirmAndProceed(!confirmAndProceed)}>{"< Back"}</span>
              <Form>
                <div className="grid-view grid-1 rowgap-10 colgap-20">
                  <Form.Item label={<label className="txt dark3">House No.<span>(Optional)</span></label>}>
                    <Input value={streetNo} onChange={(event : any) => setStreetNo(event.target.value)}></Input>
                  </Form.Item>
                  <Form.Item label="Address Line: 1" required={true}>
                    <Input value={addressone}></Input>
                  </Form.Item>
                  <Form.Item label="Address Line: 2">
                    <Input value={addresstwo}></Input>
                  </Form.Item>
                  <Form.Item>
                    <div className="grid-view grid-2 colgap-20">
                      <Form.Item label="City" required={true}>
                        <Input value={city} onChange={(event : any) => setCity(event.target.value)} contentEditable="true"></Input>
                      </Form.Item>
                      <Form.Item label="Pincode" required={true}>
                        <Input value={pinCode} onChange={(event : any) => setPinCode(event.target.value)}></Input>
                      </Form.Item>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <div className="grid-view grid-2 colgap-20">
                      <Form.Item label="Country" required={true}>
                        <Input value={country}></Input>
                      </Form.Item>
                      <Form.Item label={<div></div>}>
                        <Checkbox className="pl-10">Mark this address as default</Checkbox>
                      </Form.Item>
                    </div>
                  </Form.Item>
                </div>
              </Form>
            </div>
            </>
            : 
            <div>
              <div className={styles['address-container']}>
                  <Input suffix={<h6 className="txt primary cursor" onClick={() =>setChangeAddress(!changeAddress)}>Change Address</h6>} value={formattedAddress} contentEditable={false}></Input>
              </div>
                  <Button className="text primary ml-24 mr-24" 
                    onClick={() =>{setconfirmAndProceed(!confirmAndProceed);
                      setAddressLine1();
                      setAddressLine2();
                      }}
                  >Confirm and Proceed</Button>
            </div>

            }

        </div>
        }
      </div>
  )
}
export default AddressByMap;