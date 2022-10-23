import { ElementCreator } from "../helper.js"

export const showMoreInfo=()=>{
    const showMoreContainer=ElementCreator('div','week_content-button_cont','');
    const firstDayBtn=ElementCreator('button','first_button','Show More info...');
    const secondDayBtn=ElementCreator('button','second_button','Show More info...');
    const thirdDayBtn=ElementCreator('button','third_button','Show More info...');
    const fourthDayBtn=ElementCreator('button','fourth_button','Show More info...');
    const fifthDayBtn=ElementCreator('button','fifth_button','Show More info...');
    
    firstDayBtn.setAttribute("data-num","1");
    secondDayBtn.setAttribute("data-num","2");
    thirdDayBtn.setAttribute("data-num","3");
    fourthDayBtn.setAttribute("data-num","4");
    fifthDayBtn.setAttribute("data-num","5");

    showMoreContainer.appendChild(firstDayBtn);
    showMoreContainer.appendChild(secondDayBtn);
    showMoreContainer.appendChild(thirdDayBtn);
    showMoreContainer.appendChild(fourthDayBtn);
    showMoreContainer.appendChild(fifthDayBtn);
    return showMoreContainer;
}