let player = {
  htmlPart: document.querySelector("#htmlPart"),
  stylePart: document.querySelector("#stylePart"),
  stringSource: getStr(),
  strIndex: 0,
  isPlay: true,
  duration: 50,
  events: {
    btnPause: "pause",
    btnPlay: "play",
    btnSlow: "slow",
    btnNormal: "normal",
    btnFast: "fast",
  },
  intervals: {
    fast: 0,
    normal: 50,
    slow: 120,
  },
  init: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const el = document.getElementById(key);
        el.addEventListener("click", player[player.events[key]], false);
      }
    }
    player.step();
  },
  pause: function () {
    player.isPlay = false;
  },
  play: function () {
    player.isPlay = true;
    player.step();
    if (player.strIndex === player.stringSource.length) {
      player.htmlPart.innerHTML = "";
      player.stylePart.innerHTML = "";
      player.strIndex = 0;
      player.step();
    }
  },
  slow: () => {
    player.duration = player.intervals["slow"];
  },
  normal() {
    player.duration = player.intervals["normal"];
  },
  fast() {
    player.duration = player.intervals["fast"];
  },
  step: function () {
    setTimeout(() => {
      if (player.strIndex < player.stringSource.length) {
        if (player.stringSource[player.strIndex] === "\n") {
          player.htmlPart.innerHTML += "<br/>";
        }
        window.scrollTo(0, player.htmlPart.scrollHeight);
        player.htmlPart.scrollTo(0, player.htmlPart.scrollHeight);

        player.htmlPart.innerHTML += player.stringSource[player.strIndex];
        player.stylePart.innerHTML = player.stringSource.substring(
          0,
          player.strIndex
        );

        player.strIndex += 1;
        if (player.isPlay) {
          player.step();
        }
      }
    }, player.duration);
  },
};

player.init();

function getStr() {
  return `
  .box {
    width : 320px;
    height : 320px;
    display : flex;
    justify-content : center;
    align-items : center;
  }
  .taichi {
    width : 200px;
    height : 200px;
    box-sizing : border-box;
    border-radius : 50%;
    border : 2px solid black;
    background : linear-gradient(112deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%);
    position : absolute;
  }
  .white_fish {
    width : 75.2px;
    height : 98.5px;
    transform-origin : 0 80%;
    transform : rotateZ(-22.7deg) translate(-7.5px, 24.5px);
    background-color : white;
    position : absolute;
    box-sizing : border-box;
    left : 200px;
    left : 50%;
    border-radius : 0% 14.5% 69% 31% / 0% 31% 68% 32%;
  }
  .black_fish {
    box-sizing : border-box;
    width : 78.5px;
    height : 98.5px;
    position : absolute;
    background-color : black;
    transform : rotateZ(-22.9deg) translate(-18.7px, -130.5px);
    top : 100%;
    left : 50%;
    border-radius : 69% 31% 0% 15.6% / 68% 32% 0% 31%;
  }
  .line_in_liǎngyí {
    position : absolute;
    top : 50%;
    box-sizing : border-box;
    width : 100%;
    height : 1px;
  }
  .line_in_liǎngyí:nth-child(1) {
    transform : rotate(22deg);
    background : linear-gradient(to right,black 0%,black 28.5%,white 28.5%,white 50%,black 50%,black 69.8%,white 69.8%,white 100%);
    z-index : 1;
    margin-left : -.15px;
  }
  .line_in_liǎngyí:nth-child(2) {
    transform : rotate(67deg);
    background : linear-gradient(to right,black 0%,black 50%,white 50%,white 100%);
    margin-top : -.4px;
    z-index : 1;
  }
  .line_in_liǎngyí:nth-child(3) {
    transform : rotate(112deg);
    background : linear-gradient(to right,black 0%,black 50%,white 50%,white 100%);
    z-index : 1;
  }
  .line_in_liǎngyí:nth-child(4) {
    transform : rotate(157deg);
    background : linear-gradient(to right,white 0%,white 16.8%,black 16.8%,black 50%,white 50%,white 85.6%,black 85.6%,black 100%);
    z-index : 1;
  }
  .white_inner {
    box-sizing : border-box;
    width : 8px;
    height : 8px;
    position : absolute;
    background-color : white;
    top : 50%;
    left : 35%;
    transform-origin : center;
    transform : translate(-4px, -4px);
    border-radius : 50%;
  }
  .black_inner {
    box-sizing : border-box;
    width : 8px;
    height : 8px;
    position : absolute;
    background-color : black;
    top : 50%;
    left : 65%;
    transform-origin : center;
    transform : translate(-4px, -4px);
    border-radius : 50%;
  }
  .side {
    width : 70px;
    height : 60px;
    position : absolute;
  }
  .yangyáo {
    box-sizing : border-box;
    height : 3px;
    width : 40px;
    background-color : black;
    margin : 3px;
    transform : translate(25%, 39px);
  }
  .side:nth-child(1) {
    transform : rotate(0deg) translateY(-130px);
  }
  .side:nth-child(5) {
    transform : rotate(180deg) translateY(-129px);
  }
  .side:nth-child(2) {
    transform : rotate(45deg) translateY(-130px);
  }
  .side:nth-child(6) {
    transform : rotate(225deg) translateY(-130px);
  }
  .yinyáo {
    box-sizing : border-box;
    height : 3px;
    width : 40px;
    background : linear-gradient(to right,black 0%,black 45%,white 45%,white 55%,black 55%,black 100%);
    margin : 3px;
    transform : translate(25%, 39px);
  }
  .side:nth-child(3) {
    transform : rotate(90deg) translateY(-130px);
  }
  .side:nth-child(7) {
    transform : rotate(270deg) translateY(-130px);
  }
  .side:nth-child(4) {
    transform : rotate(135deg) translateY(-130px);
  }
  .side:nth-child(8) {
    transform : rotate(315deg) translateY(-130px);
  }
  div.direction {
    height : 43px;
    transform : translate(-2px, -20px) rotate(-180deg);
    display : flex;
    justify-content : center;
  }
  div.yáo_name {
    height : 15px;
    transform : translate(-2px, -65px) rotate(-180deg);
    display : flex;
    justify-content : center;
    align-items : flex-end;
  }
/*
 *  天地自然河图
 */
  `;
}
