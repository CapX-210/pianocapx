/*const pianokeys=document.querySelectorAll(".piano-keys .key"),
volumeslider=document.querySelector("#column input");
let allkey=[],
audio=new Audio("tunes/a.wav");

const playtune=(key)=>{
    audio.src=`tunes/${key}.wav`;
audio.play();
const clickedkey=document.querySelector(`[data-key="${key}"]`);
clickedkey.classList.add("active");
setTimeout(()=>{
    clickedkey.classList.remove("active");
},150);

}
pianokeys.forEach(key=>{
    allkey.push(key.dataset.key);
    key.addEventListener(("click"),()=>playtune(key.dataset.key))

});
const volumecontrol=(e)=>{
    audio.volume= e.target.value;
}
const pressedKey=(e)=>{
   if(allkey.includes(e.key))playtune(e.key);
}
document.addEventListener(("keydown"), pressedKey);
volumeslider.addEventListener(("input"), volumecontrol);*/

const pianokey=document.querySelectorAll(".piano-keys .key");
const allKey=[];
const volumeslider=document.querySelector(".volume-slider input");
let audio =new Audio("tunes/a.wav");
const playtune=(key)=>{
audio.src=`tunes/${key}.wav`;
audio.play();
const clickedkey=document.querySelector(`[data-key="${key}"]`);
clickedkey.classList.add("active");
setTimeout(()=>{clickedkey.classList.remove("active")},150);
}
let volumecontrol=(e)=>{
    audio.volume=e.target.value;
}
const pressedkey=(e)=>{
    if(allKey.includes(e.key)){
       playtune(e.key); 
    }
    
}
pianokey.forEach(key=>{
    allKey.push(key.dataset.key);
    key.addEventListener(("click"),()=>playtune(key.dataset.key))
})
document.addEventListener("keydown",pressedkey);
volumeslider.addEventListener("input",volumecontrol);







