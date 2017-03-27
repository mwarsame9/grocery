// $(document).ready(function() {
//   $("#groceryForm").submit(function(event) {
//     var items = ["item1", "item2", "item3", "item4", "item5"];
//
//     var alpha = items.map(function(word) {
//       return words * 2
//     });
//
//     // var item1Input = $("input#item1").val();
//     // var item2Input = $("input#iceCream").val();
//     // var item3Input = $("input#color").val();
//     // var item4Input = $("input#car").val();
//     // var item5Input = $("input#drink").val();
//     // var favorites = [item1Input, item2Input, item3Input, item4Input, item5Input]
//
//     //
//     // // var cloneArray = favorites.slice();
//     // var newArray = [];
//     // newArray.push(favorites[2],favorites[0],favorites[3]);
//     //
//     // console.log(newArray);
//
//
//
//     $(".li1").text(items[0]);
//     $(".li2").text(items[1]);
//     $(".li3").text(items[2]);
//
//
//
//     event.preventDefault();
//
//   });
//
// });

$(document).ready(function(){
  $("#groceryForm").submit(function(e) {
    var words = ["item1", "item2", "item3", "item4", "item5"];
    words.sort();
    // words.forEach(function(word) {
    //   var userInput = $("input#" + word).val();
    //     $("." + word).text(userInput);
    });

    var alpha = words.sort();
      $(alpha).text()
    //
    // var person1Input = $("#person1").val();
    // var person2Input = $("#person2").val();
    // var animalInput = $("#animal").val();
    // var exclamationInput = $("#exclamation").val();
    // var verbInput = $("#verb").val();
    // var nounInput = $("#noun").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    // $("#story").show();
    e.preventDefault();
  });

});
