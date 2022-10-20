import { createElements } from "./app.header.js";

export const resetWeatherContent = (city) => {
    localStorage.setItem('city', JSON.stringify(city));
    document.body.innerHTML = '';
    const header = createElements(city);
    document.body.append(header);
}

export const GetMonth=(date)=>{
    const month=+(date[5]+date[6]);
    const day=+(date[8]+date[9]);
   
   let strMonth='';

   switch(month){
    case 1:{
        strMonth='January';
        break;
    }
   
    case 2:{
        strMonth='Fevruary';
        break;
    }
    case 3:{
        strMonth='March';
        break;
    }
    case 4:{
        strMonth='April';
        break;
    }
    case 5:{
        strMonth='May';
        break;
    }
    case 6:{
        strMonth='June';
        break;
    }
    case 7:{
        strMonth='Jule';
        break;
    }
    case 8:{
        strMonth='August';
        break;
    }
    case 9:{
        strMonth='September';
        break;
    }
    case 10:{
        strMonth='October';
        break;
    }
    case 11:{
        strMonth='November';
        break;
    }
    case 12:{
        strMonth='January';
        break;
    }
   }
   return strMonth+', '+day;
//    const day=Date.parse(weather.list[0].dt_txt);
//    console.log(day);
//    const dayPars=new Date(day);
//    console.log(dayPars.getDay());
}
export const getDay=(weather)=>{
const date=Date.parse(weather.list[0].dt_txt);
const newDate=new Date(date);
const dayOfWeek=newDate.getDay();
let dayOfWeekString='';
switch(dayOfWeek){
    case 1:
    dayOfWeekString='Monday';
    break;
    case 2:
    dayOfWeekString='Thuesday';
    break;
    case 3:
    dayOfWeekString='Wednesday';
    break;
    case 4:
    dayOfWeekString='Thursdsay';
    break;
    case 5:
    dayOfWeekString='Friday';
    break;
    case 6:
    dayOfWeekString='Saturday';
    break;
    case 7:
    dayOfWeekString='Sunday';
    break;
}
return dayOfWeekString;
}
export const Temperature=(kalvin)=>{
//
const celsium=Math.floor(kalvin-273.15);
return celsium;
}