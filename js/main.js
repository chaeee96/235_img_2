var idx_lgth = $(".img-box>div").length;

console.log(idx_lgth);
var srt = 0;
var idx = 0;

var AutoSlide = setInterval(AutoRun, 4500);

function AutoRun() {
  srt++;

  if (srt == idx_lgth) {
    srt = 0;
  }

  $(".img-box>div").eq(srt).addClass("on").siblings().removeClass("on");
}

var clickcount = 0;

document.getElementById("menu-btn-click").onclick = function () {
  if (clickcount == 0) {
    $(".mobile-menu-btn").css("-ms-transform", " rotate(45deg)");
    $(".mobile-menu-btn").css("-webkit-transform", " rotate(45deg)");
    $(".mobile-menu-btn").css("transform", " rotate(45deg)");

    $(".mobile-menu-txt-box").css("right", "0");

    clickcount = 1;
  } else {
    $(".mobile-menu-btn").css("-ms-transform", " rotate(90deg)");
    $(".mobile-menu-btn").css("-webkit-transform", " rotate(90deg)");
    $(".mobile-menu-btn").css("transform", " rotate(90deg)");
    $(".mobile-menu-txt-box").css("right", "-100%");
    clickcount = 0;
  }

  return false;
};

var isTrue = true;

$(document).scroll(function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var here = $(".main-main-content-1").position().top;
  console.log(scrollPosition);
  console.log(here);
  if (here < scrollPosition && isTrue) {
    //  메인페이지 컨텐츠 2
    const content = "퀀텀 엔터테인먼트는";
    const content2 = "광고영상제작, 컨텐츠개발, 브랜드마케팅등";
    const content3 = "엔터테인먼트 사업에 큰 도약을 꿈꾸고 있습니다. ";
    const text = document.querySelector(".text");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");

    let index = 0;

    let Interval = setInterval(typing, 68);
    let Interval2;
    // let Interval2 =  setInterval(typing2, 150);

    function typing() {
      text.textContent += content[index++];
      if (index > content.length) {
        text.textContent = "퀀텀 엔터테인먼트는";

        document.querySelector(".text").style.border = "none";
        clearInterval(Interval);
        $(".text2").addClass("on");
        setTimeout((Interval2 = setInterval(typing2, 68)), 1000);
      }
    }
    let index2 = 0;

    function typing2() {
      text2.textContent += content2[index2++];
      if (index2 > content2.length) {
        text2.textContent = "광고영상제작, 컨텐츠개발, 브랜드마케팅등";
        document.querySelector(".text2").style.border = "none";
        clearInterval(Interval2);
        $(".text3").addClass("on");
        setTimeout((Interval3 = setInterval(typing3, 68)), 1000);
      }

      // setTimeout(typing3,1000);
    }

    let index3 = 0;

    function typing3() {
      text3.textContent += content3[index3++];
      if (index3 > content3.length) {
        text3.textContent = "엔터테인먼트 사업에 큰 도약을 꿈꾸고 있습니다.";
        document.querySelector(".text3").style.border = "none";
        clearInterval(Interval3);
      }
    }

    // setInterval(typing3, 150)s;

    isTrue = false;
  }
});

//슬라이드

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 메인 페이지 스크롤  */

//  스크롤 없애는 기능
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");

//

var page = 1;

var lastPage =
  $(".main-main-content-1").length +
  $(".main-content-02").length +
  $("footer").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});
