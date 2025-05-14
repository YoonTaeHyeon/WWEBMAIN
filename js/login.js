document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');

    const check_input = () => {
        
        const idsave_check = document.getElementById('idSaveCheck');
        const payload = {
        id: emailValue,
        exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
        };
        const jwtToken = generateJWT(payload)
        alert('아이디, 패스워드를 체크합니다');

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

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
        loginForm.submit();

        if(idsave_check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.", emailValue);
            setCookie("id", emailValue, 1); // 1일 저장
            alert("쿠키 값 :" + emailValue);
            }
            else{ // 아이디 체크 x
            setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
        }

        console.log('이메일:', emailValue);
        console.log('비밀번호:', passwordValue);
        session_set(); // 세션 생성
        localStorage.setItem('jwt_token', jwtToken);
        loginForm.submit();

    };

    loginBtn.addEventListener('click', check_input);

    function init_logined(){
if(sessionStorage){
        decrypt_text(); // 복호화 함수
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}

    // const sanitizedPassword = check_xss(passwordInput);
    //     // check_xss 함수로 비밀번호 Sanitize
    //     const sanitizedEmail = check_xss(emailInput);
    //     // check_xss 함수로 비밀번호 Sanitize
    //     if (!sanitizedEmail) {
    //     // Sanitize된 비밀번호 사용
    //     return false;
    //     }
    //     if (!sanitizedPassword) {
    //     // Sanitize된 비밀번호 사용
    //     return false;
    //     }

});