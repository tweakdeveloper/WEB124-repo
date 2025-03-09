/*
 * Nicola Clark
 * 09MAR25
 */

let myName = 'Nicola Clark';
let para1 = document.getElementById('p1');
para1.textContent = myName;

let n1 = 2;
let n2 = 13;
let numberSum = n1 + n2;
document.getElementById('p2').textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById('p3').textContent = numberMult;

let myNameAddNum = myName + n1;
document.getElementById('p4').textContent = myNameAddNum;

let myNameMultNum = myName * n2;
document.getElementById('p5').textContent = myNameMultNum;

let ageCompare = 25 <= numberMult;
document.getElementById('p6').textContent = ageCompare;
