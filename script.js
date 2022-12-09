var dat = {};
var prds = {};

setInterval(function() {

  String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  }
  
  var now = new Date();
  var hs = now.getHours() * (60 * 60);
  var ms = now.getMinutes() * 60;
  var ss = now.getSeconds();
  var ssm = hs + ms + ss;
  console.log(ssm);

  // Fetch JSON
  fetch('./blocks.json')
    .then((res) => res.json())
    .then((data) => {
      dat = data;
    })
  var day = dat['day'];
  console.log(dat);
  console.log(morepx);
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  for (let i = 0; i < Object.keys(dat['blocks']).length; i++) {
    var period = dat['days'][`day${day}`][i];
    var bid = `block${i}`;
    var start = dat['blocks'][bid]['start'];
    var end = dat['blocks'][bid]['end'];
    var ttl = ssm - start;
    var bl = end - start;
    var b = document.getElementById(`bpb${i}`);
    var prb = document.getElementById(`pbb${i}`);
    var mpx = prgsb_arr[`bpb${i}`]['width'];
    console.log(mpx);
    var from = `${start}`.toHHMMSS();
    var to = `${end}`.toHHMMSS();
    var blt_div = document.getElementById(`boxt${i}`);
    blt_div.innerHTML = `Period ${period} | ${from} - ${to}`;
    blt_div.style.left = `${(mpx/2)-80}px`;
    prb.style.width = `${mpx}px`;
    var bbrkt = document.getElementById(`brkt${i}`);
    bbrkt.style.width = `${(bl/dl)*SUI_W}px`
    bbrkt.style.left = `${((start-dat['start'])/dl)*SUI_W}px`;
    if (ssm > start && ssm < end) {
      var wdt = 0 + ((ttl / (bl)) * mpx);
      b.style.width = `${wdt}px`;
      console.log(wdt);
      bbrkt.style.height = '8px';
      bbrkt.style.borderRadius = '1px';
      var ttlt = `${ttl}`.toHHMMSS();
      }
    if (ssm > end){
      b.style.backgroundColor = '#36e600';
      b.style.width = `${mpx}px`;
      bbrkt.style.height = '7px';
      bbrkt.style.borderRadius = '4px';
    }
    if (ssm < start){
      b.style.width = '0px';
    }
    
  }

    for(let i = 0; i < Object.keys(dat['sub-blocks']).length; i++){
      var sb_id = `sub-block${i}`;
      var start = dat['sub-blocks'][sb_id]['start'];
      var end = dat['sub-blocks'][sb_id]['end'];
      var from = `${start}`.toHHMMSS();
      var to = `${end}`.toHHMMSS();
      var ttl = ssm - start;
      var bl = end - start;
      var mpx = prgsb_arr[`sub_pb${i}`]['width'];
      var block_id = dat['sub-blocks'][sb_id]['id'];
      var wdt = (ttl/bl)*(mpx)
      var pgbs = document.getElementById(`sub-apb${i}`);
      var pbgs = document.getElementById(`sub-bpb${i}`);
      
      pbgs.style.width = `${mpx}px`;
      pgbs.style.width = `${wdt}px`;
      var subtext = document.getElementById(`sbt${i}`);
      var text_size = (14-(block_id.length/4))+((mpx/50)-(180/50));
      subtext.style.left = `${(mpx/2)-140}px`

      subtext.style.fontSize = `14px`;
      subtext.innerHTML = `${block_id} | ${from} - ${to}`;
      var bbrkt = document.getElementById(`sbrkt${i}`);
    bbrkt.style.width = `${(bl/dl)*SUI_W}px`
    bbrkt.style.left = `${((start-dat['start'])/dl)*SUI_W}px`
    var lower = dat['sub-blocks'][sb_id]['lower'];
      
    bbrkt.style.top = `${lower+10}px`;
    var bhex = dat['sub-blocks'][sb_id]['hex'];
    bbrkt.style.backgroundColor = bhex;
                             
    if (ssm > start && ssm < end) {
      var wdt = 0 + ((ttl / (bl)) * mpx);
      pgbs.style.width = `${wdt}px`;
      console.log(wdt);
      bbrkt.style.height = '8px';
      bbrkt.style.borderRadius = '1px';
    }
    if (ssm > end){
      pgbs.style.backgroundColor = '#36e600';
      pgbs.style.width = `${mpx}px`;
      bbrkt.style.height = '7px';
      bbrkt.style.borderRadius = '4px';
    }
    if (ssm < start){
      pgbs.style.width = '0px';
    }
    


  }
  var suit = document.getElementById('suitid');
  suit.innerHTML = `Day ${day}`;
  var SUI_H = document.getElementById('block-holder');
  SUI_H.style.width = `${SUI_W-20}px`;
  var marker = document.getElementById('smarker');
  var tte = ssm-dat['start'];
  if(ssm > dat['start'] && ssm < dat['end']){
    marker.style.left = `${(tte/dl)*(SUI_W)-2}px`;
  }
  if(ssm > dat['end']){
    marker.style.left = `${SUI_W}px`;
  }
  if(ssm < dat['start']){
    marker.style.left = '0px';
  }
}, 20)