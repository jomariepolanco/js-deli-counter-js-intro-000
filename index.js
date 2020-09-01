function takeANumber(katzDeliLine,name) {
//push name into line number
  katzDeliLine.push(name);
//return welcome message
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
//if-else statements
  if (katzDeliLine.length > 0) {
//return first person in line destructively so it also removes that individual from line
    return `Currently serving ${katzDeliLine.shift(name)}.`;
  } else {
//if there is nobody, return "There is nobody waiting to be served!"
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
//define new array
var newArray = [];
//if else statements
if (katzDeliLine.length > 0) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    newArray += (i+1) + ". " + katzDeliLine[i] + ", ";
  }
  newArray = newArray.slice(0,newArray.length - 2);
  return "The line is currently: " + newArray;
}
//return current line as a string. "The line is currently: 1. name, 2. name"
//else if nobody in line, should return "The line is curently empty"
else {
  return "The line is currently empty."
}
}
