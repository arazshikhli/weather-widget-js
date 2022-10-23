import { ElementCreator, getDay, GetMonth, getWindDirection, Temperature } from "./helper.js";

export const createContent=(weather)=>{

const dateTempcontainer=ElementCreator('div','day_content-city_info','')
const cloudImageContainer=ElementCreator('div','day_content-cloud','');
const otherWeatherInfo=ElementCreator('div','day_content-other_info','');
const dayContent=document.querySelector('.day_content');


//Other Info Container

const humidityContainer=ElementCreator('div','other_info-humidity_cont','');
const humidityImage=ElementCreator('img','other_info-humidity_image','./img/icons/other_info/humidity.png');
const humidityInfo=ElementCreator('h3','other_info-humidity_info',weather.list[1].main.humidity+" &#37");
humidityContainer.appendChild(humidityImage);
humidityContainer.appendChild(humidityInfo);
otherWeatherInfo.appendChild(humidityContainer);

const windSpeedFromApi=weather.list[1].wind.speed;
const windSpeedContainer=ElementCreator('div','other_info-windspeed_cont','');
const windSpeedImage=ElementCreator('img','other_info-windspeed_image','./img/icons/other_info/wind.png');
const windSpeedInfo=ElementCreator('h3','other_info-windspeed_info',Math.floor(windSpeedFromApi) +" km/h");
windSpeedContainer.appendChild(windSpeedImage);
windSpeedContainer.appendChild(windSpeedInfo);
otherWeatherInfo.appendChild(windSpeedContainer);

const WindDegree=weather.list[1].wind.deg;
const WindDirection=getWindDirection(WindDegree);
const windDirectionContainer=ElementCreator('div','other_info-winddirection_cont','');
const windDirectionImage=ElementCreator('img','other_info-winddirection_image','./img/icons/other_info/wind-direction.png');
const windDirectioninfo=ElementCreator('h3','other_info-winddirection_info',WindDirection);
windDirectionContainer.appendChild(windDirectionImage);
windDirectionContainer.appendChild(windDirectioninfo);
otherWeatherInfo.appendChild(windDirectionContainer);

const pressureFromApi=weather.list[1].main.pressure;
const pressureContainer=ElementCreator('div','other_info-pressure_cont','');
const pressureImage=ElementCreator('img','other_info-pressure_image','./img/icons/other_info/pressure.webp');
const pressureInfo=ElementCreator('h3','other_info-pressure_info',pressureFromApi.toFixed(1)+" mb");
pressureContainer.appendChild(pressureImage);
pressureContainer.appendChild(pressureInfo);
otherWeatherInfo.appendChild(pressureContainer);

const month=  GetMonth(weather.list[1].dt_txt);
let dayOfWeek=getDay(weather,1);

    let monthDayText=ElementCreator('p','day_content-month_name',month);
const MonthDayTitle=ElementCreator('div','day_content-month_title','');//
const DayTempTitle=ElementCreator('div','day_content-tem_info','');


let Day=ElementCreator('p','day_content-day_name',dayOfWeek);
MonthDayTitle.appendChild(monthDayText);
MonthDayTitle.appendChild(Day);
dateTempcontainer.append(MonthDayTitle);//
dateTempcontainer.append(DayTempTitle);//
const imageTempcontainer=ElementCreator('div','image_container','');
const imageTemp=ElementCreator('img','temp_image','./img/icons/temperature.png')
imageTempcontainer.append(imageTemp);
const tempKalvin=weather.list[1].main.temp;


  
const feelsLikeTempKalvin=weather.list[1].main.feels_like;
const bigTemp=ElementCreator('div','temp_info-city_temp',`<h2 class='big_temp'>${Temperature(tempKalvin)}&#176 </h2>`);

const smallTemp=ElementCreator('div','temp_flike',`<h3 class='small_temp'>Feels like ${Temperature(feelsLikeTempKalvin)}&#176</h3>`);
const cloudIconId=weather.list[1].weather[0].icon;
const WeatherMainCloud=ElementCreator('img','cloud_img',`http://openweathermap.org/img/wn/${cloudIconId}@2x.png`);
cloudImageContainer.append(WeatherMainCloud);
const cloudDescription=ElementCreator('div','cloud_description','');
const cloudDescriptionTitle=ElementCreator('h3','cloud_description-title',weather.list[1].weather[0].description)
cloudDescription.append(cloudDescriptionTitle);
DayTempTitle.append(imageTempcontainer);
cloudImageContainer.appendChild(cloudDescription);
DayTempTitle.appendChild(bigTemp);
DayTempTitle.appendChild(smallTemp);
dayContent.append(dateTempcontainer);

dayContent.append(cloudImageContainer);
dayContent.append(otherWeatherInfo);


function ChangeDayContent(){
    let  myNumber=1;
    let monthText=document.querySelector('.day_content-month_name');
    let dayName=document.querySelector('.day_content-day_name');
    let bigTemp=document.querySelector('.big_temp');
    let smallTemp=document.querySelector('.small_temp');
    let cloudDescription=document.querySelector('.cloud_description-title');
   //  const cloudDescriptionTitle=ElementCreator('h3','cloud_description-title',weather.list[1].weather[0].description)
  

      myFunc();
      function myFunc(){
         const weekDays=document.querySelectorAll('button[data-num]');
         let dayIndex=1;
         const HandleClick=(event)=>{

          }
          weekDays.forEach(weekday=>{
            weekday.addEventListener('click',(event)=>{
               dayIndex=+event.target.dataset.num;
               let feelsLikeTempKalvin=weather.list[dayIndex].main.feels_like;
               let date=(weather.list[dayIndex].dt_txt)
               const month=GetMonth(date);
               let day=getDay(weather,dayIndex);
               let tempKalvin=weather.list[dayIndex].main.temp;
               let cloudIconId=weather.list[dayIndex].weather[0].icon;
               WeatherMainCloud.src=`http://openweathermap.org/img/wn/${cloudIconId}@2x.png`;
              
               bigTemp.innerHTML= `<h2 class='big_temp'>${Temperature(tempKalvin)}&#176 </h2>`
               dayName.innerHTML=day;
               monthText.innerHTML=month;
               smallTemp.innerHTML=`<h3 class='small_temp'>Feels like ${Temperature(feelsLikeTempKalvin)}&#176</h3>`;
               cloudDescriptionTitle.innerHTML=weather.list[dayIndex].weather[0].description;
            });
    
          })
      }
      
  }
  ChangeDayContent();
return dayContent;
}

