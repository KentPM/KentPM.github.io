$(document).ready(function () {
    welcome();

    
  



});


function welcome() {
    $('#fun').click(function () {
        $('td').show('swing');
        $('.into').hide('swing');
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
            return Math.floor(((w / s + difx)*m) * 100) / 100;
        }
        function rounder2(w, s, m) {
            return Math.floor(((w / s)*m) * 100) / 100;
        }
        
       function differential() {
     var ftoo = document.getElementById('fto').checked;
     var leed = document.getElementById('lead').checked;
      if (ftoo&&leed) {
          $('#tos').text('FTO');
          $('#lso').text('Lead');
         return 1.85;
     } else if (leed) {
         $('#lso').text('Lead')
         return 0.7;
     } else {
         $('#tos').text('None');
         return 0;
     }
     
 }  

    });
}



function timeServed(){
    var startTime= document.getElementById('hireDate').value;
    var today = new Date();
    var timeS = today - startTime;
    alert(timeS);}


function check(){
    
}

