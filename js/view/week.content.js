import { ElementCreator, getDay, Temperature,Weather} from "../helper.js";


export const createWeekContent=(weather)=>{
  
    const myWeather1=new Weather();
    const myWeather2=new Weather();
    const myWeather3=new Weather();
    const myWeather4=new Weather();
    const myWeather5=new Weather();
   
    myWeather1.dayIndex=1;
    myWeather1.temperature=Temperature(weather.list[myWeather1.dayIndex].main.temp);
    myWeather1.day=getDay(weather,myWeather1.dayIndex);
    myWeather1.cloudIconId=weather.list[myWeather1.dayIndex].weather[0].icon;

    myWeather2.dayIndex=9;
    myWeather2.temperature=Temperature(weather.list[myWeather2.dayIndex].main.temp);
    myWeather2.day=getDay(weather,myWeather2.dayIndex);
    myWeather2.cloudIconId=weather.list[myWeather2.dayIndex].weather[0].icon;

    myWeather3.dayIndex=17;
    myWeather3.temperature=Temperature(weather.list[myWeather3.dayIndex].main.temp);
    myWeather3.day=getDay(weather,myWeather3.dayIndex);
    myWeather3.cloudIconId=weather.list[myWeather3.dayIndex].weather[0].icon;
    myWeather4.dayIndex=25;
    myWeather4.temperature=Temperature(weather.list[myWeather4.dayIndex].main.temp);
    myWeather4.day=getDay(weather,myWeather4.dayIndex);
    myWeather4.cloudIconId=weather.list[myWeather4.dayIndex].weather[0].icon;
    myWeather5.dayIndex=33;
    myWeather5.temperature=Temperature(weather.list[myWeather5.dayIndex].main.temp);
    myWeather5.day=getDay(weather,myWeather5.dayIndex);
    myWeather5.cloudIconId=weather.list[myWeather5.dayIndex].weather[0].icon;

    const innerWeekContent=document.createElement('div');
    innerWeekContent.classList.add('week_content-inner');
    const firstDayBtn=ElementCreator('button','first_button','Show More...');
    const secondDayBtn=ElementCreator('button','second_button','Show More...');
    const thirdDayBtn=ElementCreator('button','third_button','Show More...');
    const fourthDayBtn=ElementCreator('button','fourth_button','Show More...');
    const fifthDayBtn=ElementCreator('button','fifth_button','Show More...');
    firstDayBtn.setAttribute("data-num","1");
    secondDayBtn.setAttribute("data-num","9");
    thirdDayBtn.setAttribute("data-num","17");
    fourthDayBtn.setAttribute("data-num","25");
    fifthDayBtn.setAttribute("data-num","33");

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
const cloudIconId1=myWeather1.cloudIconId;
cloudImage.src=`http://openweathermap.org/img/wn/${cloudIconId1}@2x.png`;
cloudImageCont.classList.add('first_day-image_container','week_day-image_container');
cloudImageCont.appendChild(cloudImage);

//#endregion
//#region Temperature
const tempContainer=document.createElement('div');
tempContainer.classList.add('first_day-temp_cont','week_day-temp_cont');
const temperature=document.createElement('p');
temperature.classList.add('first_day-temp','week_day-temp');
temperature.innerHTML=`<h3>${myWeather1.temperature} &#176</h3>`;
tempContainer.appendChild(temperature);

//#endregion
//#region dayName

const dayName=document.createElement('h3');
dayName.innerHTML=myWeather1.day;
//#endregion

firstDay.appendChild(cloudImageCont);
firstDay.appendChild(tempContainer);
firstDay.appendChild(dayName);
firstDay.appendChild(firstDayBtn);
//#endregion

////////

//#region secondDayContent
//#region  Cloud2
const cloudImageCont2=document.createElement('div');
const cloudImage2=document.createElement('img');
const cloudIconId2=myWeather2.cloudIconId;
cloudImage2.src=`http://openweathermap.org/img/wn/${cloudIconId2}@2x.png`;
cloudImageCont2.classList.add('second_day-image_container','week_day-image_container');
cloudImageCont2.appendChild(cloudImage2);

//#endregion
//#region Temperature
const tempContainer2=document.createElement('div');
tempContainer2.classList.add('second_day-temp_cont','week_day-temp_cont');
const temperature2=document.createElement('p');
temperature2.classList.add('second_day-temp','week_day-temp');
temperature2.innerHTML=`<h3>${myWeather2.temperature} &#176</h3>`;
tempContainer2.appendChild(temperature2);

//#endregion
//#region dayName

const dayName2=document.createElement('h3');
dayName2.innerHTML=myWeather2.day;
//#endregion

SecondDay.appendChild(cloudImageCont2);
SecondDay.appendChild(tempContainer2);
SecondDay.appendChild(dayName2);
SecondDay.appendChild(secondDayBtn);
//#endregion


//#region thirdDayContent
//#region  Cloud2
const cloudImageCont3=document.createElement('div');
const cloudImage3=document.createElement('img');

cloudImage3.src=`http://openweathermap.org/img/wn/${myWeather3.cloudIconId}@2x.png`;
cloudImageCont3.classList.add('third_day-image_container','week_day-image_container');
cloudImageCont3.appendChild(cloudImage3);

//#endregion
//#region Temperature
const tempContainer3=document.createElement('div');
tempContainer3.classList.add('third_day-temp_cont','week_day-temp_cont');
const temperature3=document.createElement('p');
temperature3.classList.add('third_day-temp','week_day-temp');
temperature3.innerHTML=`<h3>${myWeather3.temperature} &#176</h3>`;
tempContainer3.appendChild(temperature3);

//#endregion
//#region dayName
const dayName3=document.createElement('h3');
dayName3.innerHTML=myWeather3.day;
//#endregion

ThirdDay.appendChild(cloudImageCont3);
ThirdDay.appendChild(tempContainer3);
ThirdDay.appendChild(dayName3);
ThirdDay.appendChild(thirdDayBtn);
//#endregion

//#region 4DayContent
//#region  Cloud2
const cloudImageCont4=document.createElement('div');
const cloudImage4=document.createElement('img');
cloudImage4.src=`http://openweathermap.org/img/wn/${myWeather4.cloudIconId}@2x.png`;
cloudImageCont4.classList.add('fourth_day-image_container','week_day-image_container','week_day-image_container');
cloudImageCont4.appendChild(cloudImage4);

//#endregion
//#region Temperature
const tempContainer4=document.createElement('div');
tempContainer4.classList.add('fourth_day-temp_cont','week_day-temp_cont');
const temperature4=document.createElement('p');
temperature4.classList.add('fourth_day-temp','week_day-temp');
temperature4.innerHTML=`<h3>${myWeather4.temperature} &#176</h3>`;
tempContainer4.appendChild(temperature4);

//#endregion
//#region dayName
const dayName4=document.createElement('h3');
dayName4.innerHTML=myWeather4.day;


//#endregion

FourthDay.appendChild(cloudImageCont4);
FourthDay.appendChild(tempContainer4);
FourthDay.appendChild(dayName4);
FourthDay.appendChild(fourthDayBtn);
//#endregion


//#region 5DayContent
//#region  Cloud2
const cloudImageCont5=document.createElement('div');
const cloudImage5=document.createElement('img');
cloudImage5.src=`http://openweathermap.org/img/wn/${myWeather5.cloudIconId}@2x.png`;
cloudImageCont5.classList.add('fifth_day-image_container','week_day-image_container');
cloudImageCont5.appendChild(cloudImage5);

//#endregion
//#region Temperature
const tempContainer5=document.createElement('div');
tempContainer5.classList.add('fifth_day-temp_cont','week_day-temp_cont');
const temperature5=document.createElement('p');
temperature5.classList.add('fifth_day-temp','week_day-temp');
temperature5.innerHTML=`<h3>${myWeather5.temperature} &#176</h3>`;
tempContainer5.appendChild(temperature5);

//#endregion
//#region dayName
const dayName5=document.createElement('h3');
dayName5.innerHTML=myWeather5.day;


//#endregion

fifthDay.appendChild(cloudImageCont5);
fifthDay.appendChild(tempContainer5);
fifthDay.appendChild(dayName5);
fifthDay.appendChild(fifthDayBtn);

//#endregion
innerWeekContent.appendChild(firstDay);
innerWeekContent.appendChild(SecondDay);
innerWeekContent.appendChild(ThirdDay);
innerWeekContent.appendChild(FourthDay);
innerWeekContent.appendChild(fifthDay);
 

return innerWeekContent;
}

