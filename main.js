//Decreament the break length by one
function decrese(){
	var a= document.getElementById("b_num").innerText;
	result1 = --a;
	if(result1 < 1){
	result1 = 1;
	}
document.getElementById("b_num").innerHTML = result1;
}
//Increament the break length by one
function increase(){
	var a= document.getElementById("b_num").innerText;
	result2 = ++a;
document.getElementById("b_num").innerHTML = result2;
}
//Decreament the session length by one
function session_decrese(){
	var a= document.getElementById("s_num").innerText;
	result3 = --a;
	if(result3 < 1){
	result3 = 1;
	}
document.getElementById("s_num").innerHTML = result3;
document.getElementById("session").innerHTML = "Session <br><br>" + result3;
}
//Increament the session length by one
function session_increase(){
	var a= document.getElementById("s_num").innerText;
	result4 = ++a;
document.getElementById("s_num").innerHTML = result4;
document.getElementById("session").innerHTML = "Session <br><br>" + result4;
}
//Countdown Timer
var countSessn;	var countBreak;		
function countdown() {
	var sessnLen = parseInt(document.getElementById("s_num").innerText); //get the session length
	var breakLen = parseInt(document.getElementById("b_num").innerText); //get the break length
	sessnLen *=60;breakLen *=60;
	countSessn = setInterval(timer,1000);

	function timer(){
		sessnLen -=1;
	if(sessnLen === 0){
	clearInterval(countSessn);
	countBreak = setInterval(breakTimer,1000);	//once the session length completed call the break length
	}
	if(sessnLen%60 >= 10){  //if secs > 10 add 0 
      $("#session").html("Session  <br><br>" + Math.floor(sessnLen/60)+":"+sessnLen%60);
    }
    else{
      $("#session").html("Session  <br><br>" + Math.floor(sessnLen/60)+":"+"0"+sessnLen%60);
    }
	if(sessnLen/60 > 59){ //if minutes > 59 then display time in hh:mm:ss
	var h =Math.floor(sessnLen/3600);
	var m =Math.floor(sessnLen%3600/60);
	var s=Math.floor(sessnLen%3600%60);
	 $("#session").html("Session  <br><br>" + (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); 
	}
	$("#clock").css("box-shadow","inset 0 0 12px #19af0c"); //Display the session timer in greeen border
	}

	
	function breakTimer(){
	breakLen -=1;
	if(breakLen === 0){
	clearInterval(countBreak);
	}
	if(breakLen%60>=10){
      $("#session").html("Break  <br><br>" +Math.floor(breakLen/60)+":"+breakLen%60);
    }
    else{
      $("#session").html("Break  <br><br>" +Math.floor(breakLen/60)+":"+"0"+breakLen%60);
    }
	if(breakLen/60 > 59){
	var h =Math.floor(sessnLen/3600);
	var m =Math.floor(sessnLen%3600/60);
	var s=Math.floor(sessnLen%3600%60);
	  $("#session").html("Break  <br><br>" +(h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
	}
	$("#clock").css("box-shadow","inset 0 0 12px red"); //Display the session timer in red border
	}
}
function pause(){
clearInterval(countSessn);
clearInterval(countBreak);
}
function restart(){
clearInterval(countSessn);
clearInterval(countBreak);
}
function reseet(){
clearInterval(countSessn);
clearInterval(countBreak);
$("#session").html("Session <br><br> 25");
}
