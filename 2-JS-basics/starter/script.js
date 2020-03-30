let johnMass = 10;
let markMass = 12;
let johnHeight = 2;
let markHeight = 3;

let johnBMI = johnMass / (johnHeight*johnHeight);
let markBMI = markMass / (markHeight*markHeight);

let johnMark = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s?' + johnMark);