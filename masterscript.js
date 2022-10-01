$(document).ready(function () {
    $('#fun').click(welcome);






});


function welcome() {

        $('.tabhid').show('swing');
        /*$('.into').hide('swing');*/
        st = '$';

        var difx = differential();
        var wage = $('#stuff').val();
        var ste = [2085.6, 2294.16, 2555, 3893.44];

        var multi = [1, 1.5, 0.5];
        var rates8 = [];
        var rates10 = [];
        var rates12 = [];
        var rates24 = [];
        var totals = [rates8, rates10, rates12, rates24];
        for (i = 0; i < 3; i++) {
            rates8[i] = rounder1(wage, ste[0], multi[i]);
            rates10[i] = rounder1(wage, ste[1], multi[i]);
            rates12[i] = rounder1(wage, ste[2], multi[i]);
            rates24[i] = rounder1(wage, ste[3], multi[i]);
        }
        rates8[3] = rounder2(rates8[0], 1, 1.5)
        rates10[3] = rounder2(rates10[0], 1, 1.65)
        rates12[3] = rounder2(rates12[0], 1, 1.75)
        rates24[3] = rounder2(rates24[0], 1, 2)



        var mod = ['r', 'ot', 'ho', 'p']
        for (t = 0; t < 4; t++) {
            $('#hr8' + mod[t]).text(st + totals[0][t]);
        }

        for (t = 0; t < 4; t++) {
            $('#hr10' + mod[t]).text(st + totals[1][t]);
        }

        for (t = 0; t < 4; t++) {
            $('#hr12' + mod[t]).text(st + totals[2][t]);
        }
        for (t = 0; t < 4; t++) {
            $('#hr24' + mod[t]).text(st + totals[3][t]);
        }

        function rounder1(w, s, m) {
            return Math.round(((w / s + difx)*m) * 100) / 100;
        }
        function rounder2(w, s, m) {
            return Math.round(((w / s)*m) * 100) / 100;
        }

       function differential() {
     var ftoo = document.getElementById('fto').checked;
     var leed = document.getElementById('lead').checked;
     var sup = document.getElementById('sup').checked;
     var night = document.getElementById('night').checked;
      if (ftoo&&leed&&night) {
          $('#tos').text('FTO');
          $('#lso').text('Lead');
          $('#ngt').text('Night');
          $('#pts').text('');

         return 7;
     }
     
     else if (leed&&night&&sup) {
         $('#lso').text('Lead');
         $('#ngt').text('Night');
         $('#pts').text('Pt Sup');
         $('#tos').text('');
         return 6;
     } 
     else if (leed&&sup) {
         $('#lso').text('Lead');
         $('#ngt').text('');
         $('#pts').text('Pt Sup');
         $('#tos').text('');
         return 5;
     }


    else if (leed&&night) {
         $('#lso').text('Lead');
         $('#ngt').text('Night');
	     $('#tos').text('');
         return 3;
     }
      else if (night&&sup) {
         $('#ngt').text('Night');
         $('#pts').text('Pt Sup');
         $('#tos').text('');
         return 4;
     }

      else if (leed&&ftoo) {
         $('#lso').text('Lead');
         $('#tos').text('FTO');
         $('#ngt').text('');
         $('#pts').text('');
        
         
         return 6;
     }  
     else if (ftoo&&night) {
         $('#lso').text('');
         $('#tos').text('FTO');
         $('#ngt').text('Night');
         $('#pts').text('');
        
         
         return 5;
     }  
     else if (leed) {
          $('#pts').text('');
         $('#tos').text('');
         $('#lso').text('Lead');
         $('#ngt').text('');

         return 2;
     }
      else if (sup) {
         $('#pts').text('Pt Sup');
         $('#tos').text('');
         $('#lso').text('');
         $('#ngt').text('');
         
         
         return 3;
     }
     else if (night) {
        $('#ngt').text('Night');
         $('#tos').text('');
         $('#lso').text('');
         $('#pts').text('');
        
         return 1;
     }



	else if (ftoo) {
	$('#tos').text('FTO');
	
	return 4;
	}       
	 else {
        $('#lso').text('');
         $('#ngt').text('');
         $('#pts').text(' ');
         $('#tos').text('');
         return 0;
     }

 }

    };



function timeServed(){
    var startTime= document.getElementById('hireDate').value;
    var today = new Date();
    var timeS = today - startTime;
    alert(timeS);}


function check(){

}
