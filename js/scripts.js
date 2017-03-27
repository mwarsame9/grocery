$(document).ready(function() {
  $("#favForm").submit(function(event) {
    var movieInput = $("input#movie").val();
    var iceCreamInput = $("input#iceCream").val();
    var colorInput = $("input#color").val();
    var carInput = $("input#car").val();
    var drinkInput = $("input#drink").val();
    var placeInput = $("input#place").val();

    $(".movie").text(movieInput);
    $(".iceCream").text(iceCreamInput);
    $(".color").text(colorInput);
    $(".car").text(carInput);
    $(".drink").text(drinkInput);
    $(".place").text(placeInput);


    $("#result").show();

    event.preventDefault();

  });

});
