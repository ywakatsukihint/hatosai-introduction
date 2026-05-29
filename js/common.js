// ① モバイルメニューの開閉制御
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // メニュー内のリンクをクリックしたら閉じる（スマホ対策）
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ② スクロール連動フェードイン（Intersection Observer）
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.05
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-shown');
      observer.unobserve(entry.target); // 軽量化のため一度表示されたら監視解除
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-fade').forEach(el => {
  observer.observe(el);
});