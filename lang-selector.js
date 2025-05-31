document.addEventListener("DOMContentLoaded", () => {
  const learnSelect = document.getElementById("learnLang");
  const currentLearnElements = document.querySelectorAll("#currentLearn");

  // 各言語ごとの表示名（日本語固定UI用）
  const languageNames = {
    ja: "日本語",
    en: "英語",
    cn: "中国語",
  };

  // 初期設定
  function updateLearnLanguage() {
    const selected = learnSelect.value;
    const langLabel = languageNames[selected] || "";
    currentLearnElements.forEach(el => el.textContent = langLabel);
  }

  // 初回実行
  updateLearnLanguage();

  // セレクトボックス変更時
  learnSelect.addEventListener("change", updateLearnLanguage);
});
