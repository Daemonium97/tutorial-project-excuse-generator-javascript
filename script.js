let who = ['The dog', 'My grandma', 'His turtle', 'My bird'][Math.floor(Math.random() * who.lenght)];
let action = ['ate', 'peed', 'crushed', 'broke'] [Math.floor(Math.random() * action.lenght)];
let what = ['my homework', 'the keys', 'the car'][Math.floor(Math.random() * what.lenght)];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'][Math.floor(Math.random() * when.lenght)];


document.querySelector('#excuse').innerHTML = who + ' ' + action + ' ' + what + ' ' + when;
