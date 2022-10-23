export const modeChange=()=>{
    const ModeBtn=document.querySelector('.mode_btn');
    const header=document.querySelector('.header');
    const dayContent=document.querySelector('.day_content');
    const weekcontent=document.querySelector('.week_content');
    const app=document.querySelector('.app');
   
    app.classList.add('light-mode');
    ModeBtn.textContent="turn to dark mode";
    ModeBtn.addEventListener('click',()=>{
        if(app.classList.contains('light-mode')){
            app.classList.remove('light-mode');
            app.classList.add('dark-mode');
            ModeBtn.textContent="turn to light mode";
        }
    })
}
