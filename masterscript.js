$(document).ready(){};
$('#bClick').onclick(function()){
alert("you have clicked this button");
}
function timeServed()={
    var startTime= document.getElementById('hireDate').value;
    var today = new Date();
    var timeS = today - startTime;
    alert(timeS);
    
}

timeServed();
