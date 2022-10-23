

import { createElements } from "./app.header.js";
import { modeChange } from "./button.js";


const app=async ()=>{
    // const weather=await  getWeatherData(JSON.parse(localStorage.getItem('city'))||'Baku');
    // const weather = await getWeatherData(localStorage.getItem('city') || 'Москва');
    // console.log(weather);
    createElements();
    modeChange();
   
}


app();

