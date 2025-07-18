let hour=document.getElementById("hours")
let minute=document.getElementById("minute")
let second=document.getElementById("seconds")
let AmPm=document.getElementById("AmOrPm")


let  changeTime=()=>{

    let date=new Date();


    let Hours=date.getHours();
    let Minutes=date.getMinutes();
    let Seconds=date.getSeconds();

    if(date.getHours()>12){
        Hours=Hours-12
        hour.innerHTML=Hours;
    }
    else{
       hour.innerHTML=Hours;

    }

    
    minutes.innerHTML=Minutes;
    second.innerHTML=Seconds;

     
    if(date.getHours()>=12){
        AmPm.innerHTML="Pm"
   }
   else{
       AmPm.innerHTML="Am" 
   }

    console.log(date)

   if(Hours<10){

    
        hour.innerHTML=0+""+Hours;


   }
   else{
            hour.innerHTML=Hours;

   }

   if(Seconds<10){

    
       second.innerHTML=0+""+Seconds;


   }
   else{
           second.innerHTML=Seconds;

   }

   if(Seconds<10){

    
       second.innerHTML=0+""+Seconds;


   }
   else{
           second.innerHTML=Seconds;

   }

   if(Minutes<10){

    
       minutes.innerHTML=0+""+Minutes;


   }
   else{
           minutes.innerHTML=Minutes;

   }


}

setInterval(changeTime,1000);

