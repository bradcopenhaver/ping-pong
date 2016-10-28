$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputLimit = parseInt($("#inputLimit").val());
    var inputPing = parseInt($("#inputPing").val());
    var inputPong = parseInt($("#inputPong").val());

    var outputList = createList(inputLimit, inputPing, inputPong);

    $("#outputList").text(outputList);

  });
});

var createList = function(inputLimit, inputPing, inputPong) {
  var numberArray = [];

  for (var i=1; i<inputLimit+1; i++) {
    numberArray.push(i);
  }

  return numberArray.join(", ");
}
