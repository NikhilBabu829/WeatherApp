import {displayingDataInUI} from './displayingData.js';

const KEY = process.env.WEATHERAPIKEY

const data = async (locationValue)=>{
    const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationValue}?unitGroup=metric&key=${KEY}&contentType=json`)
    const requestData = await request.json()
    return displayingDataInUI(requestData)
}

data()

export {data}
