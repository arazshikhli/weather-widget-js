import { getWeatherData } from "./api.js";
import { createContent } from "./createContent.js";
import { resetWeatherContent } from "./helper.js";
import { createWeekContent } from "./week.content.js";


 
 export const createElements=()=>{
    const appContent=document.createElement('div');
    const header=document.createElement('header');
    const dayContent=document.createElement('div');
    const weekContent=document.createElement('div');
    // const CitySelectBtn=document.createElement('button');
    const InputContainer=document.createElement('div');
    const CitySelect=document.createElement('input');
    const ChangeCityBtn=document.createElement('button');
    const CityName=document.createElement('h2');
    const errorBlock=document.createElement('p');
    const TitleContent=document.createElement('div');
    const InnerTitleContainer=document.createElement('div');
    const SwitcherContainer=document.createElement('div');
    const ModeController=document.createElement('div');
    
   
    const ModeButton=document.createElement('button');
    
    appContent.classList.add('app');
    document.body.append(appContent);
    ModeController.classList.add('mode_control');
    ModeButton.classList.add('mode_btn');
    InnerTitleContainer.classList.add('header_title-inner');
    ChangeCityBtn.classList.add('city_change-btn');
    TitleContent.classList.add('header_title');
    SwitcherContainer.classList.add('header_content-switcher');
    header.classList.add('header');
    dayContent.classList.add('day_content');
    weekContent.classList.add('week_content');
    CitySelect.classList.add('city_input');
    CitySelect.placeholder='Enter City name'
    // CitySelectBtn.classList.add('city_select-btn');
    CityName.classList.add('city_name');
    errorBlock.classList.add('city_error');
    InputContainer.classList.add('input_container');

    TitleContent.appendChild(InnerTitleContainer);
    SwitcherContainer.appendChild(ModeController);
    header.appendChild(TitleContent);
    header.appendChild(SwitcherContainer);
    appContent.appendChild(header);
   
    // InnerTitleContainer.appendChild(CitySelectBtn);
    InnerTitleContainer.appendChild(InputContainer);
    InputContainer.appendChild(CitySelect);//
    InputContainer.appendChild(ChangeCityBtn);//
    InnerTitleContainer.appendChild(CityName);
    InnerTitleContainer.appendChild(errorBlock);
    ModeController.appendChild(ModeButton);
    // CitySelectBtn.textContent='Change City';
    ChangeCityBtn.textContent='Ok';
    
    //  CitySelectBtn.addEventListener('click',()=>{
    //   const InputContainer=document.createElement('div');
    //   InputContainer.classList.add('input_container');
    //   InputContainer.appendChild(CitySelect);
    //   InputContainer.appendChild(ChangeCityBtn);
    //   InnerTitleContainer.appendChild(InputContainer);
    // })
    ChangeCityBtn.addEventListener('click',async()=>{   
    
      const cityValue=CitySelect.value;
      if(!cityValue){return;}
      try{
        const weather=await getWeatherData(cityValue||localStorage.getItem('city'));
        // const weather = await getWeatherData(localStorage.getItem('city') || 'Москва');
        if(weather.message){
          console.log('error');
          // InnerTitleContainer
          errorBlock.textContent="City not found";
          InnerTitleContainer.appendChild(errorBlock);
          CityName.innerHTML='';
          dayContent.innerHTML='';
          weekContent.innerHTML='';
          return;
        }
        dayContent.innerHTML='';
        
        // const weekBlock=document.querySelector('.week_content-inner');
        // weekBlock.innerHTML='';
        localStorage.setItem('city', weather.city.name);
        CityName.innerText=weather.city.name;
        console.log(weather);
        const WeekContentBlock=createWeekContent(weather);
      //  weekContent.append(WeekContentBlock);
        appContent.appendChild(dayContent);
        let isTrue=weekContent.contains(WeekContentBlock);
        if(isTrue===false){
       
          weekContent.appendChild(WeekContentBlock);
          console.log("a");
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
      
    }  
    )

    return appContent;
}
export const CityContent=()=>{
  
}