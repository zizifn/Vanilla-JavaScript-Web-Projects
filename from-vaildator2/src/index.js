import { Test1 as Test } from './module/classTest.js'
import { checkEmail, checkPasswordsMatch, checkLength, checkRequired } from './checker.js'
// import checker from './checker.js'
import _ from 'lodash'
import './style.css'
import './style2.css'


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const loadash = document.getElementById('loadash');
const test = new Test("module test name")

//import as module not script
loadash.innerHTML = _.join(['webpack', 'loadash verrsion', _.VERSION], ' ');
loadash.innerHTML += test.Name;



// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }

});