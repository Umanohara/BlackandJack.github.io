let x;
let y;
let currenTT;
function main(){

do{
     x=Math.floor(Math.random()*100/7.6);
}while(x==0)
     currenTT=parseInt(document.getElementById("total").innerHTML);
     y=x+currenTT;
     document.getElementById("total").innerHTML=y;
    
     
      if(y>21){
        document.getElementById("rule").innerHTML="You are lost";
        document.getElementById("btn1").style.display="block";
    }
        
     
     else if (y==21){
        document.getElementById("rule").innerHTML="You are won";
        document.getElementById("btn1").style.display="block";
     }
     else{
    var img=document.createElement("img");
    img.src="images/"+x+".png";
    img.height=300;
    document.body.appendChild(img);
     }
    }

function restart(){
    location.reload();
}