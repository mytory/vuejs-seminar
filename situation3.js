document.querySelector('#form').addEventListener('submit', function (e) {
    console.log('e.preventDefault()로 submit의 기본 동작을 막습니다.');
    e.preventDefault();
});