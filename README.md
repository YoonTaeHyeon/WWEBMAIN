20241007 윤태현 WEB_MAIN

1.구현 기능 목록

메인화면 (index.html) : 부트스트랩을 활용해 반응형 네비게이션 바, 검색 폼, 로그인 버튼 등 상단 메뉴 UI를 구현했습니다.LOL 메인 이미지를 중앙에 배치하고, 인기 캐릭터 정보를 테이블로 구성했습니다. 자바스크립트로 이미지 마우스오버 효과와 팝업, 구글 검색 기능 등 다양한 동작을 연동했습니다.

팝업창 (popup.html) : 부트스트랩을 적용하여 팝업창에서 시계와 체크박스 UI를 구현하였습니다 자바스크립트로 실시간 시계(show_clock)와 팝업 닫기 기능(closePopup)을 연동 하였습니다. 체크박스를 클릭하면 팝업을 닫거나 하루에 한번만 열기 기능을 구현 할 수있도록 설계 하였습니다 

로그인(login.html) :부트스트랩을 활용해 반응형 로그인 폼과 카드 UI, 소셜 로그인 아이콘, 회원가입 링크를 구현했습니다.이메일/비밀번호 입력, 아이디 기억 체크박스, 패스워드 찾기 등 기본 로그인 기능을 포함했습니다. DOMPurify와 CryptoJS 등 라이브러리로 보안 강화 및 입력값 검증, JS로 로그인 처리 기능을 연동했습니다.

회원가입(join.html) : 부트스트랩을 활용해 반응형 카드형 회원가입 폼과 이미지를 세련되게 배치했습니다.이름, 이메일, 비밀번호, 비밀번호 확인, 약관 동의 체크박스 등 회원가입에 필요한 입력 항목을 구현했습니다. DOMPurify, CryptoJS 등 라이브러리로 보안과 입력값 검증을 강화하고, JS로 회원가입 처리 기능을 연동했습니다.

프로필(profile.html) : 부트스트랩을 활용해 반응형 사용자 프로필 카드, 상세 정보, 소셜 링크, 프로젝트 진행률, 지도 등을 한 화면에 구성했습니다 프로필 사진, 이름, 연락처, 주소, 기술 스택 등 다양한 사용자 정보를 보기 좋게 배치했습니다. 카카오 지도 API와 JS를 연동해 지도 표시 및 클릭 시 좌표 확인 기능을 구현했습니다.











2.응용문제 (수업시간에 하는것과 겹치지 않도록 직접 코드를 수정하진 않았습니다.)

10주차 실습퀴즈
2-1. login_count() & logout_count() 함수 추가

function login_count() {
    let count = parseInt(getCookie('login_cnt')) || 0;
    count += 1;
    setCookie('login_cnt', count, 7); // 7일간 저장
    console.log("로그인 횟수:", count);
}

function logout_count() {
    let count = parseInt(getCookie('logout_cnt')) || 0;
    count += 1;
    setCookie('logout_cnt', count, 7); // 7일간 저장
    console.log("로그아웃 횟수:", count);
}

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

로그인 성공 후 login_count() 호출
if (idsave_check.checked === true) {
    alert("쿠키를 저장합니다.");
    setCookie("id", emailValue, 1); // 1일 저장
    alert("쿠키 값 :" + emailValue);
} else {
    setCookie("id", emailValue, 0); // 쿠키 삭제
}

session_set(); // 세션 생성
localStorage.setItem('jwt_token', jwtToken);

// 👉 로그인 횟수 증가
login_count(); // <<== 이 줄 추가

// ✅ 여기서 직접 이동!
window.location.href = '../login/index_login.html';

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

로그아웃 버튼 클릭 시 logout_count() 호출
const logoutBtn = document.getElementById('logout_btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        logout_count(); // 로그아웃 횟수 증가

        sessionStorage.clear();
        localStorage.removeItem('jwt_token');

        // 로그아웃 후 이동
        window.location.href = '../index.html';
    });
}
<!-- html <button id="logout_btn">로그아웃</button> -->

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

session_del() 함수 추가

