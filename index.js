var katzDeli = [];

function takeANumber(currentLine, name)
// The above code creates the main function and highlights the two main components - the current line and the queue joiners name
{
var placeInLine = currentLine.length + 1;
// This line calculates the place in the line for the new joiner

var outputString = “Welcome, ” + name +”. "You are number" ” + placeInLine + ” in line.”;
// This line defines the output sentence which will be returned when called, informing the recipient of their current place in the queue

currentLine.push(name);
// This line adds the current entrant to the line to the main retained listing

return outputString;
// This line returns the sentence specified above to inform individuals of their place in the queue.

}

function nowServing(currentLine){
var outputString;
if (currentLine.length === 0){
outputString = “There is nobody waiting to be served!”
}
else{
outputString = “Currently serving ” + currentLine[0] + “.”;
currentLine.shift();
}
return outputString;
}
// This function defines who is currently being served and outputs the fact that either no one waiting to be served or the name of the individual currently being served and their number in the queue.



function currentLine(line){
var outputString;
if (line.length === 0){
outputString = “The line is currently empty.”
}
else{
outputString = “The line is currently: ”
for(var i = 0; i < line.length ; i++){
if (i === 0){

outputString = outputString + (i+1) + “. ” + line[i];
}
else{
outputString = outputString + “, ” + (i+1) + “. ” + line[i];
}
}
}
return outputString;
}

// This set of code defines the length of the line as things stand. It counts up using a focussed numeric fucntion
