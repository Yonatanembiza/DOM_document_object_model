// add elements to the body from javascript 
// div, p, and text

let divE = document.createElement('div');
let pE = document.createElement('p');
let textE = document.createTextNode("It is P tag");

pE.appendChild(textE);
divE.appendChild(pE);
document.body.appendChild(divE);

// const divElement = document.createElement('div');

// // Create a p element
// const pElement = document.createElement('p');

// // Create a text node
// const textNode = document.createTextNode('Your text goes here');

// // Append the text node to the p element
// pElement.appendChild(textNode);

// // Append the p element to the div element   
// divElement.appendChild(pElement);

// // Append the div element to the body
// document.body.appendChild(divElement);

console.dir(document.body.children)