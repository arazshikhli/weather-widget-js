import { ElementCreator, getDay, GetMonth, Temperature } from "./helper.js";

export const createContent=(weather)=>{

const dateTempcontainer=ElementCreator('div','day_content-city_info','')
const cloudImageContainer=ElementCreator('div','day_content-cloud','');
const otherWeatherInfo=ElementCreator('div','day_content-other_info','');
const dayContent=document.querySelector('.day_content');


//Other Info Container

const humidityContainer=ElementCreator('div','other_info-humidity_cont','');
const humidityImage=ElementCreator('img','other_info-humidity_image','/img/icons/other_info/humidity.png');
const humidityInfo=ElementCreator('h3','other_info-humidity_info',weather.list[1].main.humidity);
humidityContainer.appendChild(humidityImage);
humidityContainer.appendChild(humidityInfo);
otherWeatherInfo.appendChild(humidityContainer);

const windSpeedContainer=ElementCreator('div','other_info-windspeed_cont','');
const windSpeedImage=ElementCreator('img','other_info-windspeed_image','');
const windSpeedInfo=ElementCreator('h3','other_info-windspeed_info','');
windSpeedContainer.appendChild(windSpeedImage);
windSpeedContainer.appendChild(windSpeedInfo);
otherWeatherInfo.appendChild(windSpeedContainer);

const windDirectionContainer=ElementCreator('div','other_info-winddirection_cont','');
const windDirectionImage=ElementCreator('img','other_info-winddirection_image','');
const windDirectioninfo=ElementCreator('h3','other_info-winddirection_info','');
windDirectionContainer.appendChild(windDirectionImage);
windDirectionContainer.appendChild(windDirectioninfo);
otherWeatherInfo.appendChild(windDirectionContainer);

const pressureContainer=ElementCreator('div','other_info-pressure_cont','');
const pressureImage=ElementCreator('img','other_info-pressure_image','');
const pressureInfo=ElementCreator('h3','other_info-pressure_info','');
pressureContainer.appendChild(pressureImage);
pressureContainer.appendChild(pressureInfo);
otherWeatherInfo.appendChild(pressureContainer);

const month=  GetMonth(weather.list[1].dt_txt);
const dayOfWeek=getDay(weather,1);
const MonthDayTitle=ElementCreator('div','day_content-month_title','');//
const DayTempTitle=ElementCreator('div','day_content-tem_info','');
dateTempcontainer.append(MonthDayTitle);
dateTempcontainer.append(DayTempTitle);
const monthDayText=ElementCreator('p','day_content-month_name',month);
const Day=ElementCreator('p','day_content-day_name',dayOfWeek);
MonthDayTitle.appendChild(monthDayText);
MonthDayTitle.appendChild(Day);
const imageTempcontainer=ElementCreator('div','image_container','');
const imageTemp=ElementCreator('img','temp_image','./img/icons/temperature.png')
imageTempcontainer.append(imageTemp);
const tempKalvin=weather.list[0].main.temp;
const feelsLikeTempKalvin=weather.list[0].main.feels_like;
const bigTemp=ElementCreator('div','temp_info-city_temp',`<h2>${Temperature(tempKalvin)}&#176 </h2>`);
const smallTemp=ElementCreator('div','temp_flike',`<h3>Feels like ${Temperature(feelsLikeTempKalvin)}&#176</h3>`);
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
return dayContent;
}