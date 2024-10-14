/**
 * 
 */

// 'myButton'이라는 ID를 가진 버튼을 선택
const $myButton = document.querySelector('#myButton');

// 'myButton' 클릭 이벤트 핸들러
$myButton.addEventListener('click', function() {
    console.log('click'); // 버튼을 클릭했을 때 'click' 출력
});

// 마우스가 'myButton' 위로 들어갔을 때 실행되는 함수
const logMouseEnter = () => { console.log('들어감'); };

// 마우스가 'myButton'을 떠났을 때 실행되는 함수
const logMouseLeave = () => { console.log('나감'); };

// 'myButton'에 마우스 들어옴 이벤트 핸들러 추가
$myButton.addEventListener('mouseenter', logMouseEnter);

// 'myButton'에 마우스 나감 이벤트 핸들러 추가
$myButton.addEventListener('mouseleave', logMouseLeave);

// 'clickPosition'이라는 ID를 가진 요소를 선택
const clickPosition = document.querySelector('#clickPosition');

// 'clickPosition'을 클릭했을 때 발생하는 클릭 이벤트 로그
clickPosition.addEventListener('click', (e) => {
    console.log(e); // 클릭 이벤트 객체 출력
});

// 'clickPosition'을 클릭했을 때 x, y 좌표를 화면에 표시
clickPosition.addEventListener('click', (e) => {
    console.log(e); // 클릭 이벤트 객체 출력
    let text = 'x: ';
    text += e.clientX; // 클릭한 x 좌표 값 추가
    text += ' y: ';
    text += e.clientY; // 클릭한 y 좌표 값 추가
    clickPosition.textContent = text; // 좌표값을 화면에 표시
});

// 'myInput'이라는 ID를 가진 입력 필드 선택
const myInput = document.querySelector('#myInput');

// 입력 필드에 포커스 되었을 때 실행되는 함수
myInput.addEventListener('focus', () => {
    myInput.setAttribute('placeholder', '포커스 된 상태'); // 포커스 시 플레이스홀더 텍스트 변경
});

// 입력 필드에서 포커스가 벗어났을 때 실행되는 함수
myInput.addEventListener('blur', () => {
    myInput.setAttribute('placeholder', '블러 된 상태'); // 블러 시 플레이스홀더 텍스트 변경
});

// 입력 필드의 값이 변경되었을 때 실행되는 함수
myInput.addEventListener('change', (e) => {
    console.log(e.target.value); // 입력 필드의 값 출력
});

// 키를 눌렀을 때 실행되는 함수
myInput.addEventListener('keyup', (e) => {
    console.log(e.key); // 눌린 키 출력
});
