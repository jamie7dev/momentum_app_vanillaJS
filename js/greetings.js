const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");


const HIDDEN_CLASSNAME = "hidden";  //convention string만 포함된 중요치 않은 변수는 대문자

const USERNAME_KEY = "username";  //반복되는 값은 변수로 만들 것

function onLoginSubmit(event){
  event.preventDefault(); //자동으로 새로고침되어 정보 날아가는 거 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);  
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username){
  //string과 변수 합치는 두 가지 방법
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello, ${username}`; //좋은 방법 ${변수명}
  
  greeting.classList.remove(HIDDEN_CLASSNAME);  
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

function onLogoutSubmit(){
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}
logoutForm.addEventListener("submit", onLogoutSubmit);