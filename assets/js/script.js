var obj;
$(document).ready(function() {
  $.getJSON("https://private-f3b4b-interview2.apiary-mock.com/data", function(data) {
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];

      console.log(obj.name);
      console.log(obj.timestamp);
      console.log(obj.image);
      console.log(obj.secret);
    }

    data.forEach(function(e) {
      // for (var i in data) {
      $("#users").append("<li class='col-xs-12 col-sm-6 col-md-8 profile' id='" + e.secret + "' class='profiles'><img class='profile-picture' src='" + e.image + "' ><h1 class='user_name'>" + e.name + "</h1><p class='timestamp'>" + getDateFormat(obj.timestamp) + "</p></li>")
    });
    $('.profile').click(function(e) {
      var color = $(this).attr('id');
      $('.secret').css('background-color', color);
      console.log(color);
    });
    $('#clear').click(function(e){
      $('.secret').css("background-color", "#FFFFFF")
    });
  });

  function getDateFormat(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    var date = new Date();
    date.toLocaleDateString();

    return [day, month, year].join('/');
  };
});