function session_del() { // 세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}

 logout() 함수 추가
function logout() {
    session_del(); // 세션 삭제
    location.href = '../index.html'; // 메인 페이지로 이동
}

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

login_failed() 함수 구현
function login_failed() {
    let failCount = parseInt(getCookie("login_fail_cnt")) || 0;
    failCount += 1;

    setCookie("login_fail_cnt", failCount, 1); // 1일 저장

    if (failCount >= 3) {
        alert(`❌ 로그인 실패 ${failCount}회 - 로그인이 제한됩니다.`);
        document.getElementById('login_btn').disabled = true;
    } else {
        alert(`⚠️ 로그인 실패 ${failCount}회`);
    }
}

 로그인 실패 시 호출하도록 수정

 if (emailValue === '') {
    alert('이메일을 입력하세요.');
    login_failed();  // 실패 기록
    return false;
}

if (passwordValue === '') {
    alert('비밀번호를 입력하세요.');
    login_failed();  // 실패 기록
    return false;
}


페이지 로드시 제한 상태 확인
let failCount = parseInt(getCookie("login_fail_cnt")) || 0;
if (failCount >= 3) {
    alert(`🚫 로그인 제한: 실패 횟수 ${failCount}회`);
    document.getElementById('login_btn').disabled = true;
}

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

11주차 실습퀴즈
crypto2.js 전체 코드
// crypto2.js

// 유틸 함수: 문자열을 Uint8Array로 변환
function strToUint8Array(str) {
    return new TextEncoder().encode(str);
}

// 유틸 함수: Uint8Array를 base64로 변환
function uint8ToBase64(uint8Array) {
    return btoa(String.fromCharCode(...uint8Array));
}

// base64를 Uint8Array로 변환
function base64ToUint8(base64) {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

// 키 생성 함수 (32바이트 고정 비밀 키로 테스트 시 사용)
const keyMaterial = strToUint8Array('my_secret_password_1234567890!@#$'); // 32바이트

async function getCryptoKey() {
    return crypto.subtle.importKey(
        "raw",
        keyMaterial,
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"]
    );
}

// 암호화 함수
async function encryptText(plainText) {
    const iv = crypto.getRandomValues(new Uint8Array(12)); // AES-GCM은 12바이트 IV 권장
    const key = await getCryptoKey();

    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        strToUint8Array(plainText)
    );

    // IV + 암호문을 base64로 저장
    const result = uint8ToBase64(iv) + '.' + uint8ToBase64(new Uint8Array(encrypted));
    return result;
}

// 복호화 함수
async function decryptText(encryptedText) {
    const [ivBase64, dataBase64] = encryptedText.split('.');
    const iv = base64ToUint8(ivBase64);
    const encrypted = base64ToUint8(dataBase64);
    const key = await getCryptoKey();

    const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encrypted
    );

    return new TextDecoder().decode(decrypted);
}

logout() 함수 추가
export function logout() {
    // ✅ 1. JWT 토큰 삭제 (로컬스토리지)
    localStorage.removeItem('jwt_token');

    // ✅ 2. 세션 스토리지 삭제 (예: 비밀번호, 에러 메시지 등)
    sessionStorage.removeItem('Session_Storage_pass2');
    sessionStorage.removeItem('authErrorShown');

    // ✅ 3. 모든 쿠키 삭제
    document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });

    // ✅ 4. 로그아웃 후 로그인 페이지로 이동
    alert("로그아웃되었습니다.");
    window.location.replace("../login/index_login.html");
}
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.홈페이지 내용 수정
리그오브레전드 로고와 분위기를 배경과 맞추기 위해 검은색으로 구현 하였습니다. 
롤 웹사이트로 이동을 누르면 원래 진짜 리그오브레전드 사이트로 이동이 되었지만 제 사이트로 수정하였습니다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
4.소스 코드 정리
index.html:
<!DOCTYPE html>
<html lang="ko">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="학번">
        <meta name="keywords" content="computer">
        <title>LOL 메인화면</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            table {
                font-size: 20px;
                color: white;
            }
            body {
                background-color: black;
            }
            table {
            font-size: 20px;
            color: white;
            }

            /* 네비게이션 바 개선 */
            nav.navbar {
            background-color: #111111;
            padding: 10px 20px;
            width: 100%;
            }

            nav .navbar-nav .nav-link {
            color: #ccc;
            margin: 0 8px;
            font-weight: 500;
            transition: color 0.2s;
            }

            nav .navbar-nav .nav-link:hover {
            color: #fff;
            }

            #search_input {
            width: 200px;
            }

            #search_btn {
            margin-right: 10px;
            }

            #login_btn {
            white-space: nowrap;
            }

            /* 로고와 네비게이션을 나란히 정렬 */
            .navbar-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            }

            .navbar-brand img {
            margin-right: 20px;
            }

    /* 반응형 정리 */
    @media (max-width: 991.98px) {
      #search_input {
        width: 100px;
      }
    }
        </style>
        <script type="text/javascript" src="js/js_test.js"></script>
        <script type="text/javascript" defer src="js/js_popup.js"></script>
        <script type="text/javascript" defer src="js/js_search.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>

    <body style="background-color: black;" onload="pop_up();">
        <div style="display: flex; justify-content: center;">
            <img src="image/image.png" width="180" height="60" onmouseover="over(this)" onmouseout="out(this)">
        
        <nav class="navbar navbar-expand-lg" style="background-color: #111111;" data-bs-theme="dark">
            <div class="container-fluid">
             <a class="navbar-brand" href="#">게임정보</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item"><a class="nav-link" href="#">새소식</a></li>
        <li class="nav-item"><a class="nav-link" href="#">다운로드</a></li>
        <li class="nav-item"><a class="nav-link" href="#">E스포츠</a></li>
        <li class="nav-item"><a class="nav-link" href="#">이벤트</a></li>
        <li class="nav-item"><a class="nav-link" href="#">알아보기</a></li>
        <li class="nav-item"><a class="nav-link" href="#">유니버스</a></li>
        <li class="nav-item"><a class="nav-link" href="#">라이엇 스토어</a></li>
        <li class="nav-item"><a class="nav-link" href="#">고객지원</a></li>
      </ul>s
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" id="search_btn" type="submit">Search</button>
      </form> -->
      
      <form class="d-flex" role="search" onsubmit="return googleSearch();">
        <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
        <button class="btn btn-outline-success" id="search_btn" type="submit">검색하기</button>
      </form>
      
    </div>
    <a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인 하기</a>
  </div>
