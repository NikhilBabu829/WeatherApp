
import {getLocation, getmonth, getday, sunsettime, videoSetter, weekDataToUI} from './convertorFunction.js';

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

    displayWeeklyData(data)
}

const displayWeeklyData = (data)=>{
    const cardDay = document.querySelectorAll('.cardDay');
    const cardTemperature = document.querySelectorAll('.cardTemperature');
    const cardDescription = document.querySelectorAll('.cardDescription');
    const cardVideo = document.querySelectorAll('.cardVideo');
    weekDataToUI(cardDay, cardTemperature, cardDescription, cardVideo, data.days)
    console.log(data.days);
}

export {displayingDataInUI}
