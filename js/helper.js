import { createElements } from "./app.header.js";

export const resetWeatherContent = (city) => {
    localStorage.setItem('city', JSON.stringify(city));
    document.body.innerHTML = '';
    const header = createElements(city);
    document.body.append(header);
}

export const getWindDirection=(windDegree)=>{
    let direction='';
if(+windDegree===0|| +windDegree===360){
    direction="North";
}
if(+windDegree===90){
    direction="East";
}
if(+windDegree===180){
    direction="South";
}
if(+windDegree===270){
    direction="West";
}
if(+windDegree>0 && +windDegree<90){
    direction="North-East";
}
if(+windDegree>90 && +windDegree<180){
    direction="South-East";
}
if(+windDegree>180 && +windDegree<270){
    direction="South-West";
}
if(+windDegree>180 && +windDegree<270){
    direction="South-West";
}
if(+windDegree>270 && +windDegree<360){
    direction="North-West";
}
console.log(direction);
return direction;
}
export const GetMonth=(date)=>{
  
    let day=+(date[8]+date[9]);
    let month=+(date[5]+date[6]);
    
   
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

}

export const getDay=(weather,day)=>{
const date=Date.parse(weather.list[day].dt_txt);
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
    case 7,0:
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



export const ElementCreator=(elType,ElClass,content)=>{
const elementName=document.createElement(elType);
elementName.classList.add(ElClass);
if(elType==='img'){
    elementName.src=content;
}
if(elType==='h3'){
    elementName.innerHTML=content;
  
}
if(elType==='h2'){
    elementName.innerHTML=content;
  
}
if(elType==='h1'){
    elementName.innerHTML=content;
  
}
if(elType==='p'){
    elementName.innerHTML=content;
  
}
if (elType==='input'){
    elementName.placeholder=content;
}
if(elType==='button'){
    elementName.textContent=content;
}
if(elType==='div'){
    elementName.innerHTML=content;
}
return elementName;
}