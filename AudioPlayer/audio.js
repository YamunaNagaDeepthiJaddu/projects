let nextButton=document.getElementById("next")
let prevButton=document.getElementById("prev")
let VDown=document.getElementById("Vdown")
let Vup=document.getElementById("Vup")
let Play=document.getElementById("play")
let Restart=document.getElementById("restart")
let Pause=document.getElementById("pause")
let img=document.getElementById("img")

let image=["asthetic","krishna","pic2","download"]

let i=0
let Audioplay=["flowers","krishna-flute","spring","krishnaya-vasudevaya"]
let Audioplayers=new Audio("/Audios/Audioplay.mp3")

console.log(Audioplayers)



prevButton.addEventListener('click',()=>{

    if(i<=0){
        i=image.length-1
        console.log("from prev if"+i)
    }
    else{
        i--
        console.log("from prev else"+i)
    }

    img.src="/Image/"+image[i]+".jpg"; 
Audioplayers.src="/Audios/"+Audioplay[i]+".mp3";  
Audioplayers.play()
   
})






nextButton.addEventListener('click',()=>{

    
    if(i>=0 && i<image.length-1){
        
        i++
    }    
    else{
        i=0
    }    

   img.src="/Image/"+image[i]+".jpg"; 
Audioplayers.src="/Audios/"+Audioplay[i]+".mp3";  
Audioplayers.play() 
    
})




Play.addEventListener('click',()=>{
    Audioplayers.play()
})

Pause.addEventListener('click',()=>{
    Audioplayers.pause()
})


Vup.addEventListener('click',()=>{

    if(Audioplayers.volume<=1){
        Audioplayers.volume=Audioplayers.volume+1;
    }
})


VDown.addEventListener('click',()=>{

    if(Audioplayers.volume>=0.1){
        Audioplayers.volume=Audioplayers.volume-0.1;
    }
})

Restart.addEventListener('click',()=>{
    Audioplayers.currentTime=0;
    Audioplayers.play();
})
