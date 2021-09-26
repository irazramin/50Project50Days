const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentActive = 1;
let per=0;
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  per+=33;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  per-=33;
  update();
});

function update (){
    circles.forEach((circle, idx)  =>{
        if(idx < currentActive){
            circle.classList.add('active');
            // console.log('Index = '+idx);
            // console.log('CurrentActive = '+currentActive);
            // console.log('circles = '+circle);
        }
        else{
            circle.classList.remove('active');
        }
    });

   
    const activeClass = document.querySelectorAll('.active');
    //    (activeClass.length -1) / (circles.length -1)*100
       progress.style.width = per +'%';

       if(currentActive === 1){
           prev.disabled = true;
       }
       else if(currentActive === circles.length){
           next.disabled = true
       }
       else{
           prev.disabled = false;
           next.disabled = false;
       }
   
}