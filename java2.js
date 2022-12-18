let interval=null; 
let seconds =0;
let tens=0;
let min=0;
let Hour=0;

let getms=document.getElementById('milisec');
let getsec=document.getElementById('second');
let getmin=document.getElementById('minte');
let getHour=document.getElementById('ghante');

let resetbtn = document.getElementById("reset");
let playbtn = document.getElementById("play");
let pausebtn = document.getElementById("pause");


playbtn.addEventListener("click", () => {
    resetbtn.classList.remove("hidden");
    pausebtn.classList.remove("hidden");
  });
  resetbtn.addEventListener("click", () => {
    resetbtn.classList.add("hidden");
    pausebtn.classList.add("hidden");
  });
playbtn.addEventListener('click',()=>{
  if (interval !== null) {
    clearInterval(interval);
    
  }
  interval=  setInterval(settimer,10); 
  
});
pausebtn.addEventListener('click',()=>{
    clearInterval(interval);
});
resetbtn.addEventListener('click',()=>{
    clearInterval(interval);
    tens="0"+0;
    getms.innerHTML=tens;
    seconds="0"+0;
    getsec.innerHTML=seconds;
    min="0"+0;
    getmin.innerHTML=min;
    Hour="0"+0;
    getHour.innerHTML=Hour;

});
function settimer(){
    tens++;
      if (tens<=9) {
        getms.innerHTML="0"+tens;
      }
      if (tens>9) {
        getms.innerHTML=tens;
      }
      if (tens>99) {
        seconds++;
        getsec.innerHTML="0"+seconds;
        tens=0;
        getms.innerHTML="0"+tens;

      }
      if (seconds>9) {
        getsec.innerHTML=seconds;
      }
      if (seconds>59) {
        min++;
        getmin.innerHTML="0"+min;
        seconds=0;
        getsec.innerHTML="0"+seconds;
      }
      if (min>9) {
        getmin.innerHTML=min;
      }
      if (min>59) {
        Hour=Hour+1;
        getHour.innerHTML="0"+Hour;
        min=0;
        getmin.innerHTML="0"+min;
          
      }
      if (Hour>9) {
        getHour.innerHTML=Hour;
      }
}
