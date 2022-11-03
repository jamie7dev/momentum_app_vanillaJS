const clock = document.querySelector("h2#clock");


// function sayHello() {
//   console.log("hello");
// }


// setInterval(sayHello, 5000); //몇 초 간격으로 함수 반복 실행
//실행하고자 하는 함수
//몇 초 간격으로 할지 (ms밀리세컨드)
// sayHello(); //즉시 실행
// setTimeout(sayHello, 5000); //몇 초 후에 함수 한 번 실행



// const date = new Date();
// date.getDate(); //일
// date.getDay();  //요일(인덱스로)
// date.getHours(); // 시
// date.getMinutes();  //분
// date.getSeconds();  //초

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
getClock();   //website가 load되자마자 getClock()즉시 호출 (없으면 1초 후부터 실행되므로)
setInterval(getClock, 1000);

// function sayHello() {
//   clock.innerText = new Date().toLocaleTimeString();  //오후 10:28:25
//   console.log(new Date().toLocaleDateString()); //2022년 11월 2일 수요일
//   console.log(new Date().toLocaleString()); //2022년 11월 2일 수요일 
// }
// sayHello()
// setInterval(sayHello, 1000);

