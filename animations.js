var morepx = 180;
var mode = 'drk';
var SUI_W = 305;

function expand(eid, pid, by){
  morepx = by-20;
  var ete = document.getElementById(eid);
  ete.style.width = `${by}px`;
  prgsb_arr[pid]['width'] = morepx;
}
function retract(eid, pid, by){
  morepx = by-20;
  var etr = document.getElementById(eid);
  etr.style.width = `${by}px`;
  prgsb_arr[pid]['width'] = morepx;
}
function SUI_Expand(){
  var SUI = document.getElementById('SUI');
  SUI_W = 700;
  SUI.style.left = '300px';
  SUI.style.width = `${SUI_W}px`;
}
function SUI_Retract(){
  var SUI = document.getElementById('SUI');
  SUI_W = 305;
  SUI.style.left = '580px';
  SUI.style.width = `${SUI_W}px`;
}