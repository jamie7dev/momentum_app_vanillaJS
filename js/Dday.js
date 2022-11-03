const clockTitle = document.querySelector(".js-clock");

// const today = new Date();
// const christmas = new Date(2022, 12, 25);

// const gap = new Date(christmas - today);

// function Dday() {
//   const sec = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");
//   const min = String(Math.floor((sec / 60) % 60)).padStart(2, "0");
//   const hour = String(Math.floor((min / 60) % 24)).padStart(2, "0");
//   const day = String(Math.floor(hour / 60)).padStart(2, "0");


  
//   clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;  
// }

// Dday();
// setInterval(Dday, 1000);


//////////////////////////////정답 코드


const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//크리스마스 날짜를 얻기 위한 코드
//Date 함수는 기본적으로 초로 계산되지만, Date의 인수로 문자열을 전달하면 지정된 형태로 날짜와 시간을 반환함.
//템플릿 리터럴 사용
// console.log(xmasDay) //Sun Dec 25 2022 00:00:00 GMT+0900 (한국 표준시)


function getTime(){
  const now = new Date();
  //Date의 인수에 아무것도 적지 않으면 현재 시간 생성

  const difference = new Date(xmasDay - now);
  //Date함수로 생성한 Date 객체는 연산 가능

  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  //크리스마스까지 남은 일수, 시간, 분, 초를 계산해야 하므로 나머지 값 모듈러% 연산 사용

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);