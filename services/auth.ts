import React  from "react";
const options = {
    method: 'POST',
    headers: { 
        'content-type': 'application/json',
        'Authorization': 'authToken',
    },
    body: ''
}

export const login = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    return fetch(`${process.env.api_url}/login`, _options)
    .then(response => response.json())
}


export const signup = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/addUser`, _options)
    .then(response => response.json())
}

export const sendPhoneOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/sendPhoneOTP`, _options)
    .then(response => response.json())
}

export const sendEmailOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/sendEmailOTP`, _options)
    .then(response => response.json())
}

export const verifyOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`${process.env.api_url}/addPhoneNumberToAccount`, options as RequestInit)
    .then(response => response.json())
}



export const validateEmail = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/emailAvailability`, _options)
    .then(response => response.json())
}

export const validateUserName = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/userNameAvailability`, _options)
    .then(response => response.json())
}

export const validatePhoneNumber = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/phoneNumberAvailability`, _options)
    .then(response => response.json())
}

export const changePasswordWithOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`${process.env.api_url}/changePasswordWithOTP`, _options)
    .then(response => response.json())
}