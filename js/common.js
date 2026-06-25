    document.addEventListener("DOMContentLoaded", () => {

      // ------------------------------------------------------------------------
      // 📱 スマホメニューのトグル ＆ バウンス弾むインタラクション
      // ------------------------------------------------------------------------
      const menuToggle = document.getElementById('menuToggle');
      const mobileNav = document.getElementById('mobileNav');
      let isMenuOpen = false;

      menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('is-active', isMenuOpen);
        mobileNav.classList.toggle('is-open', isMenuOpen);

        if (isMenuOpen) {
          // 開くときは弾むように気持ちよく展開
          anime({
            targets: mobileNav,
            opacity: [0, 1],
            translateY: [-10, 0],
            scale: [0.95, 1],
            duration: 500,
            easing: 'easeOutElastic(1, .75)' // 💡 弾む動きを追加
          });
        } else {
          // 閉じるときはスッとスマートに消す
          anime({
            targets: mobileNav,
            opacity: [1, 0],
            translateY: [0, -10],
            scale: [1, 0.95],
            duration: 250,
            easing: 'easeInQuad'
          });
        }
      });
    });