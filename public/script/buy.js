var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
var Indicator1 = document.getElementById("Indicator1");
var Indicator2 = document.getElementById("Indicator2");
var count=0;

function onebuy(){

   
    Indicator.style.transform = "translateX(0px)";

}



function sellown(){
   
    Indicator.style.transform = "translateX(100px)";

}

function buy(){
    Indicator1.style.background = "#037003";
    document.getElementById('buy').style.color='#037003';
    document.getElementById('sell').style.color='black';
    document.getElementById('usdt').style.color='#037003';
    document.getElementById('btc').style.color='black';
    document.getElementById('eth').style.color='black';
    document.getElementById('Indicator2').style.background='#037003';
    Indicator1.style.transform = "translateX(0px)";
    Indicator2.style.transform = "translateX(0px)";
    count=0;
}
function sell(){
   Indicator1.style.background= "red";
   document.getElementById('buy').style.color='black';
   document.getElementById('sell').style.color='red';
   document.getElementById('usdt').style.color='red';
   document.getElementById('Indicator2').style.background='red';
   document.getElementById('btc').style.color='black';
   document.getElementById('eth').style.color='black';
   Indicator1.style.transform = "translateX(75px)";
   Indicator2.style.transform = "translateX(0px)";
   count=1;

}
function btc(){
   if(count==0){
    Indicator2.style.transform = "translateX(75px)";
    document.getElementById('btc').style.color='#037003';
    document.getElementById('usdt').style.color='black';
    document.getElementById('eth').style.color='black';
 

   }
   else{
    Indicator2.style.transform = "translateX(75px)";
    document.getElementById('btc').style.color='red';
    document.getElementById('usdt').style.color='black';
    document.getElementById('eth').style.color='black';
 

   }


}
function eth(){
if(count==0){
    Indicator2.style.transform = "translateX(150px)";
    document.getElementById('btc').style.color='black';
    document.getElementById('usdt').style.color='black';
    document.getElementById('eth').style.color='#037003';
    
   }
   else{
    Indicator2.style.transform = "translateX(150px)";
    document.getElementById('btc').style.color='black';
    document.getElementById('usdt').style.color='black';
    document.getElementById('eth').style.color='red';
 

   }
   


}

function usdt(){
if(count==0){
    Indicator2.style.transform = "translateX(0px)";
    document.getElementById('btc').style.color='black';
    document.getElementById('usdt').style.color='#037003';
    document.getElementById('eth').style.color='black';
   }
   else{
    Indicator2.style.transform = "translateX(0px)";
    document.getElementById('btc').style.color='black';
    document.getElementById('usdt').style.color='red';
    document.getElementById('eth').style.color='black';
 

   }
   
}