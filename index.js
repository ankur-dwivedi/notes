// ready function used when linking is done in head section
//
// $(document).ready(function (){
//   $("h1").css("color","red");
// });



// $("h1").css("color","red");
$("h1").addClass("big-title margin50");
$("h1").text("Ankur");
$("h1").html("<em>Ankur<em>");
$("h1").click(function() {
  $("h1").css("color", "purple");
});
var a = "";
$(document).keypress(function(event) {
  if (event.key == "Enter") {
    a = "";
    $("h1").text(a);
  } else {
    a = a + event.key;
    $("h1").text(a);
  }
});

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "yellow");
// });
// $("h1").on("mouseout", function() {
//   if($("h1").css("color")!="purple")
//   $("h1").css("color", "orange");
// });
