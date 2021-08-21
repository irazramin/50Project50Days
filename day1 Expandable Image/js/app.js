const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener('click',() =>{
        activeClassRemove();
        panel.classList.add('active');
    });
});

let activeClassRemove = function(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    });
}