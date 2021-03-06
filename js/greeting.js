
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const quotes_class = document.querySelector("#quotes");
const weather = document.querySelector("#weather");
const todoList = document.querySelector(".todo-module");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작을 막아줌 ex)submit시 브라우저 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    quotes_class.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${username}`;
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}