function scuberGreetingForFeet(feetToGo){
  if (feetToGo <= 400) {
    return 'This one is on me!';
  }
  else if (feetToGo > 400 && feetToGo <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feetToGo > 2000 && feetToGo <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (feetToGo > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destinationCity){
  return destinationCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(levelOfCharm){
  if (levelOfCharm === 'generous') {
    return 'Thank you so much.';
  }
  else if (levelOfCharm === 'not as generous') {
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}