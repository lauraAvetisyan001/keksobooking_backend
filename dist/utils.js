"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomIFractionalNumber = getRandomIFractionalNumber;
exports.getRandomIntegerNumber = getRandomIntegerNumber;
exports.shuffle = shuffle;
function getRandomIntegerNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
;
function getRandomIFractionalNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}