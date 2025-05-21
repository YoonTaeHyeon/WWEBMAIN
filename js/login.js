import { session_set, session_get, session_check } from './session.js';
import { encrypt_text, decrypt_text } from './crypto.js';
import { generateJWT, checkAuth } from './jwt_token.js';


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


// DOM이 완전히 로드된 후 초기화만 실행
document.addEventListener('DOMContentLoaded', () => {
    init();       // ✅ checkAuth 제거됨
});

// 아이디 저장 등 초기 설정 함수
function init() {
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if (get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }
    session_check(); // 세션 유무 검사
}
document.addEventListener('DOMContentLoaded', () => {
checkAuth();
//init_logined();
});


// 로그인 관련 이벤트 핸들링
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');

    const check_input = () => {
        const idsave_check = document.getElementById('idSaveCheck');
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        const payload = {
            id: emailValue,
            exp: Math.floor(Date.now() / 1000) + 3600 // 1시간
        };
        const jwtToken = generateJWT(payload);
        alert('아이디, 패스워드를 체크합니다');

        // 이메일 유효성 검사
        if (emailValue === '') {
            alert('이메일을 입력하세요.');
            return false;
        }
        if (emailValue.length < 5) {
            alert('아이디는 최소 5글자 이상 입력해야 합니다.');
            return false;
        }

        // 비밀번호 유효성 검사
        if (passwordValue === '') {
            alert('비밀번호를 입력하세요.');
            return false;
        }
        if (passwordValue.length < 12) {
            alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
            return false;
        }

        const hasSpecialChar = /[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue);
        if (!hasSpecialChar) {
            alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
            return false;
        }

        const hasUpperCase = /[A-Z]+/.test(passwordValue);
        const hasLowerCase = /[a-z]+/.test(passwordValue);
        if (!hasUpperCase || !hasLowerCase) {
            alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
            return false;
        }

        console.log('이메일:', emailValue);
        console.log('비밀번호:', passwordValue);

        if (idsave_check.checked === true) {
            alert("쿠키를 저장합니다.");
            setCookie("id", emailValue, 1); // 1일 저장
            alert("쿠키 값 :" + emailValue);
        } else {
            setCookie("id", emailValue, 0); // 쿠키 삭제
        }

        session_set(); // 세션 생성
        localStorage.setItem('jwt_token', jwtToken);
        loginForm.submit();
    };

    loginBtn.addEventListener('click', check_input);

    function init_logined() {
        if (sessionStorage) {
            decrypt_text(); // 복호화
        } else {
            alert("세션 스토리지 지원 x");
        }
    }
});
