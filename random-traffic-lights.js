import ac from 'ansi-colors';

const colourCodes = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'grey',
];

const randomColour = function() {

  return colourCodes[Math.floor(Math.random() * colourCodes.length)];
}

const randomTrafficLights = function(s) {

  console.log(ac[randomColour()](s));
  console.log(ac[randomColour()](s));
  console.log(ac[randomColour()](s));
}

export { randomTrafficLights };

export default randomTrafficLights;