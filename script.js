"use strict";

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//   if (node.nodeName == '#text') {
//     continue;
//   }
//   console.log(node);
// }

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    console.log(e.changedTouches);
  });
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX);
  });
//   box.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     console.log('End');
//   });
});

// touches
// targetTouches
// changedTouches