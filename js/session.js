import { encrypt_text, decrypt_text } from './crypto.js';

export function session_set() { // 세션 저장
    let session_id = document.querySelector("#typeEmailX");
    let session_pass = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프

    // 올바른 변수 사용 (id.value → session_id.value)
    const obj = { // 객체 선언
        id: session_id.value,
        otp: random
    };

    if (sessionStorage) {
        const objString = JSON.stringify(obj); 
        let en_text = encrypt_text(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value); // 이메일(아이디) 저장
        sessionStorage.setItem("Session_Storage_object", objString);   // 객체 저장
        sessionStorage.setItem("Session_Storage_pass", en_text);       // 암호화된 패스워드 저장
    } else {
        alert("세션 스토리지 지원 x");
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
        location.href = 'index_login.html'; // 같은 폴더라면 이렇게, 상위폴더면 ../login/index_login.html
    }
}

export function session_del() {
    if (sessionStorage) {
        // 세션에 저장된 모든 항목 삭제 (로그아웃 처리)
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_object");
        sessionStorage.removeItem("Session_Storage_pass");
        alert("로그아웃 버튼 클릭 확인: 세션 스토리지를 삭제합니다.");
    } else {
        alert("세션 스토리지 지원 x");
    }
}
