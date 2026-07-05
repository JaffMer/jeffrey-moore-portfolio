function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GRsp62Bluc":
        Script1();
        break;
      case "6lc2dWbFnmg":
        Script2();
        break;
      case "6LT6gw93irL":
        Script3();
        break;
      case "5yb2pUNnKrv":
        Script4();
        break;
      case "5YBWuqPMBoi":
        Script5();
        break;
      case "5yZ6LsCsyBl":
        Script6();
        break;
      case "5UpMcXo5NfJ":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5dbpMq0jmod');
const duration = 2750;
const easing = 'ease-out';
const id = '6aXWSGpuASB';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6oouD2sWX0i');
const duration = 2750;
const easing = 'ease-out';
const id = '68iBT4OjBZI';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5pUP6blsGEP');
const duration = 750;
const easing = 'ease-out';
const id = '6Dm8ItWoZFI';
const floatAmount = 7;
const delay = 0;
addToTimeline(
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6nk8AjnwDtn');
const duration = 750;
const easing = 'ease-out';
const id = '5cNRepCypu8';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5qfwgCbxYoX');
const duration = 750;
const easing = 'ease-out';
const id = '6YbuIFQKVLv';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6mYZbnaQKUP');
const duration = 750;
const easing = 'ease-out';
const id = '5sY0amlhlmm';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6gylKuurIqb');
const duration = 750;
const easing = 'ease-out';
const id = '5dIbNZhihPs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
