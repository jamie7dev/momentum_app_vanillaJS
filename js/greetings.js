const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //convention string만 포함된 중요치 않은 변수는 대문자로 쓴다.

const USERNAME_KEY = "username";  //반복되는 값은 변수로 만들어줘야 오타가 났을 때 JS가 알려준다.

function onLoginSubmit(event){
  event.preventDefault(); //자동으로 새로고침되어 정보 날아가는 것 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);  //class추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; //string과 변수 합치는 두 가지 방법
  //후자가 새로운 방법 ${변수명}
  greeting.classList.remove(HIDDEN_CLASSNAME);  //그 클래스명만 삭제
  
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);  
}