$(document).ready(function(){
  $("#myForm").submit(function(event){

    var iceCreams = ["Chocolate", "Vanilla", "Americone Dream", "Mint Chocolate Chip", "Cookie Dough", "Mud"];

    iceCreams.forEach(function(iceCream){
      $("#flavorList").append("<li>" + iceCream + "</li>");
    });

    event.preventDefault();
  });
});
