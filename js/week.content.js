import { Temperature } from "./helper.js";

export const createWeekContent=(weather)=>{
    
    const innerWeekContent=document.createElement('div');
    innerWeekContent.classList.add('week_content-inner');

const firstDay=document.createElement('div');
const SecondDay=document.createElement('div');
const ThirdDay=document.createElement('div');
const FourthDay=document.createElement('div');
const fifthDay=document.createElement('div');

firstDay.classList.add('first_day','week_days');
SecondDay.classList.add('second_day','week_days');
ThirdDay.classList.add('third_day','week_days');
FourthDay.classList.add('fourth_day','week_days');
fifthDay.classList.add('fifth_day','week_days');

//создание контента по дням в нижнем разделе - облачность(картинка),темпетартура и денб недели.
//1//9//17/25//33
//#region  Cloud
const cloudImageCont=document.createElement('div');
const cloudImage=document.createElement('img');
const cloudIconId1=weather.list[1].weather[0].icon;
cloudImage.src=`http://openweathermap.org/img/wn/${cloudIconId1}@2x.png`;
cloudImageCont.classList.add('first_day-image_container');
cloudImageCont.appendChild(cloudImage);
//#endregion
//#region Temperature
const tempFromApi=Temperature(weather.list[1].main.temp);
const tempContainer=document.createElement('div');
tempContainer.classList.add('first_day-temp_cont');
const temperature=document.createElement('p');
temperature.classList.add('first_day-temp');
temperature.innerHTML=`<h3>${tempFromApi} &#176</h3>`;
tempContainer.appendChild(temperature);

//#endregion

firstDay.appendChild(cloudImageCont);
firstDay.appendChild(tempContainer);
innerWeekContent.appendChild(firstDay);

return innerWeekContent;
}

