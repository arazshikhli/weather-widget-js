import { ElementCreator, getDay, GetMonth, getWindDirection,Temperature,Weather} from "./helper.js";



  export const createContent=(weather)=>{
    
  const myWeather=new Weather();
  myWeather.cityName=weather.city.name;
  myWeather.dayIndex=1;
  myWeather.date=weather.list[myWeather.dayIndex].dt_txt;
  myWeather.windSpeed=weather.list[myWeather.dayIndex].wind.speed;
  myWeather.temperature=Temperature(weather.list[myWeather.dayIndex].main.temp);
  myWeather.feelsLikeTemp=Temperature(weather.list[myWeather.dayIndex].main.feels_like);
  myWeather.windDirection=getWindDirection(weather.list[myWeather.dayIndex].wind.deg);
  myWeather.pressure=weather.list[myWeather.dayIndex].main.pressure.toFixed(1);
  myWeather.humidity=weather.list[myWeather.dayIndex].main.humidity;
  myWeather.cloudDescription=weather.list[myWeather.dayIndex].weather[0].description;
  myWeather.day=getDay(weather,myWeather.dayIndex);
  myWeather.month=GetMonth(myWeather.date);
  myWeather.cloudIconId=weather.list[myWeather.dayIndex].weather[0].icon;

const dateTempcontainer=ElementCreator('div','day_content-city_info','')
const cloudImageContainer=ElementCreator('div','day_content-cloud','');
const otherWeatherInfo=ElementCreator('div','day_content-other_info','');
const dayContent=document.querySelector('.day_content');
//Other Info Container
const humidityContainer=ElementCreator('div','other_info-humidity_cont','');
const humidityImage=ElementCreator('img','other_info-humidity_image','./img/icons/other_info/humidity.png');
const humidityInfo=ElementCreator('h3','other_info-humidity_info',myWeather.humidity+" &#37");
humidityContainer.appendChild(humidityImage);
humidityContainer.appendChild(humidityInfo);
otherWeatherInfo.appendChild(humidityContainer);

const windSpeedContainer=ElementCreator('div','other_info-windspeed_cont','');
const windSpeedImage=ElementCreator('img','other_info-windspeed_image','./img/icons/other_info/wind.png');
const windSpeedInfo=ElementCreator('h3','other_info-windspeed_info',Math.floor(myWeather.WindSpeed) +" km/h");
windSpeedContainer.appendChild(windSpeedImage);
windSpeedContainer.appendChild(windSpeedInfo);
otherWeatherInfo.appendChild(windSpeedContainer);

const windDirectionContainer=ElementCreator('div','other_info-winddirection_cont','');
const windDirectionImage=ElementCreator('img','other_info-winddirection_image','./img/icons/other_info/wind-direction.png');
const windDirectioninfo=ElementCreator('h3','other_info-winddirection_info',myWeather.WindDirection);
windDirectionContainer.appendChild(windDirectionImage);
windDirectionContainer.appendChild(windDirectioninfo);
otherWeatherInfo.appendChild(windDirectionContainer);
const pressureContainer=ElementCreator('div','other_info-pressure_cont','');
const pressureImage=ElementCreator('img','other_info-pressure_image','./img/icons/other_info/pressure.webp');
const pressureInfo=ElementCreator('h3','other_info-pressure_info',myWeather.pressure+" mb");
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

const bigTemp=ElementCreator('div','temp_info-city_temp',`<h2 class='big_temp'>${myWeather.temperature}&#176 </h2>`);
const smallTemp=ElementCreator('div','temp_flike',`<h3 class='small_temp'>Feels like ${myWeather.feelsLikeTemp}&#176</h3>`);
const WeatherMainCloud=ElementCreator('img','cloud_img',`http://openweathermap.org/img/wn/${myWeather.cloudIconId}@2x.png`);
cloudImageContainer.append(WeatherMainCloud);
const cloudDescription=ElementCreator('div','cloud_description','');
const cloudDescriptionTitle=ElementCreator('h3','cloud_description-title', myWeather.cloudDescription);
cloudDescription.append(cloudDescriptionTitle);
DayTempTitle.append(imageTempcontainer);
cloudImageContainer.appendChild(cloudDescription);
DayTempTitle.appendChild(bigTemp);
DayTempTitle.appendChild(smallTemp);
dayContent.append(dateTempcontainer);

dayContent.append(cloudImageContainer);
dayContent.append(otherWeatherInfo);



function ChangeDayContent(){
    let monthText=document.querySelector('.day_content-month_name');
    let dayName=document.querySelector('.day_content-day_name');
    let bigTemp=document.querySelector('.big_temp');
    let smallTemp=document.querySelector('.small_temp');

      myFunc();
      function myFunc(){
         const weekDays=document.querySelectorAll('button[data-num]');
         let dayIndex=1;
          weekDays.forEach(weekday=>{
            weekday.addEventListener('click',(event)=>{
              if(dayIndex===1){
                const dayCont=document.querySelectorAll('.week_days');
                const firstDayClass=document.querySelector('.first_day');
                firstDayClass.classList.add('active');
              }
               dayIndex=+event.target.dataset.num;
               myWeather.dayIndex=dayIndex;
               myWeather.date=weather.list[myWeather.dayIndex].dt_txt;
              myWeather.windSpeed=weather.list[myWeather.dayIndex].wind.speed;
              myWeather.temperature=Temperature(weather.list[myWeather.dayIndex].main.temp);
              myWeather.feelsLikeTemp=Temperature(weather.list[myWeather.dayIndex].main.feels_like);
              myWeather.windDirection=getWindDirection(weather.list[myWeather.dayIndex].wind.deg);
              myWeather.pressure=weather.list[myWeather.dayIndex].main.pressure.toFixed(1);
              myWeather.humidity=weather.list[myWeather.dayIndex].main.humidity;
              myWeather.cloudDescription=weather.list[myWeather.dayIndex].weather[0].description;
              myWeather.day=getDay(weather,myWeather.dayIndex);
              myWeather.month=GetMonth(myWeather.date);          
              myWeather.cloudIconId=weather.list[myWeather.dayIndex].weather[0].icon;
               WeatherMainCloud.src=`http://openweathermap.org/img/wn/${myWeather.cloudIconId}@2x.png`;
              
               bigTemp.innerHTML= `<h2 class='big_temp'>${myWeather.temperature}&#176 </h2>`;
               dayName.innerHTML=myWeather.day;
               monthText.innerHTML=myWeather.month;
               smallTemp.innerHTML=`<h3 class='small_temp'>Feels like ${myWeather.feelsLikeTemp}&#176</h3>`;
               cloudDescriptionTitle.innerHTML=myWeather.cloudDescription;
               humidityInfo.innerHTML=weather.list[dayIndex].main.humidity+" &#37";
               windSpeedInfo.innerHTML=myWeather.windSpeed +" km/h";
               windDirectioninfo.innerHTML=myWeather.windDirection;;
               pressureInfo.innerHTML=myWeather.pressure+" mb";
               
            });
    
          })
      }
      
  }
  ChangeDayContent();
return dayContent;
}

