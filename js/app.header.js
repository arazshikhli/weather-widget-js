import { getWeatherData } from "./model/api.js";
import { createContent } from "./createContent.js";
import { ElementCreator, getWindDirection, Temperature } from "./helper.js";
import { createWeekContent } from "./view/week.content.js";
 import { Weather } from "./helper.js";
 export const createElements=()=>{
    const appContent=ElementCreator('div','app','');
    const header=ElementCreator('div','header','');
    const dayContent=ElementCreator('div','day_content','');
    const weekContent=ElementCreator('div','week_content');
    const InputContainer=ElementCreator('div','input_container','');
    const CitySelect=ElementCreator('input','city_input','Enter city name');
    const ChangeCityBtn=ElementCreator('button','city_change-btn','Ok');
    const CityName=ElementCreator('h2','city_name','');
    const errorBlock=ElementCreator('p','city_error','');
    const TitleContent=ElementCreator('div','header_title','');
    const InnerTitleContainer=ElementCreator('div','header_title-inner','');
    const SwitcherContainer=ElementCreator('div','header_content-switcher','');
    const ModeController=ElementCreator('div','mode_control','');
    const startMenuBtn =ElementCreator('button','input_container-start_button','Select City');
    const startButtonContainer=ElementCreator('div','start_btn-container','');
    startButtonContainer.append(startMenuBtn);
    InnerTitleContainer.appendChild(startButtonContainer);
    const ModeButton=ElementCreator('button','mode_btn','');
    let mode=localStorage.getItem('dark_mode');
    console.log(mode)
    document.body.append(appContent);
    ModeButton.classList.add('mode_btn');
    TitleContent.appendChild(InnerTitleContainer);
    SwitcherContainer.appendChild(ModeController);
    header.appendChild(TitleContent);
    header.appendChild(SwitcherContainer);
    appContent.appendChild(header);

    InnerTitleContainer.appendChild(CityName);
    InnerTitleContainer.appendChild(errorBlock);
    ModeController.appendChild(ModeButton);

  startMenuBtn.addEventListener('click',()=>{
    InnerTitleContainer.appendChild(InputContainer);
    InputContainer.appendChild(CitySelect);//
    InputContainer.appendChild(ChangeCityBtn);
    InnerTitleContainer.removeChild(startButtonContainer);
    dayContent.innerHTML='';
    weekContent.innerHTML='';
  })


    ChangeCityBtn.addEventListener('click',async()=>{   
      const cityValue=CitySelect.value;
      if(!cityValue){return;}
      try{
        const weather=await getWeatherData(cityValue||localStorage.getItem('city'));

        if(weather.message){
          console.log('error');
          errorBlock.textContent="City not found";
          InnerTitleContainer.appendChild(errorBlock);
          CityName.innerHTML='';
          dayContent.innerHTML='';
          weekContent.innerHTML='';
          return;
        }
        dayContent.innerHTML='';
       localStorage.setItem('city', weather.city.name);
        CityName.innerText=weather.city.name;
        const WeekContentBlock=createWeekContent(weather);
        appContent.appendChild(dayContent);
        let isTrue=weekContent.contains(WeekContentBlock);
        if(isTrue===false){
          weekContent.appendChild(WeekContentBlock);

          isTrue=true;
        }
       
        appContent.appendChild(weekContent);
    
        if(InnerTitleContainer.contains(errorBlock)){
          InnerTitleContainer.removeChild(errorBlock);
        }   
        createContent(weather);      
      }
      catch(error){
        console.log(error);
      
      }
      InnerTitleContainer.removeChild(InputContainer);
      InnerTitleContainer.appendChild(startButtonContainer);
      startMenuBtn.textContent="Change city";
    }  
    )
    return appContent;
}