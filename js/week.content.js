import { getDay, Temperature } from "./helper.js";

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
//#region firstDayContent
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
//#region dayName


const dayNameParsed=getDay(weather,1);
const dayName=document.createElement('h3');
dayName.innerHTML=dayNameParsed;
//#endregion

firstDay.appendChild(cloudImageCont);
firstDay.appendChild(tempContainer);
firstDay.appendChild(dayName);
//#endregion

////////

//#region secondDayContent
//#region  Cloud2
const cloudImageCont2=document.createElement('div');
const cloudImage2=document.createElement('img');
const cloudIconId2=weather.list[9].weather[0].icon;
cloudImage2.src=`http://openweathermap.org/img/wn/${cloudIconId2}@2x.png`;
cloudImageCont2.classList.add('second_day-image_container');
cloudImageCont2.appendChild(cloudImage2);

//#endregion
//#region Temperature
const tempFromApi2=Temperature(weather.list[9].main.temp);
const tempContainer2=document.createElement('div');
tempContainer2.classList.add('second_day-temp_cont');
const temperature2=document.createElement('p');
temperature2.classList.add('second_day-temp');
temperature2.innerHTML=`<h3>${tempFromApi2} &#176</h3>`;
tempContainer2.appendChild(temperature2);

//#endregion
//#region dayName

const dayNameParsed2=getDay(weather,9);
const dayName2=document.createElement('h3');
dayName2.innerHTML=dayNameParsed2;
//#endregion

SecondDay.appendChild(cloudImageCont2);
SecondDay.appendChild(tempContainer2);
SecondDay.appendChild(dayName2);
//#endregion


//#region thirdDayContent
//#region  Cloud2
const cloudImageCont3=document.createElement('div');
const cloudImage3=document.createElement('img');
const cloudIconId3=weather.list[17].weather[0].icon;
cloudImage3.src=`http://openweathermap.org/img/wn/${cloudIconId3}@2x.png`;
cloudImageCont3.classList.add('third_day-image_container');
cloudImageCont3.appendChild(cloudImage3);

//#endregion
//#region Temperature
const tempFromApi3=Temperature(weather.list[17].main.temp);
const tempContainer3=document.createElement('div');
tempContainer3.classList.add('third_day-temp_cont');
const temperature3=document.createElement('p');
temperature3.classList.add('third_day-temp');
temperature3.innerHTML=`<h3>${tempFromApi3} &#176</h3>`;
tempContainer3.appendChild(temperature3);

//#endregion
//#region dayName


const dayNameParsed3=getDay(weather,17);
const dayName3=document.createElement('h3');
dayName3.innerHTML=dayNameParsed3;
//#endregion

ThirdDay.appendChild(cloudImageCont3);
ThirdDay.appendChild(tempContainer3);
ThirdDay.appendChild(dayName3);
//#endregion





//#region 4DayContent
//#region  Cloud2
const cloudImageCont4=document.createElement('div');
const cloudImage4=document.createElement('img');
const cloudIconId4=weather.list[25].weather[0].icon;
cloudImage4.src=`http://openweathermap.org/img/wn/${cloudIconId4}@2x.png`;
cloudImageCont4.classList.add('fourth_day-image_container');
cloudImageCont4.appendChild(cloudImage4);

//#endregion
//#region Temperature
const tempFromApi4=Temperature(weather.list[25].main.temp);
const tempContainer4=document.createElement('div');
tempContainer4.classList.add('fourth_day-temp_cont');
const temperature4=document.createElement('p');
temperature4.classList.add('fourth_day-temp');
temperature4.innerHTML=`<h3>${tempFromApi4} &#176</h3>`;
tempContainer4.appendChild(temperature4);

//#endregion
//#region dayName

// const cityNamefromApi3=weather.list[17].dt_txt;
// const dayNameParsed3=getDay(weather,17);
// const dayName3=document.createElement('h3');
// dayName3.innerHTML=dayNameParsed3;


const dayNameParsed4=getDay(weather,25);
const dayName4=document.createElement('h3');
dayName4.innerHTML=dayNameParsed4;


//#endregion

FourthDay.appendChild(cloudImageCont4);
FourthDay.appendChild(tempContainer4);
FourthDay.appendChild(dayName4);
//#endregion

innerWeekContent.appendChild(firstDay);
innerWeekContent.appendChild(SecondDay);
innerWeekContent.appendChild(ThirdDay);
innerWeekContent.appendChild(FourthDay);

return innerWeekContent;
}

