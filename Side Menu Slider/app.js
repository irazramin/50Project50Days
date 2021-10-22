const toggle = document.getElementById('toggle');
const openModal = document.getElementById('open');
const modal = document.getElementById('model');
const closeBtn = document.getElementById('close-btn');

//add listener to side menu slider button
toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-menu');
});

openModal.addEventListener('click',()=>{
    modal.classList.add('show-modal');
});


closeBtn.addEventListener('click',()=> {
    modal.classList.remove('show-modal');
    console.log(123)
})

//close modal from outside
window.addEventListener('click' , e => e.target == modal ? modal.classList.remove('show-modal') : false)