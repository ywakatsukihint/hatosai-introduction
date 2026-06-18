document.addEventListener("DOMContentLoaded", () => {
  // スクロール検知のオプション設定
  const observerOptions = {
    root: null,       // ビューポートを基準にする
    rootMargin: "0px",
    threshold: 0.1    // 要素が10%見えたら発火
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 要素が画面内に入った場合
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // 一度アニメーションしたら監視を解除（何度も発火させたい場合はコメントアウト）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // ページ内の該当する要素をすべて取得して監視を開始
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  revealElements.forEach(el => observer.observe(el));
});