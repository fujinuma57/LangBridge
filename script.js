document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    // 成功メッセージの要素を取得（存在するものだけ）
    const successMessages = [
      document.getElementById("contactSuccess"),
      document.getElementById("contactSuccessEn"),
      document.getElementById("contactSuccessZh"),
    ];
    const visibleSuccess = successMessages.find(el => el !== null);

    try {
      const response = await fetch("https://formspree.io/f/xldbvpbg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        if (visibleSuccess) {
          visibleSuccess.style.display = "block";
        }
        contactForm.reset();
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      } else {
        alert("送信に失敗しました。\nSubmission failed.");
      }
    } catch (error) {
      alert("通信エラーが発生しました。\nNetwork error occurred.");
    }
  });
});