</nav>
        </div>

        <hr>
        <div class="container-fluid" style="display: flex; justify-content: center;">
            <a href="index.html" target="_blank"><img src="image/main.webp" class="img-fluid" width="1000" height="568"></a>
        </div>
        <div style="display: flex; justify-content : center;">
            <table class="table caption-top">
                <caption>인기 캐릭터</caption>
                <tbody class="table-group-divider">
                    <tr>
                        <td width="80">사이온</td>
                        <td>아리</td>
                        <td>가렌</td>
                        <td>가렌2</td>
                        <td>가렌3</td>
                    </tr>
                    <tr bgcolor="grey">
                        <td colspan="5"> <a href="index.html" target="_blank">롤 웹사이트 접속하기</a></td>
                    </tr>
                    <tr>
                        <td bgcolor="blue"><b>카직스</b></td>
                        <td>루시안</td>
                        <td>루시안2</td>
                        <td colspan="2"><img src="image/bi." width="100" height="50">바이1, 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr>
        <div style="display: flex; justify-content: center;">
            <h3 style="font-size: 24px; font-weight: bold; font-style: italic; color: white; font-family: '굴림';">라이엇 게임 회사 정보 2025년 x월 작성됨</h3>
        </div>
        
    </body>
</html>
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
join.js:
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

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
join.html:
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="학번">
    <meta name="keywords" content="computer">
    <title>로그인 화면</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.8/dist/purify.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"
            integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="../css/login.css">
    <script type="text/script" src="/js/join.js"></script>
    <!-- <script type="module" src="/js/login.js"></script> -->
</head>
<body class="text-center">
<section class="vh-100 gradient-custom">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" id="join_form">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" id="join_btn">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</html>
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
popup.html:
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>팝업창 테스트</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script type="text/javascript" src="../js/js_popup.js"></script>
<script type="text/javascript" src="../js/popup_close.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body onload="show_clock();">
    <h1 class="display-1"><i class="bi bi-alarm"></i> 팝업창 확인<br><br></h1>
    <h1 class="display-4"><div id="divClock" class="clock"></div></h1>
    <h1 class="display-4"><div id="Time" class="clock"></div></h1>
    <input class="form-check-input" type="checkbox" id="check_popup" onclick="closePopup();">
    <!-- <label class="form-check-label" for="check_popup">하루에 한번만 열기</label> -->
</body>
</html>
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
jwt_token: 
// JWT 비밀 키 (실제 운영 환경에서는 복잡한 키 사용 필수)
const JWT_SECRET = "your_secret_key_here";

