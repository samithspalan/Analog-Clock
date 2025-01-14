let hour_hand=document.querySelector('.hour-hand')
let min_hand=document.querySelector('.min-hand')
let sec_hand=document.querySelector('.sec-hand')
let hour=document.querySelector('.hour')
let min=document.querySelector('.min')
let sec=document.querySelector('.sec')

setInterval(()=>{
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let hrotation=30*h+h/2;
    let mrotation=6*m;
    let srotation=6*s;
    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;


})