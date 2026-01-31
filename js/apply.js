document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("applyModal");
    const applyBtn = document.getElementById("applyBtn"); // 지원하기 버튼
    const closeSpan = document.querySelector(".close-area"); // 닫기(X) 버튼
    const submitBtn = document.querySelector(".btn-minimal-submit"); // 계속하기 버튼

    // 1. 모달 열기
    applyBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // 2. 모달 닫기 함수
    const closeModal = () => {
        modal.style.display = "none";
    };

    closeSpan.addEventListener("click", closeModal);
    
    // 모달 배경 클릭 시 닫기
    modal.addEventListener("click", (e) => {
        if(e.target === modal) closeModal();
    });

    // 3. '계속하기' 버튼 클릭 시 처리
    submitBtn.addEventListener("click", () => {
        const nameInput = document.getElementById("userName");
        const resumeSelect = document.getElementById("resumeSelect");
        const agreeCheck = document.getElementById("agreeCheck"); // [추가] 체크박스 요소 가져오기

        const name = nameInput.value;
        const resumeType = resumeSelect.value;

        // 유효성 검사: 이름
        if (name.trim() === "") {
            alert("이름을 입력해주세요!");
            return;
        }

        // 유효성 검사: 이력서 선택 여부
        if (resumeType === "") {
            alert("제출할 이력서 종류를 선택해주세요!");
            return;
        }

        // [추가] 유효성 검사: 지원 동의 체크 여부
        if (!agreeCheck.checked) {
            alert("지원 동의 항목에 체크해주세요!");
            return;
        }

        // 데이터 저장 (세션 스토리지)
        sessionStorage.setItem("applyName", name);
        sessionStorage.setItem("resumeType", resumeType);

        // 페이지 이동
        window.location.href = "complete.html";
    });
});