export function generateJWT(payload) {
    // 1. 헤더 생성 및 Base64 인코딩
    const header = { alg: "HS256", typ: "JWT" };
    const encodedHeader = btoa(JSON.stringify(header));
    // 2. 페이로드 Base64 인코딩
    const encodedPayload = btoa(JSON.stringify(payload)); // JSON 형태로 변환 후 인코딩
    // 3. 서명 생성 (HMAC-SHA256 알고리즘 사용)
    const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
    const encodedSignature = CryptoJS.enc.Base64.stringify(signature);
    // 4. 최종 토큰 조합
    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

function verifyJWT(token) { // 토큰 검증
    try {
        // 1. 토큰을 헤더, 페이로드, 서명으로 분할
        const parts = token.split('.');
        if (parts.length !== 3) return null; // 형식 오류 체크
        const [encodedHeader, encodedPayload, encodedSignature] = parts;
        // 2. 서명 재계산 및 비교
        const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
        const calculatedSignature = CryptoJS.enc.Base64.stringify(signature);
        if (calculatedSignature !== encodedSignature) return null; // 서명 불일치
        // 3. 페이로드 파싱 및 만료 시간 검증
        const payload = JSON.parse(atob(encodedPayload)); // 디코딩 후 해석
        if (payload.exp < Math.floor(Date.now() / 1000)) { // 만료 시간(초 단위) 체크
            console.log('보안 토큰이 만료되었습니다');
            return null;
        }
        return payload; // 검증 성공
    } catch (error) {
        return null; // 파싱 오류 또는 기타 예외 처리
    }
}

function isAuthenticated() { // 사용자 인증 상태 확인
    const token = localStorage.getItem('jwt_token');
    if (!token) return false; // 토큰 없음
    const payload = verifyJWT(token);
    console.log(payload);
    return !!payload; // 페이로드 유무로 인증 상태 판단
}

export function checkAuth() {
    // 현재 페이지 경로 확인 (예: 로그인 페이지 경로가 '/login/login.html'인 경우)
    const currentPath = window.location.pathname;
    if (currentPath.endsWith('/login.html') || currentPath.endsWith('/index_login.html')) {
        // 로그인 페이지에서는 인증 검사 및 리다이렉트 하지 않음
        return;
    }

    const authenticated = isAuthenticated();
    if (authenticated) {
        alert('정상적으로 토큰이 검증되었습니다.');
        sessionStorage.removeItem('authErrorShown');
    } else {
        if (!sessionStorage.getItem('authErrorShown')) {
            alert('토큰 검증 에러!! 인증되지 않은 접근입니다.');
            sessionStorage.setItem('authErrorShown', 'true');
        }
        window.location.replace('../login/index_login.html');
    }
}
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
map.js
var container = document.getElementById('map'); //지도를  담을  영역의  DOM 레퍼런스
var options = { //지도를  생성할  때  필요한  기본  옵션
center: new kakao.maps.LatLng(37.379778, 126.929238 ), //지도의  중심좌표.
level: 3 //지도의  레벨(확대, 축소  정도)
};
var map = new kakao.maps.Map(container, options); //지도  생성  및  객체  리턴

// 일반  지도와  스카이뷰로  지도  타입을  전환할  수  있는  지도타입  컨트롤을  생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도  타입  컨트롤을  지도에  표시합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
// 지도  확대  축소를  제어할  수  있는    줌  컨트롤을  생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// 지도에  지형정보를  표시하도록  지도타입을  추가합니다
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

//마커를 표시할 위치
var markerPosition = new kakao.maps.LatLng(33,450701,126.570667);

//마커를 생성합니다.
var marker = new kakao.maps.Marker({
    positon: markerPosition
});

// 지도에  마커를  표시합니다
marker.setMap(map);
// 지도에  클릭  이벤트를  등록합니다
// 지도를  클릭하면  마지막  파라미터로  넘어온  함수를  호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
// 클릭한  위도, 경도  정보를  가져옵니다
    var latlng = mouseEvent.latLng;
    // 마커  위치를  클릭한  위치로  옮깁니다
    marker.setPosition(latlng);
    var message = '클릭한 위치의 위도는'+ latlng.getLat() + '이고,;'
    message +=  '경도는' + latlng.getLnt() + ' 입니다';
    var resultDiv = document.getElementById('clickLatlng');
    resultDiv.innerHTML = message;
});

// 마커를  담을  배열입니다
var markers = [];
// 장소  검색  객체를  생성합니다
var ps = new kakao.maps.services.Places();
// 검색  결과  목록이나  마커를  클릭했을  때  장소명을  표출할  인포윈도우를  생성합
니다
var
infowindow = new kakao.maps.InfoWindow({zIndex:1});
// 키워드로  장소를  검색합니다
searchPlaces();ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
session.js:
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

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

crypto.js
import { session_set, session_get, session_check } from './session.js';

