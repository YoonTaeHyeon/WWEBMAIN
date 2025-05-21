import { encrypt_text, decrypt_text } from './crypto.js';

export function session_set() { // 세션 저장
    let session_id = document.querySelector("#typeEmailX");
    let session_pass = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
    const obj = { // 객체 선언
    id : id.value,
    otp : random
    }

    if (sessionStorage) {
        const objString = JSON.stringify(obj); 
        let en_text = encrypt_text(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value); // <- 키 이름 통일
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

export function session_get() { // 세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

export function session_check() { // 세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html';
    }
}
function session_del(){
    if(sessionStorage){
        sessionStorage.removeItem("Session_Storage_test");
        alert("로그아웃 버튼 클릭 확인: 세션 스토리지를 삭제합니다.");
    } else{
        alert("세션 스토리지 지원 x");
    }
}
