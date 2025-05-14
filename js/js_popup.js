    function pop_up() {
    var cookieCheck = getCookie("popupYN");
    if (cookieCheck != "N"){
    window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }
    }
    function show_clock() {
        let currentDate = new Date();
        let divClock = document.getElementById('divClock');
        let divTime = document.getElementById('Time');
    
        if (!divClock || !divTime) return; // 둘 중 하나라도 없으면 종료
    
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
    
        // 오전/오후 표시
        let ampm = hours >= 12 ? "오후" : "오전";
        let displayHour = hours % 12;
        if (displayHour === 0) displayHour = 12;
    
        // 2자리 숫자 포맷
        let strMinutes = minutes.toString().padStart(2, '0');
        let strSeconds = seconds.toString().padStart(2, '0');
    
        // divClock에 표시할 메시지
        let msg = `현재 시간 : ${ampm} ${displayHour}시 ${strMinutes}분 ${strSeconds}초`;
    
        divClock.innerText = msg;
    
        // 58분 이후 빨간색 처리
        if (minutes > 58) {
            divClock.style.color = "red";
        } else {
            divClock.style.color = "black";
        }
    
        // divTime에는 HH:MM:SS 형식으로 표시
        let strHours = hours.toString().padStart(2, '0');
        divTime.innerText = `${strHours}:${strMinutes}:${strSeconds}`;
    
        setTimeout(show_clock, 1000);
    }
    
    
    
    function over(obj) 
        {
        obj.src="image/logoblack.jpg";
        }
        function out(obj) {
        obj.src="image/image.png";
        }        
    
    
    function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
   document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
    }
    
    function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for ( var index in cookie_array) {
        var cookie_name = cookie_array[index].split("=");
        if (cookie_name[0] == "popupYN") {
        return cookie_name[1];
        }
        }
        }
        return ;
    }

    function closePopup() {
        if (document.getElementById('check_popup').value) {
        setCookie("popupYN", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
        }
        }
        