// // let john = {
// //     name: 'John Smith',  
// //     yearOfBirth: 1989,
// //     job: 'teacher'
// // }
// // class Person {
// //     constructor(name, yearOfBirth, job) {
// //         this.name = name;
// //         this.yearOfBirth = yearOfBirth;
// //         this.job = job;
// //     }
// // }
// // let john1 = new Person('John Smith', 1990, 'teacher')
// // let mary = new Person('Mary Lewis', 1999, 'waitress')
// // let mark = new Person('Mark Miller', 1984, 'retired')
// // Person.prototype.calculateAge = 
// //     function (){
// //     console.log(2020 - this.yearOfBirth)
// // }
// // john1.calculateAge();
// // mary.calculateAge()
// // mark.calculateAge()
// let a = 23
// let b = a
// a = 42
// console.log(a,b)
// let years = [1990,1995,2005,1985]
// function arrayCalc (arr, fn){
//     let arrRes = []
//     for (let i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes
// }
// function isFullAge(elem){
//     return elem >= 18
// }
// function calculateAge(num){
//     return 2020 - num; 
// }
// function maxHeartRate(elem){
//     if (elem >= 18 && elem <= 80){
//         return  Math.round(206.9 - (0.67 * elem))
//     } else {
//         return -1
//     }
// }
// let ages = arrayCalc(years, calculateAge)
// console.log(ages)
// let fullAge = arrayCalc(ages, isFullAge)
// console.log(fullAge)
// let heartRate = arrayCalc(ages, maxHeartRate)
// console.log(heartRate)
//////Function returns a Function/////
// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you explain what a UX designer does?')
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name){
//             console.log('Hello, ' + name + ' what do you do?')
//         }
//     }
// }
// let teacherQuestion = interviewQuestion('teacher')
// teacherQuestion('John')
// interviewQuestion('designer')('Joel')
// (function (goodLuck){
//     let score = Math.random * 10
//     console.log(score <= 5 - goodLuck);
// })(10);
/////////////////////////////////
////CLOSURES//////////
// function retirement(retirementAge){
//     let a = ' years left until retirement'
//     return function (yearOfBirth){
//         let age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }
// let retirementUS = retirement(66)
// retirementUS(1990)
// let retirementDE = retirement(65)
// retirementDE(1990)
// let retirementIS = retirement(67)
// retirementIS(1990)
// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you explain what a UX designer does?')
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name){
//             console.log('Hello, ' + name + ' what do you do?')
//         }
//     }
// }
// function interviewQuestion(job){
//     return function(name){
//         if(job === 'designer'){
//             console.log(name + ', can you explain what a UX designer does?')
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?')
//         } else {
//             console.log('Hello, ' + name + ' what do you do?')
//         }
//     }
// }
// interviewQuestion('designer')('Jane')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////   BINDS CALLS AND APPLY  /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let john = {
//     name: "John",
//     age: 26,
//     job: "teacher",
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log("Good " + timeOfDay + " ladies and gentlemen. My name is "
//             + this.name + ". I'm a " + this.job + ", and I'm " + this. age + " years old.")
//         } else if (style === 'friendly'){
//             console.log("Hey, good " + timeOfDay + " I'm " + this.name + " and I'm a " + this.age + " year old " + this.job + ".")
//         }
//     }
// }
// john.presentation('formal', 'morning')
// john.presentation('friendly', 'afernoon')
// let emily = {
//     name: 'Emily',
//     age: 33,
//     job: 'astronaut'
// }
// john.presentation.call(emily, 'formal', 'afternoon')
// let johnFriendly = john.presentation.bind(john, 'friendly')
// johnFriendly('evening')
// let emilyFormal = john.presentation.bind(emily, 'formal')
// emilyFormal('morning')
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////          CODING CHALLENGE 7            /////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// class Question {
//     constructor(_question, answer, correct) {
//         this._question = _question,
//         this.answer = answer,
//         this.correct = correct
//     }
// }



// numberOne = new Question('The sky is blue', ['Yes', 'No'], 0)
// numberTwo = new Question('Firetrucks are green', ['Yes', 'No'], 1)
// numberThree = new Question('Ellie is the cutest!', ['Yes', 'No'], 0)

// let questionArr = [numberOne, numberTwo, numberThree]



// function next (arr){
//     let q = arr[Math.floor(Math.random() * arr.length)]
//     console.log(q._question)
//     let userAns = prompt('0 for "Yes", 1 for "No"')
//     if(userAns === '0'){
//         console.log('That is correct')
//     } else {
//         console.log('Sorry, that is wrong')
//     }
// }

// next(questionArr)









//////////////their way

let score = 0

class Question {
    constructor(_question, answer, correct) {
        this._question = _question,
        this.answer = answer,
        this.correct = correct
    }
}

Question.prototype.displayQuestion = function() {
    console.log(this._question)

    for (let i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i])
    }
}

Question.prototype.checkAnswer = function(ans){
    
    ans === this.correct ? console.log('That is correct!', ++score) : console.log('I am sorry, that is wrong.', --score)
    
}


numberOne = new Question('The sky is blue', ['Yes', 'No'], 0)
numberTwo = new Question('Firetrucks are green', ['Yes', 'No'], 1)
numberThree = new Question('Ellie is the cutest!', ['Yes', 'No'], 0)

let questionArr = [numberOne, numberTwo, numberThree]






// 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

// 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

// 11. Display the score in the console. Use yet another method for this.



function nextQuestion(){

    let q = Math.floor(Math.random() * questionArr.length) 
    
    questionArr[q].displayQuestion()
    
    let userAnswer = prompt('Please select "0" for "Yes" or select "1" for "No".')
    
    if(userAnswer !== 'exit'){
        questionArr[q].checkAnswer(parseInt(userAnswer))
        nextQuestion()
    }
    

}


// nextQuestion()