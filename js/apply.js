document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("applyModal");
    const applyBtn = document.getElementById("applyBtn"); 
    const closeSpan = document.querySelector(".close-area"); 
    const submitBtn = document.querySelector(".btn-minimal-submit");
    const nameInput = document.getElementById("userName"); // 이름 입력창
    const agreeCheck = document.getElementById("agreeCheck"); // 체크박스

    // [추가] 뒤로 가기로 돌아왔을 때 데이터 파기 및 입력창 초기화
    window.addEventListener("pageshow", (event) => {
        // 세션 데이터 영구 파기
        sessionStorage.removeItem("applyName");
        sessionStorage.removeItem("resumeType");

        // 입력 폼 초기화
        if (nameInput) nameInput.value = "";
        if (agreeCheck) agreeCheck.checked = false;
        
        console.log("보안 프로토콜: 이전 세션의 식별 데이터가 파기되었습니다.");
    });

    // 1. 모달 열기
    applyBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // 2. 모달 닫기
    const closeModal = () => {
        modal.style.display = "none";
    };

    closeSpan.addEventListener("click", closeModal);
    
    modal.addEventListener("click", (e) => {
        if(e.target === modal) closeModal();
    });

    // 3. '계속하기' 버튼 클릭 시 처리
    submitBtn.addEventListener("click", () => {
        const resumeSelect = document.getElementById("resumeSelect");
        const name = nameInput.value;
        const resumeType = resumeSelect.value;

        // 유효성 검사
        if (name.trim() === "") {
            alert("이름을 입력해주세요!");
            return;
        }

        if (resumeType === "") {
            alert("제출할 이력서 종류를 선택해주세요!");
            return;
        }

        if (!agreeCheck.checked) {
            alert("지원 동의 항목에 체크해주세요!");
            return;
        }

        // [핵심] 버튼을 눌러 승인된 순간에만 데이터 기록
        sessionStorage.setItem("applyName", name);
        sessionStorage.setItem("resumeType", resumeType);

        // 페이지 이동
        window.location.href = "complete.html";
    });
});