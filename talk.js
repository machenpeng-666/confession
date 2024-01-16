/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-12 22:10:21
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 22:37:53
 * @FilePath: \009\talk.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
$(function () {
  $("#yes").click(function (event) {
    // toggleSound();
    playLabiSound("music_yes");
    modal("好耶。(^_^)", function () {
      $(".page_one").addClass("hide");
      $(".page_two").removeClass("hide");
      $(".labi-1-bottom").removeClass("hide");
      // typeWrite();
      toggleSound();
      fireworks();
    });
  });
  $("#no").click(function (event) {
    playLabiSound();
    modal(
      `<img src='labi-cry1.png' class='labi-cry1' >` + "请 请你想想办法，拜托了"
    );
  });
});

//表白音乐
function toggleSound() {
  var music = document.getElementById("music"); //获取ID
  music.autoplay = true;
  music.play(); //没有就播放
  // if (music.paused) { //判读是否播放
  //     music.paused = false;
  //     music.play(); //没有就播放
  // }
}

//拒绝语音
function playLabiSound(id = "music_no") {
  var music = document.getElementById(id); //获取ID
  // music.autoplay = true;
  music.play(); //没有就播放
  // if (music.paused) { //判读是否播放
  //     music.paused = false;
  //     music.play(); //没有就播放
  // }
}

function A() {
  modal("我喜欢你！", B);
}

function B() {
  modal("我知道你在等我这一句话", C);
}

function C() {
  modal("请您不要拒绝我", D);
}

function D() {
  modal("拒绝我，不存在的", E);
}

function E() {
  modal("这辈子都不可能让你离开我", F);
}

function F() {
  modal("跟我走吧", G);
}

function G() {
  modal("房产证上写你名", H);
}

function H() {
  modal("我会做饭", I);
}

function I() {
  modal("爱你。么么哒！", J);
}

function J() {
  modal("行，我们去民政局登记吧", function () {
    fireworks();
  });
}

function fireworks() {
  $(".page_one").addClass("hide");
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">确定</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback && callback();
  });
}
