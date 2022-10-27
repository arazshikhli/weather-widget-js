export const modeChange=()=>{
   
    const app=document.querySelector('.app');
    const ModeBtn=document.querySelector('.mode_btn');
    const wasDarkMode=localStorage.getItem('dark_mode')==='true'
    localStorage.setItem('dark_mode',!wasDarkMode);
    app.classList.toggle('dark_mode',!wasDarkMode);

    ModeBtn.addEventListener('click',()=>{
        
    const wasDarkMode=localStorage.getItem('dark_mode')==='true'
    localStorage.setItem('dark_mode',!wasDarkMode);
    app.classList.toggle('dark_mode',!wasDarkMode);
    if(!wasDarkMode){ModeBtn.textContent='Light mode';}
    if(wasDarkMode){ModeBtn.textContent='Dark mode';}
    });

    document.addEventListener('DOMContentLoader',onload);
    function onload(){
       app.classList.toggle('dark_mode',localStorage.getItem('dark_mode')==='true')
    }
    document.addEventListener('DOMContentLoaded',onload);
}   
