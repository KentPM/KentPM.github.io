$( document ).ready(function() {
    console.log( "ready!" );


$( "#bClick" ).click(function() {
  alert( "Handler for .click() called." );
});




});



    



function timeServed(){
    var startTime= document.getElementById('hireDate').value;
    var today = new Date();
    var timeS = today - startTime;
    alert(timeS);}
