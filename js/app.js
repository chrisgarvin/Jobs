$(document).ready(function() {

  $('select').change(function(){
    if($('select')[0].value == 1){
      $('.API').show();
    } else {
      $('.API').hide();
    }
  })

  //Upon clicking the submit button, run showJob

  $('button').click(showJob());


  //showJob returns a function that based on the value of the dropdown
  //and if the code was 'fixed' properly, it will redirect user to job description
  //page, else alerts syntax error prompt

  function showJob() {
    return function() {

      if ($('input')[0].value == "</body>") {

        $.getJSON("data/data.json", function(data) {
          var job = $('select')[0].value;
          var url = data.response.jobs[job].url;
          console.log(data.response.jobs[job].title);
          window.open(url);
        });
      } else {
        alert("syntax error");
      }
    }
  }

});
