$(document).ready(function() {

//updates page if user changes ID to APIProductManager or ProductDesigner

  $('select').change(function(){
    if($('select')[0].value == 1){
      $('.css').hide();
      $('.API').show();
    } else if($('select')[0].value == 2){
      $('.API').hide();
      $('.css').show();
    }
  })

//checks to see if visitor clicks enter key

  $("#css_submit").keyup(function(event){
    if(event.keyCode == 13){

//changes background-color of page based on user input

      $('body').css('background-color', $("#css_submit")[0].value);

    }
  })

//checks to see if visitor clicks enter key

  $("#api_submit").keyup(function(event){
    if(event.keyCode == 13){

//if text box value is response.info[0].goal, greets user

        if($("#api_submit")[0].value == "response.info[0].goal"){
          console.log("Greet me.");
          console.log("Well hello human, at least I assume you're human?");

//if text box value is response.info[1].goal, shows user link to job description

        } else if($("#api_submit")[0].value == "response.info[1].goal") {
          console.log("Show me the API Product Manager job description.");
          console.log("Hi there, we'd love to meet you! " + "https://jobs.lever.co/chain/c140624a-6dc5-4924-8742-2c1ed6e52d49");

//if text box value is response.info[2].goal, 'rolls the dice'

        } else if($("#api_submit")[0].value == "response.info[2].goal") {
          console.log("Roll the dice.");
          console.log(".................................................. ............................... .......,-~~'''''''~~--,,_");
          console.log(".................................................. ..................................,-~''-,:::::::::::::::::::''-,");
          console.log(".................................................. .............................,~''::::::::',::::::: :::::::::::::|',");
          console.log(".................................................. .............................|::::::,-~'''___''''~~--~''':}");
          console.log(".................................................. .............................'|:::::|: : : : : : : : : : : : : : :|");
          console.log(".................................................. .............................|:::::|: : :-~~---: : : -----: |");
          console.log(".................................................. ............................(_''~-': : : :o: : :|: :o: : : :|");
          console.log(".................................................. .............................'''~-,|: : : : : : ~---': : : :,'--NEVA GAHN");
          console.log(".................................................. .................................|,: : : : : :-~~--: : ::/ ----- GIVE YOU UHP");
          console.log(".................................................. ............................,-''\':\: :'~,,_: : : : : _,-'");
          console.log(".................................................. ......................__,-';;;;;\:''-,: : : :'~---~''/|");
          console.log(".................................................. .............__,-~'';;;;;;/;;;;;;;\: :\: : :____/: :',__");
          console.log(".................................................. .,-~~~''''_;;;;;;;;;;;;;;;;;;;;;;;;;',. .''-,:|:::::::|. . |;;;;''-,__");
          console.log("................................................../;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;\. . .''|::::::::|. .,';;;;;;;;;;''-,");
          console.log("................................................,' ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;\. . .\:::::,'. ./|;;;;;;;;;;;;;|");
          console.log(".............................................,-'';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;;;;',: : :|__|. . .|;;;;;;;;;,';;|");
          console.log("...........................................,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',;;;;;;;;;;; \. . |:::|. . .'',;;;;;;;;|;;/");
          console.log("........................................../;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;;;;\;;;;;;;; ;;;\. .|:::|. . . |;;;;;;;;|/");
          console.log("......................................../;;,-';;;;;;;;;;;;;;;;;;;;;;,';;;;;;;;;;;;;;;;;,;;;;;;; ;;;|. .\:/. . . .|;;;;;;;;|");
          console.log("......................................./;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;'',: |;|. . . . \;;;;;;;|");
          console.log("....................................,~'';;;;;;;;;; ;;;;;;;;;;;,-'';;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;|.|;|. . . . .|;;;;;;;|");
          console.log("................................,~'';;;;;;;;;;;;;; ;;;;;;;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',;;;;;;| |:|. . . . |\;;;;;;;|");
          console.log("...............................,';;;;;;;;;;;;;;;;; ;;;;;;;/;;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;| |:|. . . .'|;;',;;;;;|");
          console.log("..............................|;,-';;;;;;;;;;;;;;;;;;;,-';;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;| |:|. . .,';;;;;',;;;;|_");
          console.log("............................../;;;;;;;;;;;;;;;;;,-'_;;;;;;,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;; ;|.|:|. . .|;;;;;;;|;;;;|''''~-,");
          console.log("............................/;;;;;;;;;;;;;;;;;;/_'',;;;,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ,;;| |:|. . ./;;;;;;;;|;;;|;;;;;;|-,,__");
          console.log("........................../;;;;;;;;;;;;;;;;;,-'...|;;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;| |:|._,-';;;;;;;;;|;;;;|;;;;;;;;;;;'''-,_");
          console.log("......................../;;;;;;;;;;;;;;;;,-'....,';;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;|.|:|::::'''~--~'''||;;;;;|;;;;;;;;;;,-~''''~--,");
          console.log("......................,';;;;;;;;;;;;;;;;,'....../;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;|.|:|::::::::::::::|;;;;;',;;;;;;;;;''-,: : : : : :'''~-,:'''~~--,");
          console.log("...................../;;;;;;;;;;;;;;;,-'......,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;|:|:|::::::::::::::',;;;;;;|_''''~--,,-~---,,___,-~~''");
          console.log("");
          console.log(".................................................. ............................... .......,-~~'''''''~~--,,_");
          console.log(".................................................. ..................................,-~''-,:::::::::::::::::::''-,");
          console.log(".................................................. .............................,~''::::::::',::::::: :::::::::::::|',");
          console.log(".................................................. .............................|::::::,-~'''___''''~~--~''':}");
          console.log(".................................................. .............................'|:::::|: : : : : : : : : : : : : : :|");
          console.log(".................................................. .............................|:::::|: : :-~~---: : : -----: |");
          console.log(".................................................. ............................(_''~-': : : :o: : :|: :o: : : :|");
          console.log(".................................................. .............................'''~-,|: : : : : : ~---': : : :,'--NEVA GAHN");
          console.log(".................................................. .................................|,: : : : : :-~~--: : ::/ ----- LET U DWN");
          console.log(".................................................. ............................,-''\':\: :'~,,_: : : : : _,-'");
          console.log(".................................................. ......................__,-';;;;;\:''-,: : : :'~---~''/|");
          console.log(".................................................. .............__,-~'';;;;;;/;;;;;;;\: :\: : :____/: :',__");
          console.log(".................................................. .,-~~~''''_;;;;;;;;;;;;;;;;;;;;;;;;;',. .''-,:|:::::::|. . |;;;;''-,__");
          console.log("................................................../;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;\. . .''|::::::::|. .,';;;;;;;;;;''-,");
          console.log("................................................,' ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;\. . .\:::::,'. ./|;;;;;;;;;;;;;|");
          console.log(".............................................,-'';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;;;;',: : :|__|. . .|;;;;;;;;;,';;|");
          console.log("...........................................,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',;;;;;;;;;;; \. . |:::|. . .'',;;;;;;;;|;;/");
          console.log("........................................../;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;;;;\;;;;;;;; ;;;\. .|:::|. . . |;;;;;;;;|/");
          console.log("......................................../;;,-';;;;;;;;;;;;;;;;;;;;;;,';;;;;;;;;;;;;;;;;,;;;;;;; ;;;|. .\:/. . . .|;;;;;;;;|");
          console.log("......................................./;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;'',: |;|. . . . \;;;;;;;|");
          console.log("....................................,~'';;;;;;;;;; ;;;;;;;;;;;,-'';;;;;;;;;;;;;;;;;;;;;;;;;;\;;;;;;;;|.|;|. . . . .|;;;;;;;|");
          console.log("................................,~'';;;;;;;;;;;;;; ;;;;;;;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',;;;;;;| |:|. . . . |\;;;;;;;|");
          console.log("...............................,';;;;;;;;;;;;;;;;; ;;;;;;;/;;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;| |:|. . . .'|;;',;;;;;|");
          console.log("..............................|;,-';;;;;;;;;;;;;;;;;;;,-';;;,-';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;| |:|. . .,';;;;;',;;;;|_");
          console.log("............................../;;;;;;;;;;;;;;;;;,-'_;;;;;;,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;; ;|.|:|. . .|;;;;;;;|;;;;|''''~-,");
          console.log("............................/;;;;;;;;;;;;;;;;;;/_'',;;;,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ,;;| |:|. . ./;;;;;;;;|;;;|;;;;;;|-,,__");
          console.log("........................../;;;;;;;;;;;;;;;;;,-'...|;;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;| |:|._,-';;;;;;;;;|;;;;|;;;;;;;;;;;'''-,_");
          console.log("......................../;;;;;;;;;;;;;;;;,-'....,';;,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;|.|:|::::'''~--~'''||;;;;;|;;;;;;;;;;,-~''''~--,");
          console.log("......................,';;;;;;;;;;;;;;;;,'....../;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;|.|:|::::::::::::::|;;;;;',;;;;;;;;;''-,: : : : : :'''~-,:'''~~--,");
          console.log("...................../;;;;;;;;;;;;;;;,-'......,';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ;;;;;;;;;;;;|:|:|::::::::::::::',;;;;;;|_''''~--,,-~---,,___,-~~''");
          console.log("---");
          console.log("");
          console.log(".................................................. ............................... .......,-~~'''''''~~--,,_");
          console.log(".................................................. ..................................,-~''-,:::::::::::::::::::''-,");
          console.log(".................................................. .............................,~''::::::::',::::::: :::::::::::::|',");
          console.log(".................................................. .............................|::::::,-~'''___''''~~--~''':}");
          console.log(".................................................. .............................'|:::::|: : : : : : : : : : : : : : :|");
          console.log(".................................................. .............................|:::::|: : :-~~---: : : -----: |");
          console.log(".................................................. ............................(_''~-': : : :o: : :|: :o: : : :|");
          console.log(".................................................. .............................'''~-,|: : : : : : ~---': : : :,'--NEVA GAHN TURN AHROUND");
          console.log(".................................................. .................................|,: : : : : :-~~--: : ::/ ----- AND DESERT U");
          console.log(".................................................. ............................,-''\':\: :'~,,_: : : : : _,-'");
          console.log(".................................................. ......................__,-';;;;;\:''-,: : : :'~---~''/|");
          console.log(".................................................. .............__,-~'';;;;;;/;;;;;;;\: :\: : :____/: :',__");
          console.log(".................................................. .,-~~~''''_;;;;;;;;;;;;;;;;;;;;;;;;;',. .''-,:|:::::::|. . |;;;;''-,__");
          console.log("................................................../;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;;;;;;;;;\. . .''|::::::::|. .,';;;;;;;;;;''-,");
          console.log("................................................,' ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;|;;;;;;;;;;;\. . .\:::::,'. ./|;;;;;;;;;;;;;|");
        } else {
          console.log($('#api_submit')[0].value);
        }
    }
});

});
