const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");  //todoForm안에서 input찾기
//const todoInput = document.querySelector("#todo-form input")과 같다.
const todoList = document.getElementById("todo-list");

let todos = [];

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(todos)); //key: todos, value: array안에 들어오는 문자열
  //Json.stringify 어떤 Javascript 코드든 string으로 만들어 준다.
  //값을 string으로 저장하고 싶을 때 사용 (localStorage에 array 저장 불가)
  //Json.parse("[1, 2, 3, 4]")//[1, 2, 3, 4] JS가 이해할 수 있는 array로 변경
}

function deleteTodo(event){
  const li = event.target.parentElement;  //html li 삭제 => 화면에서 지우기
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));  //선택한 id만 삭제
  saveTodos();  //삭제하고 다시 만들어진 todos를 localStorage에 저장해줘야 함.
}


function paintTodo(newTodo){
  //화면에 TODO 그려주는 함수
  // console.log("I will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id; //html li에도 id 추가 (삭제에 사용할 것)
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}


function handleTodoSubmit(event){
  event.preventDefault();
  // console.log(todoInput.value);
  const newTodo = todoInput.value;//입력된 값을 newTodo에 복사해서 저장해 놓는 것
  todoInput.value = ""; //엔터 친 후 인풋창 비워주기 <- newTodo에는 이미 저장되어 있으므로 그 이후에 바꾸는 건 상관없음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),   //id를 랜덤으로 주기 위해 밀리초 사용
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj); //newTodo를 paintTodo에 보내주는 작업
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem("todos");
// console.log(savedTodos);
if(savedTodos){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;  //빈 array에 추가해줘서 새로고침한 후 다시 입력해도 덮어쓰기가 아님. 이전 todo 복원
  // console.log(parsedTodos);
  parsedTodos.forEach(paintTodo);  
  //.forEach() 각각의 item에 대해 적용해주는 함수 // map함수구나
}

