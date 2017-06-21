var obj;
$(document).ready(function() {
  $.getJSON("https://private-f3b4b-interview2.apiary-mock.com/data", function(data) {
    // var items = [];
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];

      console.log(obj.name);
      console.log(obj.timestamp);
      console.log(obj.image);
      console.log(obj.secret);
      // for (var i in data){
      //   $("#users").append("<li id='" + obj.secret + "' class='col-xs-12 col-sm-6 col-md-8'>"+obj.name+"</li>")
      // }
      data.forEach(function(){
      // for (var i in data) {
        $("#users").append("<li id='" + obj.secret + "' class='profiles'><img class='profile-picture' src='" + obj.image + "' ><h2 class='user_name'>" + obj.name + "</h2><br/><h2 class='timestamp'></h2></li>")
      });

    }
  });
});