function encodeByAES256(key, data){ //
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""), // IV 초기화 벡터
    padding: CryptoJS.pad.Pkcs7, // 패딩
    mode: CryptoJS.mode.CBC // 운영 모드
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}
export function encrypt_text(password){
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = encodeByAES256(rk, b); // 실제 암호화
    return eb;
    console.log(eb);
}
export function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = decodeByAES256(rk, eb); // 실제 복호화
    console.log(b);
}

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

profile.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script type="text/javascript" defer src="../js/map.js"></script>
          <link rel="stylesheet" href="../css/profile.css">
     <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1c79c2921e5d5767c3b429699c302347&libraries=services,clusterer,drawing"></script>
    <title>Document</title>
</head>
<body>
    
<section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style="width: 150px;">
            <h5 class="my-3">윤태현</h5>
            <p class="text-muted mb-1">백앤드,스프링부트,플러터,QA</p>
            <p class="text-muted mb-4">게임 QA</p>
            <div class="d-flex justify-content-center mb-2">
              <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Follow</button>
              <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">https://mdbootstrap.com</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg text-body"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                <p class="mb-0">@mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">YOON TAE HYEON</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">dbsxogus040820@naver.com</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">+82 010 7521 8293</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">서울특별시 관악구 대학동</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">파이썬</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">플러터</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">스프링부트</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div class="progress rounded mb-2" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div class="progress rounded mb-2" style="height: 5px;">
                  <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div id="map" style="width:1000px;height:400px;"></div>
          <p><em>지도를  클릭해주세요!</em></p>
         <div id="clickLatlng"></div>
        </div>
      </div>
    </div>
  </div>
</section>
    
</body>
</html>

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
index_login.html:
<!DOCTYPE html>
<html lang="ko">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="학번">
        <meta name="keywords" content="computer">
        <title>LOL 메인화면</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            table {
                font-size: 20px;
                color: white;
            }
            body {
                background-color: black;
            }
            table {
            font-size: 20px;
            color: white;
            }

            /* 네비게이션 바 개선 */
            nav.navbar {
            background-color: #111111;
            padding: 10px 20px;
            width: 100%;
            }

            nav .navbar-nav .nav-link {
            color: #ccc;
            margin: 0 8px;
            font-weight: 500;
            transition: color 0.2s;
            }

            nav .navbar-nav .nav-link:hover {
            color: #fff;
            }

            #search_input {
            width: 200px;
            }

            #search_btn {
            margin-right: 10px;
            }

            #login_btn {
            white-space: nowrap;
            }

            /* 로고와 네비게이션을 나란히 정렬 */
            .navbar-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            }

            .navbar-brand img {
            margin-right: 20px;
            }

    /* 반응형 정리 */
    @media (max-width: 991.98px) {
      #search_input {
        width: 100px;
      }
    }
        </style>
        <script type="text/javascript" src="js/js_test.js"></script>
        <script type="text/javascript" defer src="js/js_popup.js"></script>
        <script type="text/javascript" defer src="js/js_search.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        
    </head>

    <body style="background-color: black;" onload="pop_up();">
        <div style="display: flex; justify-content: center;">
            <img src="../image/image.png" width="180" height="60" onmouseover="over(this)" onmouseout="out(this)">
        
        <nav class="navbar navbar-expand-lg" style="background-color: #111111;" data-bs-theme="dark">
            <div class="container-fluid">
             <a class="navbar-brand" href="#">게임정보</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item"><a class="nav-link" href="#">새소식</a></li>
        
        <li class="nav-item"><a class="nav-link" href="#">다운로드</a></li>
        <li class="nav-item"><a class="nav-link" href="#">E스포츠</a></li>
        <li class="nav-item"><a class="nav-link" href="#">이벤트</a></li>
        <li class="nav-item"><a class="nav-link" href="#">알아보기</a></li>
        <li class="nav-item"><a class="nav-link" href="#">유니버스</a></li>
        <li class="nav-item"><a class="nav-link" href="#">라이엇 스토어</a></li>
        <li class="nav-item"><a class="nav-link" href="#">고객지원</a></li>
        <a class="nav-link" href="../login/profile.html" target='_blank'>기본정보(프로필)</a>

      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" id="search_btn" type="submit">Search</button>
      </form> -->
      
      <form class="d-flex" role="search" onsubmit="return googleSearch();">
        <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
        <button class="btn btn-outline-success" id="search_btn" type="submit">검색하기</button>
      </form>
</nav>
        </div>

        <hr>
        <div class="container-fluid" style="display: flex; justify-content: center;">
            <a href="index.html" target="_blank"><img src="../image/main.webp" class="img-fluid" width="1000" height="568"></a>
        </div>
         
    </body>
</html>