if (matchMedia("screen and (min-width: 768px)").matches) {
  // 768px 이상에서 사용할 JavaScript
} else {
  //모바일

  // 모바일 메뉴 클릭시

  $(document).ready(function () {
    $(".mobile-icon div").click(function () {
      $(".mobile-icon div").toggleClass("active");

      if ($(".mobile-icon div:nth-child(2)").hasClass("active") === true) {
        $(".mobile-menu").addClass("active");
      } else {
        $(".mobile-menu").removeClass("active");
      }
    });
  });
}

/* artist slide js */

// artist-01

function move_01($node, no) {
  let currentNo;

  for (let i = 1; i <= 15; i++) {
    if ($node.hasClass("pos-" + i)) {
      currentNo = i;
      break;
    }
  }

  let postNo = currentNo + no;

  if (postNo < 1) {
    postNo = 15;
  } else if (postNo > 15) {
    postNo = 1;
  }

  $node.removeClass("pos-" + currentNo);
  $node.addClass("pos-" + postNo);
}
// artist-02
function move_02($node, no) {
  let currentNo;

  for (let i = 1; i <= 13; i++) {
    if ($node.hasClass("pos-" + i)) {
      currentNo = i;
      break;
    }
  }

  let postNo = currentNo + no;

  if (postNo < 1) {
    postNo = 13;
  } else if (postNo > 13) {
    postNo = 1;
  }

  $node.removeClass("pos-" + currentNo);
  $node.addClass("pos-" + postNo);
}

// artist-01
$(document).ready(function () {
  $(".slide-next-btn.artist-01").click(function () {
    console.log("a");
    $(".slide-artist > div").each(function (index, node) {
      move_01($(node), 1);
    });
  });
});
// artist-02
$(document).ready(function () {
  $(".slide-next-btn.artist-02").click(function () {
    console.log("a");
    $(".slide-artist > div").each(function (index, node) {
      move_02($(node), 1);
    });
  });
});

// artist-02
