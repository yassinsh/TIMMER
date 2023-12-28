
// let firstName = "fathi"
// let lastName = "smith"
// let age = 36
// let Name
// Name = (firstName + ' ' + lastName)
// console.log(Name, age)
// document.log
// //     `  <li> the name is ${firstName}</li>
// // <li>the last name is ${lastName}</li>
// // <li> the age ${age}</li>`
// document.log(`my name is  ${Name} +  my age is ${age}`)
// let mixed = [1, 2, false, 'fathi']
// mixed.unshift(90)
// mixed.push(36)
// mixed.shift()
// mixed.pop()
// mixed.push(36)
// mixed.splice(3, 1)
// mixed.reverse(2, 3)
// let number = [1, 10, 20, 200, 105, 200, 9]
// arr2 = number.sort()

// console.log(mixed)
// const person = {
//     name: "yassin",
//     lastname: "shaereah",
//     age: 29,
//     hobbies: ["swiming", "coding"],
//     address: {
//         city: "damascus",
//         country: "syria",
//     }
// };
// console.log(person.lastname)
// console.log(person.hobbies[0])
// console.log(person.address.city)
//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element)

// }
// console.log(fruits);



// const todos = [
//     {
//         id: 1,
//         Text: 'take out trash',
//         iscomplete: false
//     },
//     {
//         id: 2,
//         Text: 'do home work',
//         iscomplete: false
//     },
//     {
//         id: 3,
//         Text: 'go to google',
//         iscomplete: true
//     },
// ]
// console.log(todos[1].Text);
// console.log(JSON.stringify(todos))
// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i];
//     console.log(todos[i])

// }
// res = Math.ceil(Math.random() * 20);

// // Output
// console.log(res);

// const todos = [
//     { id: 1, text: 'Take out trash', isComplete: false },
//     { id: 2, text: 'Do Homework for course', isComplete: false },
//     { id: 3, text: 'Google about JS', isComplete: true }];
// for (let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1} + ${todos[i].text}`)
// }
// color = 'blue';
// switch (color) {
//     case 'red':
//         console.log('color is red');
//     // break;
//     case 'blue':
//         console.log('color is blue');
//     // break;
//     default:
//         console.log('color is not red or blue');
//     // break;
// }
// function number(num1) {
//     if (num1 / 2 == 0) {
//         return "even"
//     }
//     else {
//         return "even"
//     }
// }
// const greater = (a, b) => { return a > b ? a : b }
// const randoum = (x) => {

// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let fullName = 'Mr: Fathi Smith'
// for (let iterator of fullName) {
//     console.log(iterator);
// }

// let i = 10
// do {
//     console.log(`the number is: ${i}`);
//     i++
// }
// while (i < 10)

// color = 'blue';
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }
// let random = () => { return Math.floor(Math.random() * 20) }
// console
//     .log
//     (random());
// x = 7
// y = 5
// const greater = (x, y) => { return (x > y) ? x : y }
// console.log(greater);




// val = document.querySelectorAll(".item");
// for (let i = 0; i < val.length; i++) {
//     const element = val[i];
//     element.style.fontSize = `${i + 1}rem`
//     element.style.color = "red";
// }
// console.log(val)







// let startTime;
// let stopwatchInterval;

// function startStopwatch() {
//     startTime = new Date().getTime();
//     stopwatchInterval = setInterval(updateStopwatch, 1000);
// }

// function updateStopwatch() {
//     const currentTime = new Date().getTime();
//     const elapsedTime = currentTime - startTime;

//     const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

//     document.getElementById("stopwatch").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
// }

// function formatTime(time) {
//     return time < 10 ? "0" + time : time;
// }

// function stopStopwatch() {
//     clearInterval(stopwatchInterval);
// }

// function resetStopwatch() {
//     clearInterval(stopwatchInterval);
//     document.getElementById("stopwatch").textContent = "00:00:00";
// }

// function padTime(time) {
//     return time.toString().padStart(2, '0');
// }
// Update every 10 milliseconds



const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime, elapsedTime = 0, timerId;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerId = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    clearInterval(timerId);
    elapsedTime = 0;
    timerElement.textContent = '0: 0: 0';
}

function updateTimer() {

    elapsedTime = Date.now() - startTime;
    const formattedTime = formatTime(elapsedTime);
    timerElement.textContent = formattedTime;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return (`${(minutes)} :${(seconds)}:${(milliseconds)}`);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
