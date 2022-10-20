export const modeChange=()=>{
    const ModeBtn=document.querySelector('.mode_btn');
    ModeBtn.addEventListener('click',()=>{
        if(!ModeBtn.classList.contains('dark_mode')){
            ModeBtn.classList.add('dark_mode');
            ModeBtn.classList.remove('light_mode'); 
        }
        else{
            ModeBtn.classList.add('light_mode');
            ModeBtn.classList.remove('dark_mode');            
        }
    })
    
}
