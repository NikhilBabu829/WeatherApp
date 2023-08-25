import clearVideo from './Assets/clear.mp4';
import cloudyVideo from './Assets/cloudy.mp4';
import overcastVideo from './Assets/overcast.mp4';
import rainVideo from './Assets/rain.mp4';
import snowVideo from './Assets/snow.mp4';

function getLocation(data){
    const someString = data;
    const toArray = someString.split(",");
    const editedString = `${toArray[0]}, ${toArray[2]}`;
    return editedString
}

function getmonth(number){
    if(number == 0){ return "Jan" }
    else if(number == 1){ return "Feb" }
    else if(number == 2){ return "Mar" }
    else if(number == 3){ return "Apr" }
    else if(number == 4){ return "May" }
    else if(number == 5){ return "Jun" }
    else if(number == 6){ return "Jul" }
    else if(number == 7){ return "Aug" }
    else if(number == 8){ return "Sep" }
    else if(number == 9){ return "Oct" }
    else if(number == 10){ return "Nov" }
    else{ return "Dec" }
}

function getday(number){
    if(number == 0){ return "Sun" }
    else if(number == 1){ return "Mon" }
    else if(number == 2){ return "Tue" }
    else if(number == 3){ return "Wed" }
    else if(number == 4){ return "Thu" }
    else if(number == 5){ return "Fri" }
    else{ return "Sat" }
}

function sunsettime(time){
    const someString = time;
    const toArray = someString.split(":");
    const editedString = `${toArray[0]}:${toArray[1]}`;
    return editedString
}

function videoSetter(type){
    const videoBackground = document.querySelector('.backgroundVideo')
    const someString = type;
    const toArray = someString.split(" ");
    if(toArray.length >= 0){
        for(let i=0;i<toArray.length;i++){
            console.log(toArray[i])
            if(toArray[i].toString().toLowerCase()== "clear"){
                videoBackground.src = clearVideo
                break
            }
            else if(toArray[i].toString().toLowerCase() == "cloudy"){
                videoBackground.src = cloudyVideo
                break
            }
            else if(toArray[i].toString().toLowerCase() == "rain" || toArray[i].toString().toLowerCase() == "rain,"){
                console.log("rain")
                videoBackground.src = rainVideo
                break
            }
            else if(toArray[i].toString().toLowerCase() == "overcast"){
                videoBackground.src = overcastVideo
                break
            }
            else if(toArray[i].toString().toLowerCase() == "snow"){
                videoBackground.src = snowVideo
                break
            }
        }
    }
}

export {getLocation, getmonth, getday, sunsettime, videoSetter}
