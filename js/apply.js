document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("applyModal");
    const applyBtn = document.getElementById("applyBtn"); 
    const closeSpan = document.querySelector(".close-area"); 
    const submitBtn = document.querySelector(".btn-minimal-submit");
    const nameInput = document.getElementById("userName");
    const agreeCheck = document.getElementById("agreeCheck");
    const resumeSelect = document.getElementById("resumeSelect");
    
    window.addEventListener("pageshow", (event) => {
        sessionStorage.removeItem("applyName");
        sessionStorage.removeItem("resumeType");

        if (nameInput) nameInput.value = "";
        if (agreeCheck) agreeCheck.checked = false;
        if (resumeSelect) resumeSelect.selectedIndex = 0;
        
    });

    applyBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    const closeModal = () => {
        modal.style.display = "none";
    };

    closeSpan.addEventListener("click", closeModal);
    
    modal.addEventListener("click", (e) => {
        if(e.target === modal) closeModal();
    });

    submitBtn.addEventListener("click", () => {
        const resumeSelect = document.getElementById("resumeSelect");
        const name = nameInput.value;
        const resumeType = resumeSelect.value;

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

        sessionStorage.setItem("applyName", name);
        sessionStorage.setItem("resumeType", resumeType);

        window.location.href = "complete.html";
    });
});