const axios = require("axios");

exports.apiCall = async(url,method,headers,body = {})=>{
	const requestOption = {
		method: method,
    	headers: headers,
    	body: body
	}
	return fetch(url,requestOption)
}