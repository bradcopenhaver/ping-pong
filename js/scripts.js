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

//Populate the array.
  for (var i=0; i<inputLimit+1; i++) {
    numberArray.push(i);
  }

//Clear ping and pong multiples.
  for (var i=inputPing; i<numberArray.length; i+=inputPing){
    numberArray[i] = "";
  }
  for (var i = inputPong; i<numberArray.length; i+=inputPong){
    numberArray[i] = "";
  }

//Populate pings and pongs.
  for (var i=inputPing; i<numberArray.length; i+=inputPing){
    numberArray[i] += "ping";
  }
  for (var i=inputPong; i<numberArray.length; i+=inputPong){
    numberArray[i] += "pong";
  }

//Remove zero and return string.
  numberArray.shift();
  return numberArray.join(", ");
}
