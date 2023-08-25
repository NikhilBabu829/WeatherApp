
import {getLocation, getmonth, getday, sunsettime, videoSetter} from './convertorFunction.js';

const displayingDataInUI = (data)=>{
    const temperatureElement = document.querySelector('.temperature');
    temperatureElement.innerText = data.currentConditions.temp

    const currentDate = new Date();
    const dayDate = document.querySelector('.dayDate');
    dayDate.innerText = `${getday(currentDate.getDay())}, ${currentDate.getDate()} ${getmonth(currentDate.getMonth())}`

    const location = document.querySelector('.location');
    location.innerText = getLocation(data.resolvedAddress);

    const sunsetTime = document.querySelector('.sunsetTime');
    sunsetTime.innerText = `Feels like ${data.currentConditions.feelslike} . Sunset ${sunsettime(data.currentConditions.sunset)}`

    const description = document.querySelector('.description');
    description.innerText = data.currentConditions.conditions

    videoSetter(data.currentConditions.conditions)
    
    console.log(data);
}

export {displayingDataInUI}
