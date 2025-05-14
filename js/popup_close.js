var close_time; // 시간 정보
var close_time2 = 50; // 50초 설정
clearTimeout(close_time); // 재호출 정지
close_time = setTimeout(close_window, 50000); // 1/1000초 지정, 바로 시작
show_time(); // 실시간 시간 보여주기

function show_time(){
    let divClock = document.getElementById('Time');
    if(divClock) {
        divClock.innerText = close_time2 + "초 후 창이 닫힙니다";
    }
    close_time2--; // 1초씩 감소
    if(close_time2 >= 0) {
        setTimeout(show_time, 1000); //1초마다 갱신
    }
}

function close_window() { // 함수 정의
    window.close(); // 윈도우 닫기
}