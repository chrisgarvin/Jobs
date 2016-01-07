$(document).ready(function() {

  $('button').click(showJob());


  function showJob() {
    return function() {

      if($('input')[0].value == "</body>"){

      $.getJSON("data/data.json", function(data) {
        var job = $('select')[0].value;
        var url = data.response.jobs[job].url;
        console.log(data.response.jobs[job].title);
        window.open(url);
      });
    }
  }
  }

});
