import { session_set2 } from './session.js';

async function join() {
    let form = document.querySelector("#join_form");
    let name = document.querySelector("#form3Example1c");
    let email = document.querySelector("#form3Example3c");
    let password = document.querySelector("#form3Example4c");
    let re_password = document.querySelector("#form3Example4cd");
    let agree = document.querySelector("#form2Example3c");

    const nameRegex = /^[가-힣]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // 필수 입력 체크
    if (
        name.value.length === 0 ||
        email.value.length === 0 ||
        password.value.length === 0 ||
        re_password.value.length === 0
    ) {
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
        return;
    }

    // 유효성 검사
    if (!nameRegex.test(name.value)) {
        alert("이름은 한글만 입력 가능합니다.");
        name.focus();
        return;
    }

    if (!emailRegex.test(email.value)) {
        alert("이메일 형식이 올바르지 않습니다.");
        email.focus();
        return;
    }

    if (!pwRegex.test(password.value)) {
        alert("비밀번호는 8자 이상이며 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
        password.focus();
        return;
    }

    if (password.value !== re_password.value) {
        alert("비밀번호가 일치하지 않습니다.");
        re_password.focus();
        return;
    }

    if (!agree.checked) {
        alert("약관에 동의하셔야 가입이 가능합니다.");
        return;
    }

    // 세션 저장
    const newSignUp = new SignUp(name.value, email.value, password.value, re_password.value);
    session_set2(newSignUp);

    // 암호화 및 세션스토리지 저장
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp.getUserInfo());
        let en_text = await encrypt_text(objString);
        sessionStorage.setItem("Session_Storage_id", name.value); // 이름을 ID 대용으로 저장
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("세션 스토리지를 지원하지 않습니다.");
    }

    // 폼 제출
    form.action = "../index.html";
    form.method = "get";
    form.submit();
}

// 회원가입 버튼 클릭 시 join 함수 실행
document.getElementById("join_btn").addEventListener('click', join);

// 회원 정보 클래스
class SignUp {
    constructor(name, email, password, re_password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._re_password = re_password;
    }

    setUserInfo(name, email, password, re_password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._re_password = re_password;
    }

    getUserInfo() {
        return {
            name: this._name,
            email: this._email,
            password: this._password,
            re_password: this._re_password
        };
    }
}
