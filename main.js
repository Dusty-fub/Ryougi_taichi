import print from "./print.css";

console.dir(print);

let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string1 = getStr();

let string2 = "";

let n = 0;

let isPlay = true;
let duration = 50;

function pause() {
  isPlay = false;
}

function play() {
  isPlay = true;
  step();
}
function Slow() {
  duration = 100;
}
function Normal() {
  duration = 50;
}
function Fast() {
  duration = 0;
}

btnPause.addEventListener("click", pause, false);
btnPlay.addEventListener("click", play, false);
btnSlow.addEventListener("click", Slow, false);
btnNormal.addEventListener("click", Normal, false);
btnFast.addEventListener("click", Fast, false);

function step() {
  setTimeout(() => {
    if (n < string1.length) {
      if (string1[n] === "\n") {
        string2 += "<br/>";
      }
      window.scrollTo(0, html.scrollHeight);

      string2 += string1[n];
      html.innerHTML = string2;
      style.innerHTML = string1.substring(0, n);

      n += 1;
      if (isPlay) {
        step();
      }
    }
  }, duration);
}

step();

function getStr() {
  return `/*你好，
    
      *接下来我将演示
      */

* {
  margin : 0;
  padding : 0;
}
.box {
  width : 320px;
  height : 320px;
  display : flex;
  justify-content : center;
  align-items : center;
}
/*
     * 方位、卦名
     */
.direction {
  height : 43px;
  font-size : 40%;
  transform : translate(-2px, -20px) rotate(-180deg);
  display : flex;
  justify-content : center;
}
.yáo_name {
  height : 15px;
  font-size : 50%;
  transform : translate(-2px, -65px) rotate(-180deg);
  display : flex;
  justify-content : center;
  align-items : flex-end;
}
/*
     * 阴爻 阳爻
     */
.side {
  width : 70px;
  height : 60px;
  position : absolute;
}
.side:nth-child(1) {
  transform : rotate(0deg) translateY(-130px);
}
.side:nth-child(5) {
  transform : rotate(180deg) translateY(-130px);
}
.side:nth-child(2) {
  transform : rotate(45deg) translateY(-130px);
}
.side:nth-child(6) {
  transform : rotate(225deg) translateY(-130px);
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
.yangyáo {
  box-sizing : border-box;
  height : 3px;
  width : 40px;
  background-color : black;
  margin : 3px;
  transform : translate(25%, 39px);
}
.yinyáo {
  box-sizing : border-box;
  height : 3px;
  width : 40px;
  background : linear-gradient(
  to right,
  black 0%,
  black 45%,
  white 45%,
  white 55%,
  black 55%,
  black 100%
  );
  margin : 3px;
  transform : translate(25%, 39px);
}
.taichi {
  width : 200px;
  height : 200px;
  box-sizing : border-box;
  border : 2px solid black;
  background : linear-gradient(112deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%);
  border-radius : 50%;
  position : absolute;
}
.lines_in_pic {
  box-sizing : border-box;
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
  background : linear-gradient(
  to right,
  black 0%,
  black 28.5%,
  white 28.5%,
  white 50%,
  black 50%,
  black 69.8%,
  white 69.8%,
  white 100%
  );
  z-index : 1;
  margin-left : -.15px;
}
.line_in_liǎngyí:nth-child(2) {
  transform : rotate(67deg);
  background : linear-gradient(
  to right,
  black 0%,
  black 50%,
  white 50%,
  white 100%
  );
  margin-top : -.4px;
  z-index : 1;
}
.line_in_liǎngyí:nth-child(3) {
  transform : rotate(112deg);
  background : linear-gradient(
  to right,
  black 0%,
  black 50%,
  white 50%,
  white 100%
  );
  z-index : 1;
}
.line_in_liǎngyí:nth-child(4) {
  transform : rotate(157deg);
  background : linear-gradient(
  to right,
  white 0%,
  white 16.8%,
  black 16.8%,
  black 50%,
  white 50%,
  white 85.6%,
  black 85.6%,
  black 100%
  );
  z-index : 1;
}
/*
     * 阴阳鱼
     */
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
/*图名“天地自然河图”，
     *源自明初赵伪谦《六书本义》。
     */
`;
}
