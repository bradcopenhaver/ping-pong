$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputLimit = parseInt($("#inputLimit").val());
    var inputPing = parseInt($("#inputPing").val());
    var inputPong = parseInt($("#inputPong").val());

    var outputString = createList(inputLimit, inputPing, inputPong);
    var outputPane = easterEgg(inputLimit);

    $("#outputList").text(outputString);
    $("#pregame").hide();
    $(outputPane).show();
  });
});
////////////////
var createList = function(inputLimit, inputPing, inputPong) {
  //Input validation
  if (inputLimit === 0){
    return "A game to zero is not a game at all! Try playing to a higher number."
  }
  else if (inputLimit < 0) {
    return "You can't play to a negative number! Try a positive number."
  }
  else {
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
}
//Check for special values and display different outputs
var easterEgg = function(input) {
  if (input === -1337){
    return "#cats";
  }
  if (input === -117){
    return "#halo";
  }
  else {
    return "#output";
  }
}
