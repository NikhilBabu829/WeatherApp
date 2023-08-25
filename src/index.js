import './SassFiles/style.scss';
import './apiRequest.js';
import {data} from './apiRequest'

const locationForm = document.querySelector('.locationForm');
locationForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('.locationInput');
    data(input.value)
    locationForm.reset();
})
