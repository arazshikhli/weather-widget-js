
// 'use strict';
// import { createElements } from "./app.header.js";
import { getWeatherData } from "./api.js";
import { createElements } from "./app.header.js";
import { modeChange } from "./button.js";
import { createContent } from "./createContent.js";
 import { getDay, GetMonth} from "./helper.js";
import { getLocalstorage } from "./localstorage.js";

const app=async ()=>{
    // const weather=await  getWeatherData(JSON.parse(localStorage.getItem('city'))||'Baku');
    // const weather = await getWeatherData(localStorage.getItem('city') || 'Москва');
    // console.log(weather);
    createElements();
    modeChange();
  
}

app();

